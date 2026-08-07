    <script type="module">
        let gisTokenClient = null;
        let cachedAccessToken = null;
        let currentUser = null;
        let driveFileSyncTimeout = null;

        const DRIVE_FOLDER_NAME = 'Metabolic Calculator Backups';
        const DRIVE_FILE_NAME = 'metabolic_calculator_backup.json';
        const DEFAULT_CLIENT_ID = '859528638907-30p83takq9j1a1k44urmd5oq9jbbuep8.apps.googleusercontent.com';

        function saveDriveSession(token, userObj, expiresInSeconds = 3599) {
            if (token) cachedAccessToken = token;
            if (userObj) currentUser = userObj;
            if (!currentUser) currentUser = { displayName: 'Google Drive User', email: '' };
            const expiresAt = Date.now() + (expiresInSeconds * 1000);

            try {
                if (token) localStorage.setItem('metabolic_drive_token', token);
                localStorage.setItem('metabolic_drive_token_expires', expiresAt.toString());
                localStorage.setItem('metabolic_drive_user', JSON.stringify({
                    displayName: currentUser.displayName || currentUser.email || 'Google Drive User',
                    email: currentUser.email || '',
                    photoURL: currentUser.photoURL || ''
                }));
                localStorage.setItem('metabolic_drive_logged_in', 'true');
            } catch (e) {
                console.warn('Storage save notice:', e);
            }
        }

        function clearDriveSession() {
            cachedAccessToken = null;
            currentUser = null;
            try {
                localStorage.removeItem('metabolic_drive_token');
                localStorage.removeItem('metabolic_drive_token_expires');
                localStorage.removeItem('metabolic_drive_user');
                localStorage.removeItem('metabolic_drive_logged_in');
            } catch (e) {}
        }

        function loadSavedDriveSession() {
            try {
                const isLoggedIn = localStorage.getItem('metabolic_drive_logged_in') === 'true';
                if (!isLoggedIn) return false;

                const token = localStorage.getItem('metabolic_drive_token');
                const expiresAt = parseInt(localStorage.getItem('metabolic_drive_token_expires') || '0', 10);
                const savedUserStr = localStorage.getItem('metabolic_drive_user');
                const savedUser = savedUserStr ? JSON.parse(savedUserStr) : { displayName: 'Google Drive User', email: '' };

                currentUser = savedUser;
                updateUIForUser(currentUser);

                if (token && expiresAt > (Date.now() + 60000)) {
                    cachedAccessToken = token;
                    return true;
                }
            } catch (e) {
                console.warn('Session load notice:', e);
            }
            return false;
        }

        function setupGisOAuth(clientId) {
            const activeClientId = clientId || DEFAULT_CLIENT_ID;
            if (window.google && window.google.accounts && window.google.accounts.oauth2) {
                gisTokenClient = window.google.accounts.oauth2.initTokenClient({
                    client_id: activeClientId,
                    scope: 'https://www.googleapis.com/auth/drive.file',
                    callback: async (tokenResponse) => {
                        if (tokenResponse.error) {
                            console.warn('GIS Token error:', tokenResponse);
                            const lang = document.getElementById('langSelect')?.value || 'fi';
                            setDriveStatusUI('error', (lang === 'en' ? 'Sign-in notice: ' : 'Kirjautumisilmoitus: ') + (tokenResponse.error_description || tokenResponse.error));
                            const bn = document.getElementById('braveNotice');
                            const tb = document.getElementById('openInNewTabBtn');
                            if (bn) bn.style.display = 'block';
                            if (tb) tb.style.display = 'block';
                            return;
                        }
                        if (tokenResponse.access_token) {
                            const expiresSec = tokenResponse.expires_in ? parseInt(tokenResponse.expires_in, 10) : 3599;
                            saveDriveSession(tokenResponse.access_token, currentUser || { displayName: 'Google Drive User', email: '' }, expiresSec);
                            updateUIForUser(currentUser);
                            await synkkaaOnSignIn();
                        }
                    }
                });
            } else {
                setTimeout(() => setupGisOAuth(activeClientId), 500);
            }
        }

        async function getOrCreateDriveFolder(token) {
            const q = encodeURIComponent(`name = '${DRIVE_FOLDER_NAME}' and mimeType = 'application/vnd.google-apps.folder' and trashed = false`);
            const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name)`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (!res.ok) throw new Error(`Drive folder search error ${res.status}`);
            const data = await res.json();
            if (data.files && data.files.length > 0) {
                return data.files[0].id;
            }

            const createRes = await fetch('https://www.googleapis.com/drive/v3/files', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: DRIVE_FOLDER_NAME,
                    mimeType: 'application/vnd.google-apps.folder'
                })
            });
            if (!createRes.ok) throw new Error(`Folder creation error ${createRes.status}`);
            const createdFolder = await createRes.json();
            return createdFolder.id;
        }

        async function initGoogleDriveSync() {
            let clientId = DEFAULT_CLIENT_ID;
            setupGisOAuth(clientId);

            // Restore saved session on page load
            const hasValidToken = loadSavedDriveSession();
            if (hasValidToken) {
                synkkaaOnSignIn();
            } else if (localStorage.getItem('metabolic_drive_logged_in') === 'true') {
                // Was logged in previously, try background renewal
                setTimeout(async () => {
                    try {
                        await ensureAccessToken();
                        synkkaaOnSignIn();
                    } catch(e) {
                        console.warn('Silent token refresh on load notice:', e);
                        const lang = document.getElementById('langSelect')?.value || 'fi';
                        setDriveStatusUI('warning', lang === 'en' ? 'Connection expired. Click "Sync Now" to renew.' : 'Yhteys vanhentunut. Napsauta "Synkronoitoi nyt" uudistaaksesi.');
                    }
                }, 1000);
            }

            // Show new tab button and Brave notice if in an iframe or if Brave is detected
            const isInIframe = window.self !== window.top;
            const bn = document.getElementById('braveNotice');
            const tb = document.getElementById('openInNewTabBtn');

            if (isInIframe || (navigator.brave && typeof navigator.brave.isBrave === 'function')) {
                if (bn) bn.style.display = 'block';
                if (tb) tb.style.display = 'block';
            }

            const signBtn = document.getElementById('googleSignInBtn');
            if (signBtn) {
                signBtn.addEventListener('click', async () => {
                    const lang = document.getElementById('langSelect')?.value || 'fi';
                    setDriveStatusUI('loading', lang === 'en' ? 'Signing in to Google...' : 'Kirjaudutaan Google-tilille...');

                    if (gisTokenClient) {
                        try {
                            gisTokenClient.requestAccessToken({ prompt: 'select_account' });
                            return;
                        } catch (gisErr) {
                            console.warn('GIS token request failed:', gisErr);
                        }
                    }

                    if (window.self !== window.top) {
                        setDriveStatusUI('warning', lang === 'en' ? 'Sign-in requires a top-level window. Opening new tab...' : 'Kirjautuminen vaatii pääikkunan. Avataan uusi välilehti...');
                        window.open(window.location.href, '_blank');
                    }
                });
            }
        }

        function updateUIForUser(user) {
            const loggedOutUI = document.getElementById('driveLoggedOutUI');
            const loggedInUI = document.getElementById('driveLoggedInUI');
            if (loggedOutUI) loggedOutUI.style.display = 'none';
            if (loggedInUI) loggedInUI.style.display = 'block';
            
            const nameEl = document.getElementById('userName');
            const emailEl = document.getElementById('userEmail');
            if (nameEl) nameEl.textContent = user.displayName || user.email || 'Google User';
            if (emailEl) emailEl.textContent = user.email || '';
            
            const avatar = document.getElementById('userAvatar');
            if (avatar) {
                if (user.photoURL) {
                    avatar.src = user.photoURL;
                    avatar.style.display = 'block';
                } else {
                    avatar.style.display = 'none';
                }
            }
        }

        let lastDriveSyncTime = null;
        let isSyncingToDrive = false;

        function updateUIForLoggedOut() {
            const loggedOutUI = document.getElementById('driveLoggedOutUI');
            const loggedInUI = document.getElementById('driveLoggedInUI');
            if (loggedOutUI) loggedOutUI.style.display = 'block';
            if (loggedInUI) loggedInUI.style.display = 'none';
            
            lastDriveSyncTime = null;
            const lang = document.getElementById('langSelect')?.value || 'fi';
            const headerText = document.getElementById('headerDriveStatusText');
            const headerBadge = document.getElementById('headerDriveBadge');
            if (headerText) headerText.textContent = lang === 'en' ? 'Not connected' : 'Ei kirjauduttu';
            if (headerBadge) {
                headerBadge.style.borderColor = '#333';
                headerBadge.style.color = '#888';
                headerBadge.title = '';
            }
        }

        function setDriveStatusUI(type, message) {
            const statusEl = document.getElementById('driveSyncStatus');
            const headerText = document.getElementById('headerDriveStatusText');
            const headerBadge = document.getElementById('headerDriveBadge');
            const lang = document.getElementById('langSelect')?.value || 'fi';
            
            if (statusEl) statusEl.textContent = message;
            
            if (type === 'success') {
                lastDriveSyncTime = new Date();
                const nowStr = lastDriveSyncTime.toLocaleTimeString(lang === 'en' ? 'en-US' : 'fi-FI', { hour: '2-digit', minute: '2-digit' });
                if (statusEl) statusEl.style.color = '#00ff00';
                if (headerText) headerText.textContent = lang === 'en' ? `🟢 Synced (${nowStr})` : `🟢 Synkronoitu (${nowStr})`;
                if (headerBadge) {
                    headerBadge.style.borderColor = '#00ff00';
                    headerBadge.style.color = '#00ff00';
                    headerBadge.title = lang === 'en' ? `Google Drive synced at ${nowStr}` : `Google Drive synkronoitu klo ${nowStr}`;
                }
            } else if (type === 'loading') {
                if (statusEl) statusEl.style.color = '#ffff00';
                if (headerText) {
                    if (lastDriveSyncTime) {
                        const nowStr = lastDriveSyncTime.toLocaleTimeString(lang === 'en' ? 'en-US' : 'fi-FI', { hour: '2-digit', minute: '2-digit' });
                        headerText.textContent = `🔄 (${nowStr})`;
                    } else {
                        headerText.textContent = lang === 'en' ? '🔄 Syncing...' : '🔄 Synkronoidaan...';
                    }
                }
                if (headerBadge) {
                    headerBadge.style.borderColor = '#ffff00';
                    headerBadge.style.color = '#ffff00';
                }
            } else if (type === 'warning') {
                if (statusEl) statusEl.style.color = '#ffaa00';
                if (headerText) headerText.textContent = lang === 'en' ? '⚠️ Connect Drive' : '⚠️ Yhdistä Drive';
                if (headerBadge) {
                    headerBadge.style.borderColor = '#ffaa00';
                    headerBadge.style.color = '#ffaa00';
                    headerBadge.title = '';
                }
            } else {
                if (statusEl) statusEl.style.color = '#ff4444';
                if (headerText) headerText.textContent = lang === 'en' ? '❌ Error' : '❌ Virhe';
                if (headerBadge) {
                    headerBadge.style.borderColor = '#ff4444';
                    headerBadge.style.color = '#ff4444';
                    headerBadge.title = '';
                }
            }
        }

        async function ensureAccessToken() {
            const tokenExpires = parseInt(localStorage.getItem('metabolic_drive_token_expires') || '0', 10);
            if (cachedAccessToken && tokenExpires > (Date.now() + 60000)) {
                return cachedAccessToken;
            }

            // 1. Try GIS token client silent request first
            if (gisTokenClient) {
                try {
                    const token = await new Promise((resolve, reject) => {
                        const originalCallback = gisTokenClient.callback;
                        gisTokenClient.callback = (res) => {
                            if (originalCallback) originalCallback(res);
                            if (res && res.access_token) {
                                const expiresSec = res.expires_in ? parseInt(res.expires_in, 10) : 3599;
                                saveDriveSession(res.access_token, currentUser, expiresSec);
                                resolve(res.access_token);
                            } else {
                                reject(new Error(res?.error_description || res?.error || 'Silent token request failed.'));
                            }
                        };
                        try {
                            gisTokenClient.requestAccessToken({ prompt: '' });
                        } catch (e) {
                            reject(e);
                        }
                    });
                    return token;
                } catch (silentErr) {
                    console.warn('Silent token refresh notice:', silentErr);
                }
            }

            // 2. Fallback: prompt for account selection via GIS
            if (gisTokenClient) {
                return new Promise((resolve, reject) => {
                    const originalCallback = gisTokenClient.callback;
                    gisTokenClient.callback = (res) => {
                        if (originalCallback) originalCallback(res);
                        if (res && res.access_token) {
                            const expiresSec = res.expires_in ? parseInt(res.expires_in, 10) : 3599;
                            saveDriveSession(res.access_token, currentUser, expiresSec);
                            resolve(res.access_token);
                        } else {
                            reject(new Error('Access token request was cancelled or blocked.'));
                        }
                    };
                    try {
                        gisTokenClient.requestAccessToken({ prompt: 'select_account' });
                    } catch (e) {
                        reject(e);
                    }
                });
            }

            throw new Error('Google Identity Services client not initialized');
        }

        async function findDriveBackupFile(token, folderId) {
            if (folderId) {
                const q = encodeURIComponent(`name = '${DRIVE_FILE_NAME}' and '${folderId}' in parents and trashed = false`);
                const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${q}&fields=files(id,name,modifiedTime)`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                if (res.ok) {
                    const data = await res.json();
                    if (data.files && data.files.length > 0) return data.files[0];
                }
            }

            const fallbackQ = encodeURIComponent(`(name = '${DRIVE_FILE_NAME}' or name = 'metabolinen_laskuri_data.json') and trashed = false`);
            const fallbackRes = await fetch(`https://www.googleapis.com/drive/v3/files?q=${fallbackQ}&fields=files(id,name,modifiedTime)`, {
                headers: { 'Authorization': `Bearer ${token}` }
            });
            if (fallbackRes.ok) {
                const fallbackData = await fallbackRes.json();
                if (fallbackData.files && fallbackData.files.length > 0) return fallbackData.files[0];
            }
            return null;
        }

        function mergeMealsArrays(mealsA = [], mealsB = []) {
            const merged = [];
            const usedIndicesB = new Set();

            function isSameMeal(m1, m2) {
                if (!m1 || !m2) return false;
                const time1 = m1.time || "";
                const time2 = m2.time || "";
                const c1 = Number(m1.c) || 0;
                const c2 = Number(m2.c) || 0;
                const p1 = Number(m1.p) || 0;
                const p2 = Number(m2.p) || 0;
                const f1 = Number(m1.f) || 0;
                const f2 = Number(m2.f) || 0;
                return time1 === time2 && c1 === c2 && p1 === p2 && f1 === f2;
            }

            mealsA.forEach(m1 => {
                merged.push({ ...m1 });
                for (let i = 0; i < mealsB.length; i++) {
                    if (!usedIndicesB.has(i) && isSameMeal(m1, mealsB[i])) {
                        usedIndicesB.add(i);
                        break;
                    }
                }
            });

            let addedFromB = 0;
            mealsB.forEach((m2, i) => {
                if (!usedIndicesB.has(i)) {
                    merged.push({ ...m2 });
                    addedFromB++;
                }
            });

            merged.sort((a, b) => (a.time || "00:00").localeCompare(b.time || "00:00"));

            return { mergedMeals: merged, addedFromB };
        }

        function yhdistaVarmuuskopioData(localPayload, drivePayload) {
            if (!drivePayload || typeof drivePayload !== 'object') {
                return { mergedPayload: localPayload, localUpdated: false, driveUpdated: true };
            }
            if (!localPayload || typeof localPayload !== 'object') {
                return { mergedPayload: drivePayload, localUpdated: true, driveUpdated: false };
            }

            const localDB = localPayload.historyDB || {};
            const driveDB = drivePayload.historyDB || {};

            const localExportedAt = localPayload.exportedAt || "";
            const driveExportedAt = drivePayload.exportedAt || "";

            const allDateKeys = new Set([...Object.keys(localDB), ...Object.keys(driveDB)]);

            const mergedDB = {};
            let localUpdated = false;
            let driveUpdated = false;

            allDateKeys.forEach(dateStr => {
                const localDay = localDB[dateStr];
                const driveDay = driveDB[dateStr];

                if (localDay && !driveDay) {
                    mergedDB[dateStr] = JSON.parse(JSON.stringify(localDay));
                    driveUpdated = true;
                } else if (!localDay && driveDay) {
                    mergedDB[dateStr] = JSON.parse(JSON.stringify(driveDay));
                    localUpdated = true;
                } else {
                    const timeLocal = localDay.updatedAt || localExportedAt || "";
                    const timeDrive = driveDay.updatedAt || driveExportedAt || "";

                    if (timeLocal > timeDrive) {
                        mergedDB[dateStr] = JSON.parse(JSON.stringify(localDay));
                        driveUpdated = true;
                    } else if (timeDrive > timeLocal) {
                        mergedDB[dateStr] = JSON.parse(JSON.stringify(driveDay));
                        localUpdated = true;
                    } else {
                        const strLocal = JSON.stringify(localDay.meals || []);
                        const strDrive = JSON.stringify(driveDay.meals || []);
                        if (strLocal === strDrive) {
                            mergedDB[dateStr] = JSON.parse(JSON.stringify(localDay));
                        } else {
                            const mealsA = localDay.meals || [];
                            const mealsB = driveDay.meals || [];

                            const mergeAtoB = mergeMealsArrays(mealsA, mealsB);
                            const mergeBtoA = mergeMealsArrays(mealsB, mealsA);

                            if (mergeAtoB.addedFromB > 0) localUpdated = true;
                            if (mergeBtoA.addedFromB > 0) driveUpdated = true;

                            const finalMeals = mergeAtoB.mergedMeals;
                            let totalC = 0, totalP = 0, totalF = 0;
                            finalMeals.forEach(m => {
                                totalC += Number(m.c) || 0;
                                totalP += Number(m.p) || 0;
                                totalF += Number(m.f) || 0;
                            });

                            const mergedCalc = { ...(driveDay.calculated || {}), ...(localDay.calculated || {}) };

                            mergedDB[dateStr] = {
                                macros: { carbs: totalC, protein: totalP, fat: totalF },
                                meals: finalMeals,
                                calculated: Object.keys(mergedCalc).length > 0 ? mergedCalc : null,
                                updatedAt: localDay.updatedAt || driveDay.updatedAt || new Date().toISOString()
                            };
                        }
                    }
                }
            });

            const localParams = localPayload.userParams || {};
            const driveParams = drivePayload.userParams || {};
            const mergedParams = (localExportedAt >= driveExportedAt)
                ? { ...driveParams, ...localParams }
                : { ...localParams, ...driveParams };

            const mergedPayload = {
                app: "metabolic_calculator_v20",
                version: "1.0",
                exportedAt: (localExportedAt >= driveExportedAt ? localExportedAt : driveExportedAt) || new Date().toISOString(),
                lang: localPayload.lang || drivePayload.lang || 'fi',
                userParams: mergedParams,
                historyDB: mergedDB
            };

            return {
                mergedPayload,
                localUpdated,
                driveUpdated
            };
        }

        async function kirjoitaPayloadDriveen(payload, token, folderId, existing) {
            const jsonStr = JSON.stringify(payload, null, 2);
            if (existing) {
                return fetch(`https://www.googleapis.com/upload/drive/v3/files/${existing.id}?uploadType=media`, {
                    method: 'PATCH',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    },
                    body: jsonStr
                });
            } else {
                const metadata = {
                    name: DRIVE_FILE_NAME,
                    parents: [folderId],
                    mimeType: 'application/json'
                };
                const boundary = '-------314159265358979323846';
                const delimiter = "\r\n--" + boundary + "\r\n";
                const close_delim = "\r\n--" + boundary + "--";
                const multipartBody =
                    delimiter +
                    'Content-Type: application/json; charset=UTF-8\r\n\r\n' +
                    JSON.stringify(metadata) +
                    delimiter +
                    'Content-Type: application/json\r\n\r\n' +
                    jsonStr +
                    close_delim;

                return fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
                    method: 'POST',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': `multipart/related; boundary=${boundary}`
                    },
                    body: multipartBody
                });
            }
        }

        async function tallennaGoogleDriveen() {
            if (isDemoMode) {
                console.warn('Google Drive sync blocked: Demo mode is active.');
                const lang = document.getElementById('langSelect')?.value || 'fi';
                setDriveStatusUI('warning', lang === 'en' ? '⚠️ Demo mode active - Drive save blocked' : '⚠️ Esittelytila päällä - tallennus suljettu');
                return false;
            }
            if (isSyncingToDrive) return false;
            isSyncingToDrive = true;
            const lang = document.getElementById('langSelect')?.value || 'fi';
            try {
                setDriveStatusUI('loading', lang === 'en' ? '🔄 Saving to Google Drive...' : '🔄 Tallennetaan Google Driveen...');
                const token = await ensureAccessToken();
                const folderId = await getOrCreateDriveFolder(token);
                const existing = await findDriveBackupFile(token, folderId);

                const localPayload = window.haeVarmuuskopioPayload ? window.haeVarmuuskopioPayload() : {};
                let payloadToSave = localPayload;

                if (existing) {
                    try {
                        const fetchRes = await fetch(`https://www.googleapis.com/drive/v3/files/${existing.id}?alt=media`, {
                            headers: { 'Authorization': `Bearer ${token}` }
                        });
                        if (fetchRes.ok) {
                            const driveData = await fetchRes.json();
                            const { mergedPayload, localUpdated } = yhdistaVarmuuskopioData(localPayload, driveData);
                            payloadToSave = mergedPayload;
                            if (localUpdated && window.palautaVarmuuskopioPayload) {
                                window.palautaVarmuuskopioPayload(mergedPayload);
                            }
                        }
                    } catch (mergeErr) {
                        console.warn('Drive read before save notice:', mergeErr);
                    }
                }

                const res = await kirjoitaPayloadDriveen(payloadToSave, token, folderId, existing);
                if (!res.ok) throw new Error(`Drive save status ${res.status}`);

                const nowStr = new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'fi-FI', { hour: '2-digit', minute: '2-digit' });
                setDriveStatusUI('success', lang === 'en' ? `🟢 Synced to Google Drive (${nowStr})` : `🟢 Synkronoitu Google Driveen (${nowStr})`);
                return true;
            } catch (err) {
                console.error('Drive save error:', err);
                setDriveStatusUI('error', lang === 'en' ? '❌ Drive save failed: ' + err.message : '❌ Tallennus Driveen epäonnistui: ' + err.message);
                return false;
            } finally {
                isSyncingToDrive = false;
            }
        }

        async function lataaGoogleDrivesta() {
            if (isDemoMode) {
                toggleDemoMode();
            }
            if (isSyncingToDrive) return;
            isSyncingToDrive = true;
            const lang = document.getElementById('langSelect')?.value || 'fi';
            try {
                setDriveStatusUI('loading', lang === 'en' ? '🔄 Fetching from Google Drive...' : '🔄 Haetaan Google Drivestä...');
                const token = await ensureAccessToken();
                const folderId = await getOrCreateDriveFolder(token);
                const existing = await findDriveBackupFile(token, folderId);

                if (!existing) {
                    alert(lang === 'en' ? 'No backup file found in Google Drive! Creating a new backup...' : 'Google Drivestä ei löytynyt varmuuskopiotiedostoa! Luodaan uusi varmuuskopio...');
                    isSyncingToDrive = false;
                    await tallennaGoogleDriveen();
                    return;
                }

                const res = await fetch(`https://www.googleapis.com/drive/v3/files/${existing.id}?alt=media`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });

                if (!res.ok) throw new Error(`Download error ${res.status}`);
                const driveData = await res.json();

                const localPayload = window.haeVarmuuskopioPayload ? window.haeVarmuuskopioPayload() : {};
                const { mergedPayload, localUpdated, driveUpdated } = yhdistaVarmuuskopioData(localPayload, driveData);

                if (window.palautaVarmuuskopioPayload) {
                    window.palautaVarmuuskopioPayload(mergedPayload);
                }

                if (driveUpdated) {
                    await kirjoitaPayloadDriveen(mergedPayload, token, folderId, existing);
                }

                const nowStr = new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'fi-FI', { hour: '2-digit', minute: '2-digit' });
                setDriveStatusUI('success', lang === 'en' ? `🟢 Synced with Google Drive (${nowStr})` : `🟢 Synkronoitu Google Driven kanssa (${nowStr})`);
                alert(lang === 'en' ? 'Data merged and synchronized successfully with Google Drive!' : 'Tiedot yhdistetty ja synkronoitu onnistuneesti Google Driven kanssa!');
            } catch (err) {
                console.error('Drive fetch error:', err);
                setDriveStatusUI('error', lang === 'en' ? '❌ Drive load failed: ' + err.message : '❌ Lataus Drivestä epäonnistui: ' + err.message);
                alert(lang === 'en' ? 'Failed to fetch from Google Drive: ' + err.message : 'Virhe ladattaessa Drivestä: ' + err.message);
            } finally {
                isSyncingToDrive = false;
            }
        }

        async function synkkaaOnSignIn() {
            if (isDemoMode) {
                console.warn('Google Drive initial sync skipped: Demo mode is active.');
                return;
            }
            if (isSyncingToDrive) return;
            isSyncingToDrive = true;
            try {
                const token = await ensureAccessToken();
                const folderId = await getOrCreateDriveFolder(token);
                const existing = await findDriveBackupFile(token, folderId);

                const localPayload = window.haeVarmuuskopioPayload ? window.haeVarmuuskopioPayload() : {};

                if (existing) {
                    const res = await fetch(`https://www.googleapis.com/drive/v3/files/${existing.id}?alt=media`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    });
                    if (res.ok) {
                        const driveData = await res.json();
                        const { mergedPayload, localUpdated, driveUpdated } = yhdistaVarmuuskopioData(localPayload, driveData);

                        if (localUpdated && window.palautaVarmuuskopioPayload) {
                            window.palautaVarmuuskopioPayload(mergedPayload);
                        }

                        if (driveUpdated) {
                            await kirjoitaPayloadDriveen(mergedPayload, token, folderId, existing);
                        }

                        const lang = document.getElementById('langSelect')?.value || 'fi';
                        const nowStr = new Date().toLocaleTimeString(lang === 'en' ? 'en-US' : 'fi-FI', { hour: '2-digit', minute: '2-digit' });
                        setDriveStatusUI('success', lang === 'en' ? `🟢 Synced with Google Drive (${nowStr})` : `🟢 Synkronoitu Google Driven kanssa (${nowStr})`);
                    }
                } else {
                    isSyncingToDrive = false;
                    await tallennaGoogleDriveen();
                    return;
                }
            } catch (e) {
                console.warn('Initial sync error:', e);
            } finally {
                isSyncingToDrive = false;
            }
        }

        function debouncedAutoSyncToDrive() {
            if (isDemoMode) return;
            if (!currentUser && !cachedAccessToken) return;
            if (isSyncingToDrive) return;
            if (driveFileSyncTimeout) clearTimeout(driveFileSyncTimeout);
            driveFileSyncTimeout = setTimeout(() => {
                if (isDemoMode) return;
                if (isSyncingToDrive) return;
                tallennaGoogleDriveen().catch(err => console.warn('Auto sync error:', err));
            }, 2000);
        }

        async function kirjauduUlosGoogle() {
            const lang = document.getElementById('langSelect')?.value || 'fi';
            
            if (cachedAccessToken && window.google && window.google.accounts && window.google.accounts.oauth2) {
                try {
                    window.google.accounts.oauth2.revoke(cachedAccessToken, () => {});
                } catch (e) {}
            }

            clearDriveSession();
            updateUIForLoggedOut();
            alert(lang === 'en' ? 'Logged out from Google Drive.' : 'Kirjauduttu ulos Google-tililtä.');
        }

        window.synkkaaGoogleDriveManuaalisesti = tallennaGoogleDriveen;
        window.lataaGoogleDrivesta = lataaGoogleDrivesta;
        window.kirjauduUlosGoogle = kirjauduUlosGoogle;
        window.triggerAutoSyncToDrive = debouncedAutoSyncToDrive;

        window.addEventListener('DOMContentLoaded', initGoogleDriveSync);
