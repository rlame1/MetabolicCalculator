        const translations = {
            fi: {
                langLabel: "🌐 KIELI:",
                optionsBtn: "⚙️ ASETUKSET",
                optionsTitle: "⚙️ LISÄASETUKSET JA HALLINTA",
                privacyPolicyLink: "🔒 Tietosuojaseloste / Privacy Policy ↗",
                demoBtnOn: "🎭 KÄYNNISTÄ ESITTELYTILA (DEMO)",
                demoBtnOff: "❌ SULJE ESITTELYTILA (PALAA OMIIN)",
                demoSelectLabel: "VALITSE DEMO-PÄIVÄ:",
                demoDay1: "1: ARKI",
                demoDay2: "2: PE (TV)",
                demoDay3: "3: LA (HERKKU)",
                backupTitle: "💾 DATAN VARMUUSKOPIOINTI JA TUONTI",
                backupDesc: "Lataa kaikki tallennetut päivä- ja profiilitiedot talteen JSON-tiedostona tai palauta aiemmin varmuuskopioitu data.",
                exportBackupBtn: "💾 LATAA VARMUUSKOPIO (EXPORT)",
                importBackupBtn: "📥 TUO VARMUUSKOPIO (IMPORT)",
                driveTitle: "🌐 GOOGLE DRIVE AUTOMAATTISYNKRONOINTI",
                driveDesc: "Kirjaudu sisään Google-tililläsi tallentaaksesi ja synkronoidaksesi laskurin tiedot automaattisesti eri laitteidesi välillä. Sovellus käyttää rajoitettua käyttöoikeutta (drive.file) ja käsittelee ainoastaan omaa varmuuskopiotiedostoaan. Mitään muita Google Driven tiedostojasi ei lueta eikä käsitellä.",
                signInWithGoogle: "Kirjaudu sisään Googlella",
                syncNowBtn: "🔄 SYNKRONOI NYT",
                loadFromDriveBtn: "📥 LATAA DRIVESTÄ",
                logoutBtn: "🚪 KIRJAUDU ULOS",
                masterResetDesc: "Tyhjennä laskurin koko muisti (kaikki tallennetut päivät ja profiilitiedot).",
                masterResetBtn: "⚠️ NOLLAA KAIKKI TIEDOT (MASTER RESET)",
                mainTitle: "🧬 METABOLINEN LASKURI v1.0",
                mainSub: "Käytä yläkulman \"ASETUKSET\"-painiketta esittelytilan tai nollauksen avaamiseen.",
                dateSummary: "📅 VALITSE PÄIVÄMÄÄRÄ",
                dateLabel: "Päivämäärä:",
                prevDayBtn: "Edellinen",
                nextDayBtn: "Seuraava",
                prevDayBtnTitle: "Edellinen päivä (← / Vasen nuoli)",
                nextDayBtnTitle: "Seuraava päivä (→ / Oikea nuoli)",
                floatPrevTitle: "Edellinen päivä (← / Vasen nuoli)",
                floatNextTitle: "Seuraava päivä (→ / Oikea nuoli)",
                floatDateTitle: "Tarkasteltava päivämäärä (Napsauta valitaksesi)",
                floatPrevText: "EDELL.",
                floatNextText: "SEUR.",
                cumSummary: "📊 KUMULATIIVINEN HISTORIAYHTEENVETO",
                btnLast7Days: "🗓️ VIIMEISET 7 PÄIVÄÄ (KULUNEET)",
                btnLast30Days: "🗓️ VIIMEISET 30 PÄIVÄÄ (KULUNEET)",
                cumStartLabel: "📅 ALKUPÄIVÄMÄÄRÄ:",
                cumEndLabel: "📅 LOPPUPÄIVÄMÄÄRÄ:",
                cumDays: "Seurattuja päiviä yhteensä:",
                cumEnergy: "Nautittu kokonaisenergia:",
                cumDeficit: "Kertynyt kalorisaldo:",
                cumSaldoExpl: "(Plussalla [+] = Syöty yli kulutuksen, painoa tullut lisää | Negatiivinen [-] = Syöty alle kulutuksen, laihduttu. Laskelma sisältää vain päättyneet kuluneet päiväjaksot.)",
                cumSurplus: "Kertynyt kaloriylitys",
                cumMtor: "Lihassuoja (mTOR) aktivoitu:",
                sec1Title: "1. BIOLOGISET PARAMETRIT",
                genderLabel: "Sukupuoli:",
                genderMale: "Mies",
                genderFemale: "Nainen",
                ageLabel: "Ikä (vuotta) [Vapaaehtoinen]:",
                heightLabel: "Pituus (cm) [Vapaaehtoinen]:",
                weightLabel: "Nykyinen Paino (kg):",
                waistLabel: "Vyötärön ympärys (cm) [Vapaaehtoinen]:",
                neckLabel: "Niskan ympärys (cm) [Vapaaehtoinen]:",
                hipLabel: "Lantion ympärys (cm) [Naisilla vapaaehtoinen]:",
                bodyFatLabel: "Oma rasvaprosentti (%) [Ohjelma laskee jos pituus, niska ja vyötärö (ja naisilla lantio) annettu. Tai syötä oma:]",
                activityLabel: "Aktiivisuustason kerroin:",
                act1: "Passiivinen (istumatyö, vähän/ei liikuntaa) [1.2]",
                act2: "Perusaktiivinen (vakio oletus) [1.25]",
                act3: "Kevyt aktiivisuus (liikuntaa 1–3 krt/vko) [1.375]",
                act4: "Kohtalainen aktiivisuus (liikuntaa 3–5 krt/vko) [1.55]",
                act5: "Erittäin aktiivinen (liikuntaa 6–7 krt/vko) [1.725]",
                act6: "Äärimmäisen aktiivinen (fyysinen työ + kova urheilu) [1.9]",
                strategyLabel: "Strateginen tavoite / Viikkovauhti:",
                strat1: "Maksimaalinen 1% / viikko (Dynaaminen)",
                strat2: "Kova 0,75% / viikko (Dynaaminen)",
                strat3: "Ikääntyneet max 0,5% / viikko (Dynaaminen)",
                strat4: "Ikääntynyt turvallinen 0,25% / viikko (Dynaaminen)",
                strat5: "Pidä nykyinen paino",
                strat6: "Mukautettu kalorimuutos (Vaje/Ylitys)",
                customDeltaLabel: "Oma mukautettu kalorimuutos (kcal/pvä):",
                secGoalTitle: "2. TAVOITE / KULUTUS",
                estExpenditureLabel: "Arvioitu päivittäinen kulutus (TDEE):",
                estExpenditureExpl: "(Perustuu rasvattomaan kehonmassaan ja valittuun aktiivisuuskertoimeen)",
                sec2Title: "3. ATERIAN LISÄYS",
                favoriteLabel: "Suosikkiateriat:",
                favoriteDefault: "-- Valitse suosikkiateria --",
                saveFavBtn: "⭐ TALLENNA NYKYISET MAKROT SUOSIKIKSI",
                deleteFavBtn: "❌ POISTA VALITTU SUOSIKKI",
                editMealBtn: "✏️ Muokkaa",
                deleteMealBtn: "🗑️ Poista",
                favPromptName: "Anna suosikkiaterialle nimi:",
                favAlertEmpty: "Syötä ainakin jokin makro (hiilihydraatit, proteiini tai rasva) ennen tallennusta!",
                favAlertSelectDelete: "Valitse poistettava suosikkiateria valikosta!",
                mealTimeLabel: "Aterian aika (HH:MM) [Vapaaehtoinen, oletus: Nyt]:",
                carbsLabel: "Hiilihydraatit (g):",
                proteinLabel: "Proteiini (g):",
                fatLabel: "Rasva (g):",
                logMealBtn: "Kirjaa ja laske tase 📥",
                updateMealBtn: "Päivitä ateria ✏️",
                cancelEditBtn: "Peruuta muokkaus ❌",
                sec3Title: "4. PÄIVÄN AIKALEIMATUT ANNOKSET",
                logMacrosLabel: "Kirjatut kokonaismakrot tänään:",
                resetDayBtn: "Nollaa valitun päivän loki ❌",
                sec4Title: "5. LAHJOMATON TASE & ANALYTIIKKA",
                fatPctLabel: "Rasvaprosentti:",
                leanLabel: "Rasvaton moottorisi (Lean Mass):",
                fatVolLabel: "Kudosrasvasi (KG / litraa):",
                weeklyTargetLabel: "Valittu viikkotavoite:",
                ledgerTitle: "📊 KALORIBUDJETIN TILIOTE",
                ledgerHeader1: "TILAVUUSMUUTTUJA",
                ledgerHeader2: "KILOKALORIT (kcal)",
                ledgerBudgetLabel: "Syöntibudjetti (Tavoite)",
                ledgerUsedLabel: "Käytetty (Nielty kuorma)",
                ledgerLeftLabel: "Jäljellä (Focus-kapasiteetti)",
                mtorTitle: "🛡️ PROTEIINI JA LIHASSUOJA (mTOR)",
                mtorThresholdLabel: "Kerta-aterian mTOR-kynnys:",
                dailyProtLabel: "Päivittäinen kokonaisproteiini:",
                protProtectionLabel: "Lihasmassan suojaus:",
                fastingTitle: "🛡️ PAASTOIKKUNA JA AUTOFAGIAN STATUS",
                eatingWindowLabel: "Syömisikkunan kesto (tuntia):",
                fastingWindowLabel: "Syömätön paastoikkuna (tuntia):",
                autophagyStatusLabel: "Autofagian statusvaste:",
                fastingInfoText: "Autofagia on elimistön luonnollinen solujen siivousmekanismi, joka käynnistyy tehostetusti yli 14 tunnin syömättömän paaston jälkeen.",
                cumAutophagy: "Aktiivinen autofagia (≥14 h paasto):",
                cumFatBurnAvg: "Keskimääräinen rasvanpolttoaika (≤35 µIU/ml):",
                fatBurnWindowLabel: "Rasvanpolttoikkuna (≤35 µIU/ml):",
                fatBurnWindowTargetMet: "Tavoite saavutettu (≥12 h)",
                fatBurnWindowBelowTarget: "Alle tavoitteen (<12 h)",
                protProtectedMsg: "Lihasmassa suojattu",
                protIncreaseMsg: "Lisää proteiininsaantia",
                insulinInfoText: "Keho polttaa omia rasvavarastojaan tehokkaasti vasta, kun insuliini alittaa 35 µIU/mL. Varmista vähintään 12 tunnin matalan insuliinin ikkuna vuorokaudessa.",
                proteinInfoText: "Riittävä proteiininsaanti ja maltillinen kalorivaje suojaavat lihaskudosta rasvanpudotuksen aikana.",
                insulinTitle: "🧬 PÄIVÄN INSULIINI- JA GLYKEEMINEN KUORMA",
                glLabel: "Päivän Glykeeminen Kuorma (GL):",
                iTotLabel: "Päivän Kokonaisinsuliinituotanto (I-Tot):",
                bufferLabel: "Ruoansulatuksen Puskurikerroin (D):",
                iPeakLabel: "Kumulatiivinen insuliinipiikki (I-Peak):",
                statusLabel: "POMO-INSULIININ STATUSVASTE:",
                chartTitle: "📈 ARVIOITU 24H JATKUVA INSULIINI- JA GL-VASTE",
                legendInsulin: "Insuliinivaste (uIU/ml)",
                legendGL: "Glykeeminen Kuorma (GL)",
                legendThreshold: "-- Rasvanpolton kynnystaso (35 uIU/ml)",
                legendFatBurnArea: "Rasvanpolttoalue (≤35 uIU/ml)",
                legendNow: "| Tämänhetkinen aika (NYT)",
                phAge: "👉 SYÖTÄ TIETO (IKÄ)",
                phHeight: "👉 SYÖTÄ TIETO (PITUUS CM)",
                phWeight: "👉 SYÖTÄ TIETO (PAINO KG)",
                phWaist: "👉 SYÖTÄ TIETO (VYÖTÄRÖ CM)",
                phNeck: "👉 SYÖTÄ TIETO (NISKA CM)",
                phHip: "👉 SYÖTÄ TIETO (LANTIO CM)",
                phBodyFat: "👉 SYÖTÄ RASVAPROSENTTI % (JOS TIEDOSSA)",
                disclaimerText: "Vastuuvapauslauseke: Tämä työkalu on tarkoitettu vain koulutus- ja opetustarkoituksiin eikä se korvaa ammatillista lääketieteellistä neuvontaa, diagnoosia tai hoitoa. Kehittäjä ei ota mitään vastuuta tai korvausvelvollisuutta tämän työkalun käytöstä tai sen laskelmista.",
                copyrightText: "© 2026 HVA2026. Julkaistu GNU General Public License v3.0 (GPLv3) -lisenssillä.",
                demoSelectLabel: "VALITSE DEMO-PÄIVÄ (30 PÄIVÄN HISTORIA):",
                demoBtnToday: "📅 TÄNÄÄN",
                demoBtnPe: "📺 PE (TV-SIPSIT)",
                demoBtnLa: "🍕 LA (HERKKU)",
                demoBtnArki: "🥗 ARKI (NORMAALI)",
                phCustomDelta: "👉 SYÖTÄ VAJE (-) TAI YLITYS (+)",
                phCarbs: "👉 SYÖTÄ TIETO (HIILIHYDRAATIT G)",
                phProtein: "👉 SYÖTÄ TIETO (PROTEIINI G)",
                phFat: "👉 SYÖTÄ TIETO (RASVA G)",
                braveNoticeText: "🦁 <strong>Brave / Ikkuna-ohje:</strong><br>1) Jos sovellus on kehyssivulla (iframe), <a href=\"javascript:void(0)\" onclick=\"window.open(window.location.href,'_blank')\" style=\"color:#00ffff; text-decoration:underline; font-weight:bold;\">Avaa uuteen välilehteen ↗</a>.<br>2) Brave-asetus: <em>Asetukset ➔ Yksityisyys ja turvallisuus ➔ Salli Google-kirjautumispainikkeet kolmannen osapuolen sivustoilla</em>."
            },
            en: {
                langLabel: "🌐 LANGUAGE:",
                optionsBtn: "⚙️ OPTIONS",
                optionsTitle: "⚙️ ADVANCED SETTINGS & MANAGEMENT",
                privacyPolicyLink: "🔒 Privacy Policy / Tietosuojaseloste ↗",
                demoBtnOn: "🎭 START DEMO MODE",
                demoBtnOff: "❌ CLOSE DEMO MODE",
                demoSelectLabel: "SELECT DEMO DAY (30-DAY HISTORY):",
                demoBtnToday: "📅 TODAY",
                demoBtnPe: "📺 FRI (TV CHIPS)",
                demoBtnLa: "🍕 SAT (TREAT DAY)",
                demoBtnArki: "🥗 WEEKDAY (REGULAR)",
                disclaimerText: "Disclaimer: This tool is for educational and informational purposes only and does not constitute professional medical advice, diagnosis, or treatment. The developer assumes no responsibility or liability for the use of this tool or its calculations.",
                copyrightText: "© 2026 HVA2026. Released under the GNU General Public License v3.0 (GPLv3).",
                backupTitle: "💾 DATA BACKUP & IMPORT",
                backupDesc: "Export all saved log and profile data as a JSON file, or restore previously backed-up data.",
                exportBackupBtn: "💾 DOWNLOAD BACKUP (EXPORT)",
                importBackupBtn: "📥 IMPORT BACKUP (IMPORT)",
                driveTitle: "🌐 GOOGLE DRIVE AUTO-SYNC",
                driveDesc: "Sign in with your Google account to automatically save and sync calculator data across your devices. The app uses restricted per-file access (drive.file) and only accesses its own backup file. It has zero access to your other Google Drive files.",
                signInWithGoogle: "Sign in with Google",
                syncNowBtn: "🔄 SYNC NOW",
                loadFromDriveBtn: "📥 FETCH FROM DRIVE",
                logoutBtn: "🚪 LOG OUT",
                masterResetDesc: "Clear all calculator memory (all saved days and profile data).",
                masterResetBtn: "⚠️ MASTER RESET (CLEAR ALL DATA)",
                mainTitle: "🧬 METABOLIC CALCULATOR v1.0",
                mainSub: "Use the top-right \"OPTIONS\" button to open demo mode or reset.",
                dateSummary: "📅 SELECT DATE",
                dateLabel: "Date:",
                prevDayBtn: "Previous",
                nextDayBtn: "Next",
                prevDayBtnTitle: "Previous day (← / Left arrow)",
                nextDayBtnTitle: "Next day (→ / Right arrow)",
                floatPrevTitle: "Previous day (← / Left arrow)",
                floatNextTitle: "Next day (→ / Right arrow)",
                floatDateTitle: "Viewed date (Click to select)",
                floatPrevText: "PREV",
                floatNextText: "NEXT",
                cumSummary: "📊 CUMULATIVE HISTORY SUMMARY",
                btnLast7Days: "🗓️ LAST 7 DAYS (COMPLETED)",
                btnLast30Days: "🗓️ LAST 30 DAYS (COMPLETED)",
                cumStartLabel: "📅 START DATE:",
                cumEndLabel: "📅 END DATE:",
                cumDays: "Total tracked days:",
                cumEnergy: "Total energy consumed:",
                cumDeficit: "Accumulated calorie balance:",
                cumSaldoExpl: "(Positive [+] = Consumed over expenditure, weight gained | Negative [-] = Consumed under expenditure, weight lost. Calculation includes completed past days only.)",
                cumSurplus: "Accumulated calorie surplus",
                cumMtor: "Muscle protection (mTOR) activated:",
                sec1Title: "1. BIOLOGICAL PARAMETERS",
                genderLabel: "Gender:",
                genderMale: "Male",
                genderFemale: "Female",
                ageLabel: "Age (years) [Optional]:",
                heightLabel: "Height (cm) [Optional]:",
                weightLabel: "Current Weight (kg):",
                waistLabel: "Waist circumference (cm) [Optional]:",
                neckLabel: "Neck circumference (cm) [Optional]:",
                hipLabel: "Hip circumference (cm) [Female optional]:",
                bodyFatLabel: "Own body fat percentage (%) [Auto-calculated if height, neck, waist (+hip) are given. Or enter own:]",
                activityLabel: "Activity level multiplier:",
                act1: "Sedentary (desk job, little/no exercise) [1.2]",
                act2: "Basal active (default) [1.25]",
                act3: "Light activity (exercise 1–3x/wk) [1.375]",
                act4: "Moderate activity (exercise 3–5x/wk) [1.55]",
                act5: "Very active (exercise 6–7x/wk) [1.725]",
                act6: "Extreme active (physical job + heavy sport) [1.9]",
                strategyLabel: "Strategic Goal / Weekly Pace:",
                strat1: "Maximum 1% / week (Dynamic)",
                strat2: "Hard 0.75% / week (Dynamic)",
                strat3: "Seniors max 0.5% / week (Dynamic)",
                strat4: "Seniors safe 0.25% / week (Dynamic)",
                strat5: "Maintain current weight",
                strat6: "Custom calorie delta (Deficit/Surplus)",
                customDeltaLabel: "Custom calorie change (kcal/day):",
                secGoalTitle: "2. GOAL / EXPENDITURE",
                estExpenditureLabel: "Estimated daily expenditure (TDEE):",
                estExpenditureExpl: "(Based on lean body mass and selected activity multiplier)",
                sec2Title: "3. MEAL ADDITION",
                favoriteLabel: "Favorite Meals:",
                favoriteDefault: "-- Select a favorite meal --",
                saveFavBtn: "⭐ SAVE CURRENT MACROS AS FAVORITE",
                deleteFavBtn: "❌ DELETE SELECTED FAVORITE",
                editMealBtn: "✏️ Edit",
                deleteMealBtn: "🗑️ Delete",
                favPromptName: "Enter a name for the favorite meal:",
                favAlertEmpty: "Please enter at least one macro value (carbs, protein, or fat) before saving!",
                favAlertSelectDelete: "Please select a favorite meal from the dropdown to delete!",
                mealTimeLabel: "Meal time (HH:MM) [Optional, default: Now]:",
                carbsLabel: "Carbohydrates (g):",
                proteinLabel: "Protein (g):",
                fatLabel: "Fat (g):",
                logMealBtn: "Log and calculate balance 📥",
                updateMealBtn: "Update meal ✏️",
                cancelEditBtn: "Cancel edit ❌",
                sec3Title: "4. DAILY TIMESTAMPED MEALS",
                logMacrosLabel: "Logged total macros today:",
                resetDayBtn: "Reset selected day log ❌",
                sec4Title: "5. INCORRUPTIBLE BALANCE & ANALYTICS",
                fatPctLabel: "Body fat percentage:",
                leanLabel: "Lean Mass engine:",
                fatVolLabel: "Body fat tissue (KG / liters):",
                weeklyTargetLabel: "Selected weekly target:",
                ledgerTitle: "📊 CALORIE BUDGET LEDGER",
                ledgerHeader1: "VOLUME VARIABLE",
                ledgerHeader2: "KILOCALORIES (kcal)",
                ledgerBudgetLabel: "Eating Budget (Target)",
                ledgerUsedLabel: "Consumed (Ingested load)",
                ledgerLeftLabel: "Remaining (Focus capacity)",
                mtorTitle: "🛡️ PROTEIN & MUSCLE PROTECTION (mTOR)",
                mtorThresholdLabel: "Single meal mTOR threshold:",
                dailyProtLabel: "Daily total protein:",
                protProtectionLabel: "Muscle mass protection:",
                fastingTitle: "🛡️ FASTING WINDOW & AUTOPHAGY STATUS",
                eatingWindowLabel: "Eating window duration (hours):",
                fastingWindowLabel: "Fasting window duration (hours):",
                autophagyStatusLabel: "Autophagy status response:",
                fastingInfoText: "Autophagy is the body's natural cellular cleanup mechanism that intensifies after a fasting period of over 14 hours.",
                cumAutophagy: "Active autophagy (≥14 h fast):",
                cumFatBurnAvg: "Average fat burn window (≤35 µIU/ml):",
                fatBurnWindowLabel: "Fat burning window (≤35 µIU/ml):",
                fatBurnWindowTargetMet: "Target achieved (≥12 h)",
                fatBurnWindowBelowTarget: "Below target (<12 h)",
                protProtectedMsg: "Muscle mass protected",
                protIncreaseMsg: "Increase protein intake",
                insulinInfoText: "The body burns its own fat stores efficiently only when insulin drops below 35 µIU/mL. Ensure a low-insulin window of at least 12 hours per day.",
                proteinInfoText: "Sufficient protein intake and a moderate calorie deficit protect muscle tissue during fat loss.",
                insulinTitle: "🧬 DAILY INSULIN & GLYCEMIC LOAD",
                glLabel: "Daily Glycemic Load (GL):",
                iTotLabel: "Daily Total Insulin Production (I-Tot):",
                bufferLabel: "Digestion Buffer Factor (D):",
                iPeakLabel: "Cumulative Insulin Peak (I-Peak):",
                statusLabel: "BOSS INSULIN STATUS RESPONSE:",
                chartTitle: "📈 ESTIMATED 24H CONTINUOUS INSULIN & GL RESPONSE",
                legendInsulin: "Insulin Response (uIU/ml)",
                legendGL: "Glycemic Load (GL)",
                legendThreshold: "-- Fat burning threshold (35 uIU/ml)",
                legendFatBurnArea: "Fat burning zone (≤35 uIU/ml)",
                legendNow: "| Current time (NOW)",
                phAge: "👉 ENTER DATA (AGE)",
                phHeight: "👉 ENTER DATA (HEIGHT CM)",
                phWeight: "👉 ENTER DATA (WEIGHT KG)",
                phWaist: "👉 ENTER DATA (WAIST CM)",
                phNeck: "👉 ENTER DATA (NECK CM)",
                phHip: "👉 ENTER DATA (HIP CM)",
                phBodyFat: "👉 ENTER BODY FAT % (IF KNOWN)",
                phCustomDelta: "👉 ENTER DEFICIT (-) OR SURPLUS (+)",
                phCarbs: "👉 ENTER DATA (CARBS G)",
                phProtein: "👉 ENTER DATA (PROTEIN G)",
                phFat: "👉 ENTER DATA (FAT G)",
                braveNoticeText: "🦁 <strong>Brave / Frame note:</strong><br>1) If app is inside an iframe, <a href=\"javascript:void(0)\" onclick=\"window.open(window.location.href,'_blank')\" style=\"color:#00ffff; text-decoration:underline; font-weight:bold;\">Open in a new tab ↗</a>.<br>2) Brave setting: <em>Settings ➔ Privacy & security ➔ Allow Google login buttons on third-party sites</em>."
            }
        };

        let historyDB = JSON.parse(localStorage.getItem('metabolic_v20_historyDB')) || {};
        let activeDateStr = getTodayStr();
        let isDemoMode = false;
        let demoDates = {};
        let editingMealIndex = null;

        window.onload = function() { 
            const savedLang = detectInitialLanguage();
            document.getElementById('langSelect').value = savedLang;
            switchLanguage(savedLang);

            const initialUnit = detectInitialUnit();
            document.getElementById('unitSelect').value = initialUnit;
            updateLabelsForUnits();

            // Attempt IP geolocation check in background for new users
            if (!localStorage.getItem('metabolic_v20_lang') || !localStorage.getItem('metabolic_v20_units')) {
                autoDetectSettingsByIP();
            }

            document.getElementById('selectedDate').value = activeDateStr;
            lataaKayttajaParametrit();
            lataaAktiivisenPaivanTiedot();
            lataaSuosikit();
            tarkistaSukupuoli(); 
            tarkistaCustomTavoite();
            alustaKumulatiivisetPaivaykset();
        };


        function getMetricVal(id) {
            const val = parseFloat(document.getElementById(id).value) || 0;
            
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            if (unit === 'imperial') {
                if (id === 'weight') return val / 2.20462;
                if (['height', 'waist', 'neck', 'hip'].includes(id)) return val * 2.54;
            }
            return val;
        }

        function setMetricValToInput(id, metricVal) {
            if (metricVal === null || metricVal === undefined || metricVal === "") { document.getElementById(id).value = ""; return; }
            
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            if (unit === 'imperial') {
                if (id === 'weight') document.getElementById(id).value = (metricVal * 2.20462).toFixed(1);
                if (['height', 'waist', 'neck', 'hip'].includes(id)) document.getElementById(id).value = (metricVal / 2.54).toFixed(1);
            } else {
                document.getElementById(id).value = metricVal;
            }
        }

        function switchUnits(newUnit) {
            const oldUnit = localStorage.getItem('metabolic_v20_units') || 'metric';
            if (newUnit === oldUnit) return;
            
            const ids = ['weight', 'height', 'waist', 'neck', 'hip'];
            const valsMetric = ids.map(id => {
                const val = parseFloat(document.getElementById(id).value) || 0;
                if (!val && document.getElementById(id).value === '') return null;
                if (oldUnit === 'imperial') {
                    if (id === 'weight') return val / 2.20462;
                    return val * 2.54;
                }
                return val;
            });
            
            localStorage.setItem('metabolic_v20_units', newUnit);
            updateLabelsForUnits();
            
            ids.forEach((id, idx) => {
                const m = valsMetric[idx];
                if (m === null) return;
                if (newUnit === 'imperial') {
                    if (id === 'weight') document.getElementById(id).value = (m * 2.20462).toFixed(1);
                    else document.getElementById(id).value = (m / 2.54).toFixed(1);
                } else {
                    document.getElementById(id).value = Number.isInteger(m) ? m : m.toFixed(1);
                }
            });
            
            tallennaKayttajaParametrit(true);
            paivitaKaikkienPaivienLaskelmat();
        }

        function updateLabelsForUnits() {
            
            const lang = document.getElementById('langSelect')?.value || 'fi';
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            const isEn = lang === 'en';
            const isImperial = unit === 'imperial';
            
            const hL = document.getElementById('lblHeight');
            if(hL) hL.innerText = isEn ? (isImperial ? "Height (in) [Optional]:" : "Height (cm) [Optional]:") : (isImperial ? "Pituus (in) [Vapaaehtoinen]:" : "Pituus (cm) [Vapaaehtoinen]:");
            const hI = document.getElementById('height');
            if(hI) hI.placeholder = isEn ? (isImperial ? "👉 ENTER DATA (HEIGHT IN)" : "👉 ENTER DATA (HEIGHT CM)") : (isImperial ? "👉 SYÖTÄ TIETO (PITUUS IN)" : "👉 SYÖTÄ TIETO (PITUUS CM)");
                
            const wL = document.getElementById('lblWeight');
            if(wL) wL.innerText = isEn ? (isImperial ? "Current Weight (lbs):" : "Current Weight (kg):") : (isImperial ? "Nykyinen Paino (lbs):" : "Nykyinen Paino (kg):");
            const wI = document.getElementById('weight');
            if(wI) wI.placeholder = isEn ? (isImperial ? "👉 ENTER DATA (WEIGHT LBS)" : "👉 ENTER DATA (WEIGHT KG)") : (isImperial ? "👉 SYÖTÄ TIETO (PAINO LBS)" : "👉 SYÖTÄ TIETO (PAINO KG)");

            const waistL = document.getElementById('lblWaist');
            if(waistL) waistL.innerText = isEn ? (isImperial ? "Waist circumference (in) [Optional]:" : "Waist circumference (cm) [Optional]:") : (isImperial ? "Vyötärön ympärys (in) [Vapaaehtoinen]:" : "Vyötärön ympärys (cm) [Vapaaehtoinen]:");
            const waistI = document.getElementById('waist');
            if(waistI) waistI.placeholder = isEn ? (isImperial ? "👉 ENTER DATA (WAIST IN)" : "👉 ENTER DATA (WAIST CM)") : (isImperial ? "👉 SYÖTÄ TIETO (VYÖTÄRÖ IN)" : "👉 SYÖTÄ TIETO (VYÖTÄRÖ CM)");

            const neckL = document.getElementById('lblNeck');
            if(neckL) neckL.innerText = isEn ? (isImperial ? "Neck circumference (in) [Optional]:" : "Neck circumference (cm) [Optional]:") : (isImperial ? "Niskan ympärys (in) [Vapaaehtoinen]:" : "Niskan ympärys (cm) [Vapaaehtoinen]:");
            const neckI = document.getElementById('neck');
            if(neckI) neckI.placeholder = isEn ? (isImperial ? "👉 ENTER DATA (NECK IN)" : "👉 ENTER DATA (NECK CM)") : (isImperial ? "👉 SYÖTÄ TIETO (NISKA IN)" : "👉 SYÖTÄ TIETO (NISKA CM)");

            const hipL = document.getElementById('lblHip');
            if(hipL) hipL.innerText = isEn ? (isImperial ? "Hip circumference (in) [Female optional]:" : "Hip circumference (cm) [Female optional]:") : (isImperial ? "Lantion ympärys (in) [Naisilla vapaaehtoinen]:" : "Lantion ympärys (cm) [Naisilla vapaaehtoinen]:");
            const hipI = document.getElementById('hip');
            if(hipI) hipI.placeholder = isEn ? (isImperial ? "👉 ENTER DATA (HIP IN)" : "👉 ENTER DATA (HIP CM)") : (isImperial ? "👉 SYÖTÄ TIETO (LANTIO IN)" : "👉 SYÖTÄ TIETO (LANTIO CM)");
            
            const ul = document.querySelector('label[data-i18n="unitLabel"]');
            if (ul) ul.innerText = isEn ? "📏 UNIT:" : "📏 YKSIKÖT:";
        }

        function detectInitialLanguage() {
            const saved = localStorage.getItem('metabolic_v20_lang');
            if (saved) return saved;

            // Strict fallback default is 'en' (English)
            const navLangs = (navigator.languages || [navigator.language || '']).map(l => (l || '').toLowerCase());
            const isFinnishLang = navLangs.some(l => l.startsWith('fi'));

            let isFinlandTimezone = false;
            try {
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
                if (tz.includes('Helsinki') || tz.includes('Finland')) {
                    isFinlandTimezone = true;
                }
            } catch (e) {}

            if (isFinnishLang || isFinlandTimezone) {
                return 'fi';
            }
            return 'en';
        }

        function detectInitialUnit() {
            const saved = localStorage.getItem('metabolic_v20_units');
            if (saved) return saved;

            const navLangs = (navigator.languages || [navigator.language || '']).map(l => (l || '').toLowerCase());
            const isUS = navLangs.some(l => l.includes('us'));

            let isUSTimezone = false;
            try {
                const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
                if (tz.startsWith('America/') && (tz.includes('New_York') || tz.includes('Chicago') || tz.includes('Denver') || tz.includes('Los_Angeles') || tz.includes('Anchorage') || tz.includes('Adak') || tz.includes('Honolulu'))) {
                    isUSTimezone = true;
                }
            } catch (e) {}

            if (isUS || isUSTimezone) {
                return 'imperial';
            }
            return 'metric';
        }

        async function autoDetectSettingsByIP() {
            try {
                const controller = new AbortController();
                const timeoutId = setTimeout(() => controller.abort(), 2000);
                const res = await fetch('https://ipapi.co/json/', { signal: controller.signal });
                clearTimeout(timeoutId);

                if (res.ok) {
                    const data = await res.json();
                    if (data && data.country_code) {
                        if (!localStorage.getItem('metabolic_v20_lang')) {
                            const detectedLang = (data.country_code === 'FI') ? 'fi' : 'en';
                            document.getElementById('langSelect').value = detectedLang;
                            switchLanguage(detectedLang);
                        }
                        if (!localStorage.getItem('metabolic_v20_units')) {
                            const detectedUnit = (['US', 'LR', 'MM'].includes(data.country_code)) ? 'imperial' : 'metric';
                            document.getElementById('unitSelect').value = detectedUnit;
                            switchUnits(detectedUnit);
                        }
                        return;
                    }
                }
            } catch (e) {
                // Silent fallback
            }
        }

        function switchLanguage(lang) {
            localStorage.setItem('metabolic_v20_lang', lang);
            const t = translations[lang] || translations.fi;
            
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (t[key]) {
                    el.innerHTML = t[key];
                }
            });

            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.getAttribute('data-i18n-placeholder');
                if (t[key]) {
                    el.placeholder = t[key];
                }
            });

            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.getAttribute('data-i18n-title');
                if (t[key]) {
                    el.title = t[key];
                }
            });
            paivitaMuokkausUI();
            updateLabelsForUnits();

            const gSelect = document.getElementById('gender');
            if (gSelect) {
                gSelect.options[0].text = t.genderMale;
                gSelect.options[1].text = t.genderFemale;
            }

            const actSelect = document.getElementById('activityLevel');
            if (actSelect) {
                actSelect.options[0].text = t.act1;
                actSelect.options[1].text = t.act2;
                actSelect.options[2].text = t.act3;
                actSelect.options[3].text = t.act4;
                actSelect.options[4].text = t.act5;
                actSelect.options[5].text = t.act6;
            }

            const stratSelect = document.getElementById('strategyGoal');
            if (stratSelect) {
                stratSelect.options[0].text = t.strat1;
                stratSelect.options[1].text = t.strat2;
                stratSelect.options[2].text = t.strat3;
                stratSelect.options[3].text = t.strat4;
                stratSelect.options[4].text = t.strat5;
                stratSelect.options[5].text = t.strat6;
            }

            if (isDemoMode) {
                pivitaDemoSelectOptions();
            }

            lataaSuosikit();
            paivitaLaskelmat();
            paivitaKumulatiivinenYhteenveto();
            paivitaKelluvatPaivamaaraPainikkeet();
        }

        function toggleOptionsPanel() {
            const panel = document.getElementById('optionsPanel');
            panel.style.display = (panel.style.display === 'block') ? 'none' : 'block';
        }

        function getTodayStr() {
            const now = new Date();
            const y = now.getFullYear(), m = String(now.getMonth() + 1).padStart(2, '0'), d = String(now.getDate()).padStart(2, '0');
            return `${y}-${m}-${d}`;
        }

        function getOffsetDateStr(daysOffset) {
            const d = new Date();
            d.setDate(d.getDate() + daysOffset);
            const y = d.getFullYear(), m = String(d.getMonth() + 1).padStart(2, '0'), date = String(d.getDate()).padStart(2, '0');
            return `${y}-${m}-${date}`;
        }

        function asetKumuJakso(daysCount) {
            const todayStr = (isDemoMode && demoDates[30]) ? demoDates[30] : getTodayStr();
            const refDate = new Date(todayStr + "T00:00:00");
            
            // End date: yesterday (-1 day from today, last completed day)
            const endDateObj = new Date(refDate.getTime());
            endDateObj.setDate(endDateObj.getDate() - 1);
            
            // Start date: daysCount completed days back
            const startDateObj = new Date(refDate.getTime());
            startDateObj.setDate(startDateObj.getDate() - daysCount);
            
            const formatDate = (d) => {
                const y = d.getFullYear();
                const m = String(d.getMonth() + 1).padStart(2, '0');
                const day = String(d.getDate()).padStart(2, '0');
                return `${y}-${m}-${day}`;
            };
            
            document.getElementById('cumStartDate').value = formatDate(startDateObj);
            document.getElementById('cumEndDate').value = formatDate(endDateObj);
            
            paivitaKumulatiivinenYhteenveto();
        }

        window.asetKumuJakso = asetKumuJakso;

        function alustaKumulatiivisetPaivaykset() {
            if (!document.getElementById('cumStartDate').value || !document.getElementById('cumEndDate').value) {
                asetKumuJakso(7);
            }
        }

        function generateDemoMealsForDay(dayOfWeek, gender) {
            if (gender === "female") {
                if (dayOfWeek >= 1 && dayOfWeek <= 4) {
                    return [
                        { time: "08:00", c: 55, p: 25, f: 15 },
                        { time: "12:00", c: 65, p: 38, f: 20 },
                        { time: "17:00", c: 60, p: 35, f: 18 },
                        { time: "21:00", c: 45, p: 15, f: 16 }
                    ];
                } else if (dayOfWeek === 5) {
                    return [
                        { time: "08:00", c: 55, p: 25, f: 15 },
                        { time: "12:00", c: 65, p: 38, f: 20 },
                        { time: "17:00", c: 55, p: 32, f: 18 },
                        { time: "21:00", c: 125, p: 10, f: 48 }
                    ];
                } else if (dayOfWeek === 6) {
                    return [
                        { time: "09:30", c: 65, p: 28, f: 22 },
                        { time: "14:30", c: 100, p: 42, f: 42 },
                        { time: "21:00", c: 140, p: 12, f: 52 }
                    ];
                } else {
                    return [
                        { time: "10:00", c: 70, p: 30, f: 24 },
                        { time: "15:00", c: 80, p: 42, f: 28 },
                        { time: "21:00", c: 95, p: 12, f: 38 }
                    ];
                }
            } else {
                // Mies (Realistinen miehen ateriarytmi: 3-4 ateriaa, isommat annoskoot & iltamässyttely klo 21:00)
                if (dayOfWeek >= 1 && dayOfWeek <= 4) {
                    // Ma-To (Arki: 4 ruokailua, reilu aamupala, iso lounas, runsas päivällinen & iltapala/napostelu klo 21:00)
                    return [
                        { time: "07:30", c: 75, p: 35, f: 20 },
                        { time: "11:30", c: 90, p: 55, f: 28 },
                        { time: "17:00", c: 85, p: 50, f: 26 },
                        { time: "21:00", c: 60, p: 20, f: 22 }
                    ];
                } else if (dayOfWeek === 5) {
                    // Perjantai (Tuhti lounas & päivällinen + Pe-illan runsas TV-sipsi & dippimässäily klo 21:00)
                    return [
                        { time: "07:30", c: 75, p: 35, f: 20 },
                        { time: "11:30", c: 90, p: 55, f: 28 },
                        { time: "17:00", c: 80, p: 48, f: 25 },
                        { time: "21:00", c: 165, p: 15, f: 68 }
                    ];
                } else if (dayOfWeek === 6) {
                    // Lauantai (Tuhdit annokset, pizza/purilainen + iso TV-sipsi/karkkimättö klo 21:00)
                    return [
                        { time: "09:30", c: 85, p: 40, f: 30 },
                        { time: "14:30", c: 140, p: 60, f: 58 },
                        { time: "21:00", c: 180, p: 15, f: 72 }
                    ];
                } else {
                    // Sunnuntai (Su-aamiainen, runsas kotiruoka & iltamässyttely TV:n ääressä klo 21:00)
                    return [
                        { time: "10:00", c: 95, p: 42, f: 32 },
                        { time: "15:00", c: 110, p: 58, f: 38 },
                        { time: "21:00", c: 130, p: 18, f: 52 }
                    ];
                }
            }
        }

        function toggleDemoMode() {
            isDemoMode = !isDemoMode;
            const btn = document.getElementById('demoBtn');
            const controls = document.getElementById('demoControls');
            const lang = document.getElementById('langSelect').value;
            const t = translations[lang] || translations.fi;

            if (isDemoMode) {
                btn.innerText = (lang === 'en') ? "❌ CLOSE DEMO MODE" : "❌ SULJE ESITTELYTILA (PALAA OMIIN)";
                btn.style.background = "#ff3333";
                btn.style.color = "#fff";
                controls.style.display = "block";

                demoDates = {};
                historyDB = {};

                const selectedGender = document.getElementById('gender').value || "male";

                for (let idx = 1; idx <= 30; idx++) {
                    const offset = idx - 30;
                    const dStr = getOffsetDateStr(offset);
                    demoDates[idx] = dStr;

                    const dObj = new Date(dStr + "T00:00:00");
                    const dayOfWeek = dObj.getDay(); // 0 = Sun, 1 = Mon, ..., 5 = Fri, 6 = Sat

                    const meals = generateDemoMealsForDay(dayOfWeek, selectedGender);

                    let carbs = 0, protein = 0, fat = 0;
                    meals.forEach(m => { carbs += m.c; protein += m.p; fat += m.f; });
                    const dayKcal = (carbs * 4) + (protein * 4) + (fat * 9);

                    const baseW = (selectedGender === "female") ? 100.0 : 110.0;
                    const diffW = 3.5;
                    const dayWeight = parseFloat((baseW + diffW - (diffW * ((idx - 1) / 29))).toFixed(1));
                    const lbm = dayWeight - (dayWeight * 0.32);
                    const dayTdee = (370 + (21.6 * lbm)) * 1.25;

                    historyDB[dStr] = {
                        macros: { carbs, protein, fat },
                        meals: meals,
                        calculated: { weight: dayWeight, tdee: dayTdee, consumedKcal: dayKcal, lbm: lbm, age: 45 }
                    };
                }

                document.getElementById('gender').value = "male";
                document.getElementById('age').value = "45";
                setMetricValToInput('height', 180);
                setMetricValToInput('weight', 110);
                setMetricValToInput('waist', 112);
                setMetricValToInput('neck', 43);
                setMetricValToInput('hip', 118); 
                document.getElementById('activityLevel').value = "1.25";
                document.getElementById('strategyGoal').value = "lose_1pct";

                pivitaDemoSelectOptions();

                asetKumuJakso(30);

                tarkistaSukupuoli();
                tarkistaCustomTavoite();
                valitseDemoPaiva(30); // Valitaan TÄNÄÄN (Päivä 30) oletuksena
            } else {
                btn.innerText = t.demoBtnOn;
                btn.style.background = "#ff00ff";
                btn.style.color = "#000";
                controls.style.display = "none";

                historyDB = JSON.parse(localStorage.getItem('metabolic_v20_historyDB')) || {};
                activeDateStr = getTodayStr();
                
            const savedUnit = localStorage.getItem('metabolic_v20_units');
            if (savedUnit) {
                document.getElementById('unitSelect').value = savedUnit;
            }
            updateLabelsForUnits();

            document.getElementById('selectedDate').value = activeDateStr;
                lataaKayttajaParametrit();
                lataaAktiivisenPaivanTiedot();
                tarkistaSukupuoli();
                tarkistaCustomTavoite();
                alustaKumulatiivisetPaivaykset();
                paivitaKumulatiivinenYhteenveto();
            }
        }

        function pivitaDemoSelectOptions() {
            const select = document.getElementById('demoDaySelect');
            if (!select) return;
            select.innerHTML = '';
            const lang = document.getElementById('langSelect').value;
            const dayNamesFi = ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"];
            const dayNamesEn = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

            for (let idx = 30; idx >= 1; idx--) {
                const dStr = demoDates[idx];
                const dObj = new Date(dStr + "T00:00:00");
                const dw = dObj.getDay();
                const dName = (lang === 'en') ? dayNamesEn[dw] : dayNamesFi[dw];

                let tag = "";
                if (idx === 30) tag = (lang === 'en') ? " 🌟 [TODAY]" : " 🌟 [TÄNÄÄN]";
                else if (dw === 5) tag = (lang === 'en') ? " 📺 [Fri TV Chips]" : " 📺 [Pe TV-sipsit]";
                else if (dw === 6) tag = (lang === 'en') ? " 🍕 [Sat Treats]" : " 🍕 [La Herkkupäivä]";
                else if (dw === 0) tag = (lang === 'en') ? " 🍿 [Sun Treats]" : " 🍿 [Su Herkut]";
                else tag = (lang === 'en') ? " 🥗 [Weekday]" : " 🥗 [Arki]";

                const opt = document.createElement('option');
                opt.value = dStr;
                opt.innerText = `Päivä ${idx}: ${dStr} (${dName})${tag}`;
                select.appendChild(opt);
            }
        }

        function valitseDemoPaivaByDate(dStr) {
            if (!isDemoMode) return;
            activeDateStr = dStr;
            const select = document.getElementById('demoDaySelect');
            if (select) select.value = dStr;
            
            const savedUnit = localStorage.getItem('metabolic_v20_units');
            if (savedUnit) {
                document.getElementById('unitSelect').value = savedUnit;
            }
            updateLabelsForUnits();

            document.getElementById('selectedDate').value = activeDateStr;
            lataaAktiivisenPaivanTiedot();
        }

        function valitseDemoPaiva(num) {
            if (!isDemoMode) return;
            if (demoDates[num]) {
                valitseDemoPaivaByDate(demoDates[num]);
            }
        }

        function valitseDemoPe() {
            if (!isDemoMode) return;
            for (let idx = 30; idx >= 1; idx--) {
                const dStr = demoDates[idx];
                const dObj = new Date(dStr + "T00:00:00");
                if (dObj.getDay() === 5) {
                    valitseDemoPaivaByDate(dStr);
                    break;
                }
            }
        }

        function valitseDemoLa() {
            if (!isDemoMode) return;
            for (let idx = 30; idx >= 1; idx--) {
                const dStr = demoDates[idx];
                const dObj = new Date(dStr + "T00:00:00");
                if (dObj.getDay() === 6) {
                    valitseDemoPaivaByDate(dStr);
                    break;
                }
            }
        }

        function valitseDemoArki() {
            if (!isDemoMode) return;
            for (let idx = 30; idx >= 1; idx--) {
                const dStr = demoDates[idx];
                const dObj = new Date(dStr + "T00:00:00");
                const dw = dObj.getDay();
                if (dw >= 1 && dw <= 4) {
                    valitseDemoPaivaByDate(dStr);
                    break;
                }
            }
        }

        function tarkistaSukupuoli() { 
            const g = document.getElementById('gender').value;
            document.getElementById('hipContainer').style.display = (g === "female") ? "block" : "none"; 
            
            if (isDemoMode) {
                if (g === "female") {
                    setMetricValToInput('height', 170);
                    setMetricValToInput('weight', 100);
                    setMetricValToInput('waist', 104);
                    setMetricValToInput('neck', 38);
                    setMetricValToInput('hip', 118);
                } else if (g === "male") {
                    setMetricValToInput('height', 180);
                    setMetricValToInput('weight', 110);
                    setMetricValToInput('waist', 112);
                    setMetricValToInput('neck', 43);
                    setMetricValToInput('hip', null);
                }
            }
        }

        function paivitaKaikkienPaivienLaskelmat() {
            const gender = document.getElementById('gender').value;
            const h = getMetricVal('height') || 0;
            const waist = getMetricVal('waist') || 0;
            const neck = getMetricVal('neck') || 0;
            const hip = getMetricVal('hip') || 0;
            const userBodyFat = parseFloat(document.getElementById('bodyFat')?.value) || 0;
            const age = parseInt(document.getElementById('age').value) || 45;
            const actMult = parseFloat(document.getElementById('activityLevel').value) || 1.25;

            let rPct = userBodyFat;
            if (rPct <= 0) {
                rPct = (gender === "male") ? 32.0 : 42.0;
                if ((gender === "male" && h > 0 && waist > neck && neck > 0) || (gender === "female" && h > 0 && (waist + hip) > neck && neck > 0 && hip > 0)) {
                    rPct = (gender === "male") 
                        ? (495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(h)) - 450) 
                        : (495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(h)) - 450);
                    if (rPct < 3) rPct = 3;
                }
            }

            Object.keys(historyDB).forEach(dKey => {
                const dayObj = historyDB[dKey];
                if (dayObj) {
                    let w = dayObj.calculated?.weight || getMetricVal('weight') || 70;
                    
                    if (isDemoMode) {
                        const idx = Object.keys(demoDates).find(k => demoDates[k] === dKey);
                        if (idx) {
                            const i = parseInt(idx);
                            const baseW = (gender === "female") ? 100.0 : 110.0;
                            const diffW = 3.5;
                            w = parseFloat((baseW + diffW - (diffW * ((i - 1) / 29))).toFixed(1));

                            const dObj = new Date(dKey + "T00:00:00");
                            const dayOfWeek = dObj.getDay();
                            const newMeals = generateDemoMealsForDay(dayOfWeek, gender);
                            
                            let carbs = 0, protein = 0, fat = 0;
                            newMeals.forEach(m => { carbs += m.c; protein += m.p; fat += m.f; });
                            
                            dayObj.meals = newMeals;
                            dayObj.macros = { carbs, protein, fat };
                        }
                    }

                    const lbm = w - (w * (rPct / 100));
                    const dayTdee = (370 + (21.6 * lbm)) * actMult;
                    const dayKcal = (dayObj.macros.carbs * 4) + (dayObj.macros.protein * 4) + (dayObj.macros.fat * 9);

                    dayObj.calculated = {
                        weight: w,
                        tdee: dayTdee,
                        consumedKcal: dayKcal,
                        lbm: lbm,
                        age: age
                    };
                }
            });

            if (isDemoMode && historyDB[activeDateStr]?.calculated?.weight) {
                setMetricValToInput('weight', historyDB[activeDateStr].calculated.weight);
            }

            paivitaLaskelmat();
            paivitaKumulatiivinenYhteenveto();
        }

        function paivitaLaskettuRasvaprosenttiKenttaan() {
            const h = getMetricVal('height') || 0;
            const w = getMetricVal('weight') || 0;
            const waist = getMetricVal('waist') || 0;
            const neck = getMetricVal('neck') || 0;
            const hip = getMetricVal('hip') || 0;
            const gender = document.getElementById('gender').value;

            let rPct = 0;
            if (w > 0 && ((gender === "male" && h > 0 && waist > neck && neck > 0) || (gender === "female" && h > 0 && (waist + hip) > neck && neck > 0 && hip > 0))) {
                rPct = (gender === "male") 
                    ? (495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(h)) - 450) 
                    : (495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(h)) - 450);
                if (rPct < 3) rPct = 3;
            }

            const bfInput = document.getElementById('bodyFat');
            if (!bfInput) return;
            const lang = document.getElementById('langSelect')?.value || 'fi';
            
            if (rPct > 0) {
                if (!bfInput.dataset.manualOverride) {
                    bfInput.value = rPct.toFixed(1);
                    bfInput.dataset.autoCalculated = "true";
                }
                const bfStr = rPct.toFixed(1) + " %";
                const phText = (lang === 'en') ? `👉 AUTO-CALCULATED: ${bfStr} (Enter to override)` : `👉 LASKETTU ARVO: ${bfStr} (Syötä muuttaaksesi)`;
                bfInput.placeholder = phText;
            } else {
                if (bfInput.dataset.autoCalculated === "true" && !bfInput.dataset.manualOverride) {
                    bfInput.value = "";
                    bfInput.dataset.autoCalculated = "false";
                }
                const origPh = (lang === 'en') ? "👉 ENTER BODY FAT % (IF KNOWN)" : "👉 SYÖTÄ RASVAPROSENTTI % (JOS TIEDOSSA)";
                bfInput.placeholder = origPh;
            }
        }

        function tallennaKayttajaParametrit(triggerSync = true) {
            paivitaLaskettuRasvaprosenttiKenttaan();
            if (isDemoMode) return; 
            const params = {
                gender: document.getElementById('gender').value,
                age: document.getElementById('age').value,
                height: document.getElementById('height').value,
                weight: document.getElementById('weight').value,
                waist: document.getElementById('waist').value,
                neck: document.getElementById('neck').value,
                hip: document.getElementById('hip').value,
                bodyFat: document.getElementById('bodyFat')?.value || '',
                activityLevel: document.getElementById('activityLevel').value,
                strategyGoal: document.getElementById('strategyGoal').value,
                customCalorieDelta: document.getElementById('customCalorieDelta').value
            };
            localStorage.setItem('metabolic_v20_userParams', JSON.stringify(params));
            localStorage.setItem('metabolic_v20_lastUpdate', new Date().toISOString());
            if (triggerSync && window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
        }

        function lataaKayttajaParametrit() {
            const saved = localStorage.getItem('metabolic_v20_userParams');
            if (saved) {
                const p = JSON.parse(saved);
                ['gender','age','height','weight','waist','neck','hip','bodyFat','activityLevel','strategyGoal','customCalorieDelta'].forEach(k => {
                    if (p[k] !== undefined && document.getElementById(k)) document.getElementById(k).value = p[k];
                });
            }
            paivitaLaskettuRasvaprosenttiKenttaan();
        }

        function siirryPaivissa(delta) {
            const dateInput = document.getElementById('selectedDate');
            if (!dateInput) return;
            let currentStr = dateInput.value || activeDateStr || getTodayStr();
            const parts = currentStr.split('-');
            if (parts.length === 3) {
                const year = parseInt(parts[0], 10);
                const month = parseInt(parts[1], 10) - 1;
                const day = parseInt(parts[2], 10);
                const d = new Date(year, month, day);
                d.setDate(d.getDate() + delta);
                
                const newY = d.getFullYear();
                const newM = String(d.getMonth() + 1).padStart(2, '0');
                const newD = String(d.getDate()).padStart(2, '0');
                const newStr = `${newY}-${newM}-${newD}`;
                
                dateInput.value = newStr;
                vaihdaPaivaa();
            }
        }

        window.addEventListener('keydown', function(e) {
            const activeEl = document.activeElement;
            if (activeEl) {
                const tag = activeEl.tagName.toLowerCase();
                if (tag === 'input' || tag === 'textarea' || tag === 'select' || activeEl.isContentEditable) {
                    return;
                }
            }
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                siirryPaivissa(-1);
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                siirryPaivissa(1);
            }
        });

        function paivitaKelluvatPaivamaaraPainikkeet() {
            const dateInput = document.getElementById('selectedDate');
            const dateVal = dateInput ? dateInput.value : (typeof activeDateStr !== 'undefined' ? activeDateStr : '');
            if (!dateVal) return;

            const parts = dateVal.split('-');
            if (parts.length !== 3) return;

            const year = parseInt(parts[0], 10);
            const month = parseInt(parts[1], 10);
            const day = parseInt(parts[2], 10);

            const dObj = new Date(year, month - 1, day);
            const dayOfWeek = dObj.getDay();

            const lang = document.getElementById('langSelect')?.value || 'fi';
            const dayNamesFi = ["SU", "MA", "TI", "KE", "TO", "PE", "LA"];
            const dayNamesEn = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

            const dayName = (lang === 'en') ? dayNamesEn[dayOfWeek] : dayNamesFi[dayOfWeek];
            const formattedDate = `${String(day).padStart(2, '0')}.${String(month).padStart(2, '0')}.`;

            const elNameLeft = document.getElementById('floatDateDayNameLeft');
            const elStrLeft = document.getElementById('floatDateStrLeft');
            const elNameRight = document.getElementById('floatDateDayNameRight');
            const elStrRight = document.getElementById('floatDateStrRight');

            if (elNameLeft) elNameLeft.innerText = dayName;
            if (elStrLeft) elStrLeft.innerText = formattedDate;
            if (elNameRight) elNameRight.innerText = dayName;
            if (elStrRight) elStrRight.innerText = formattedDate;
        }

        function avaaPaivamaaratarkastelu() {
            const el = document.getElementById('selectedDate');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                if (typeof el.showPicker === 'function') {
                    try { el.showPicker(); } catch(e) { el.focus(); }
                } else {
                    el.focus();
                }
            }
        }

        function vaihdaPaivaa() {
            const inputVal = document.getElementById('selectedDate').value;
            if (inputVal) {
                if (editingMealIndex !== null) peruutaMuokkaus();
                activeDateStr = inputVal;
                lataaAktiivisenPaivanTiedot();
            }
            paivitaKelluvatPaivamaaraPainikkeet();
        }

        function sailytaPaivaDB() {
            if (isDemoMode) return; 
            if (activeDateStr && historyDB[activeDateStr]) {
                historyDB[activeDateStr].updatedAt = new Date().toISOString();
            }
            localStorage.setItem('metabolic_v20_historyDB', JSON.stringify(historyDB));
            localStorage.setItem('metabolic_v20_lastUpdate', new Date().toISOString());
            paivitaKumulatiivinenYhteenveto();
        }

        function lataaAktiivisenPaivanTiedot() {
            if (editingMealIndex !== null) peruutaMuokkaus();
            if (!historyDB[activeDateStr]) {
                historyDB[activeDateStr] = { macros: { carbs: 0, protein: 0, fat: 0 }, meals: [], calculated: null };
            }

            if (historyDB[activeDateStr].calculated && historyDB[activeDateStr].calculated.weight) {
                setMetricValToInput('weight', historyDB[activeDateStr].calculated.weight);
            } else {
                const savedParams = localStorage.getItem('metabolic_v20_userParams');
                if (savedParams) {
                    const p = JSON.parse(savedParams);
                    if (p.weight) document.getElementById('weight').value = p.weight;
                }
            }

            paivitaLogiNaytto();
            alustaKumulatiivisetPaivaykset();
            paivitaKumulatiivinenYhteenveto();

            if (historyDB[activeDateStr].meals.length > 0) {
                lisaaAnnosV20(true);
            } else {
                paivitaLaskelmat();
            }
            paivitaKelluvatPaivamaaraPainikkeet();
        }

        function laskePaastoIkkuna(meals) {
            if (!meals || meals.length === 0) {
                return { eatWindow: 0.0, fastWindow: 24.0 };
            }
            if (meals.length === 1) {
                return { eatWindow: 1.0, fastWindow: 23.0 };
            }
            let minM = 1440, maxM = -1;
            meals.forEach(m => {
                if (m.time) {
                    const parts = m.time.split(':');
                    if (parts.length === 2) {
                        const mins = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
                        if (!isNaN(mins)) {
                            if (mins < minM) minM = mins;
                            if (mins > maxM) maxM = mins;
                        }
                    }
                }
            });
            if (minM >= 1440 || maxM < 0) {
                return { eatWindow: 1.0, fastWindow: 23.0 };
            }
            let eatWindow = (maxM - minM) / 60;
            if (eatWindow <= 0) eatWindow = 1.0;
            let fastWindow = Math.max(0, 24.0 - eatWindow);
            return { eatWindow: eatWindow, fastWindow: fastWindow };
        }

        function haeAutofagiaStatus(fastHours, lang) {
            const isEn = (lang === 'en');
            if (fastHours < 12) {
                return {
                    text: isEn ? "🔴 ANABOLIC (Digestion active, no autophagy)" : "🔴 ANABOLINEN (Ruoansulatus aktiivinen, ei autofagiaa)",
                    color: "#ff4444"
                };
            } else if (fastHours < 14) {
                return {
                    text: isEn ? "🟡 BASIC FASTING (Gut rest state achieved)" : "🟡 PERUSPAASTO (Suoliston lepotila saavutettu)",
                    color: "#ffff00"
                };
            } else if (fastHours < 18) {
                return {
                    text: isEn ? "🟢 ACTIVE AUTOPHAGY (Cellular cleanup and recycling active)" : "🟢 AKTIIVINEN AUTOFAGIA (Solujen siivous ja kierrätys käynnissä)",
                    color: "#00ffaa"
                };
            } else {
                return {
                    text: isEn ? "🟣 DEEP AUTOPHAGY (OMAD / Enhanced cellular cleanup)" : "🟣 SYVÄ AUTOFAGIA (OMAD / Tehostettu solusiivous)",
                    color: "#e088ff"
                };
            }
        }

        function laskeInsuliiniAikaan(meals, t) {
            let insulin = 5.0; 
            if (!meals || !Array.isArray(meals)) return insulin;
            meals.forEach(m => {
                if (m.time) {
                    const parts = m.time.split(':');
                    const mealTime = parseInt(parts[0], 10) + (parseInt(parts[1] || '0', 10) / 60);
                    const dt = t - mealTime;
                    if (dt >= 0) {
                        const c = m.c || 0, p = m.p || 0, f = m.f || 0;
                        const totalM = c + p + f;
                        const carbRatio = totalM > 0 ? (c / totalM) : 0;
                        const buf = 1.0 + ((p * 0.01) + (f * 0.02));
                        const insLoad = ((c * 1.0) + (p * 0.56) + (f * 0.10)) / buf;

                        const tStart = 0.25 - (carbRatio * 0.0833);
                        const tPeak = 1.0 - (carbRatio * 0.375);

                        if (dt >= tStart) {
                            let factor = 0;
                            if (dt <= tPeak) {
                                const u = (dt - tStart) / (tPeak - tStart);
                                factor = (3 * u * u) - (2 * u * u * u);
                            } else {
                                const tau = dt - tPeak;
                                const decayScale = 1.8 * buf;
                                factor = Math.exp(-Math.pow(tau / decayScale, 1.4));
                            }
                            if (factor > 0) {
                                insulin += insLoad * factor;
                            }
                        }
                    }
                }
            });
            return insulin;
        }

        function laskeRasvanpolttoAika(meals, maxHour = 24.0) {
            if (!maxHour || maxHour <= 0) return { hours: 0, totalHours: maxHour, pct: 0 };
            if (maxHour > 24.0) maxHour = 24.0;
            
            const totalMinutes = Math.round(maxHour * 60);
            let fatBurnMinutes = 0;
            
            for (let m = 0; m < totalMinutes; m++) {
                const t = (m + 0.5) / 60;
                const ins = laskeInsuliiniAikaan(meals, t);
                if (ins <= 35.0) {
                    fatBurnMinutes++;
                }
            }
            
            const hours = fatBurnMinutes / 60;
            const pct = (hours / maxHour) * 100;
            return { hours, totalHours: maxHour, pct };
        }

        function muotoileHHMM(hours) {
            let h = Math.floor(hours);
            let m = Math.round((hours - h) * 60);
            if (m >= 60) { h += 1; m = 0; }
            return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
        }

        function muotoileAikaJaProsentti(hours, totalHours, lang = 'fi') {
            const hhmm = muotoileHHMM(hours);
            const pct = totalHours > 0 ? ((hours / totalHours) * 100).toFixed(1) : '0.0';
            const suffix = lang === 'en' ? 'of day' : 'vuorokaudesta';
            return `${hhmm} / ${pct}% ${suffix}`;
        }

        function paivitaKumulatiivinenYhteenveto() {
            let totalDays = 0, totalEnergyKcal = 0, totalCalorieSaldo = 0, mtorActiveDaysCount = 0, autophagyActiveDaysCount = 0;
            let totalFatBurnHours = 0;

            const startDate = document.getElementById('cumStartDate').value;
            const endDate = document.getElementById('cumEndDate').value;
            const lang = document.getElementById('langSelect').value;
            const todayStr = (isDemoMode && demoDates[30]) ? demoDates[30] : getTodayStr();

            Object.keys(historyDB).forEach(dKey => {
                // Ignore ongoing incomplete day
                if (dKey >= todayStr) return;

                if (startDate && dKey < startDate) return;
                if (endDate && dKey > endDate) return;

                const dayObj = historyDB[dKey];
                if (dayObj && dayObj.meals && dayObj.meals.length > 0) {
                    totalDays++;
                    const dayKcal = (dayObj.macros.carbs * 4) + (dayObj.macros.protein * 4) + (dayObj.macros.fat * 9);
                    totalEnergyKcal += dayKcal;

                    const fastingData = laskePaastoIkkuna(dayObj.meals);
                    if (fastingData.fastWindow >= 14.0) {
                        autophagyActiveDaysCount++;
                    }

                    const fbData = laskeRasvanpolttoAika(dayObj.meals, 24.0);
                    totalFatBurnHours += fbData.hours;

                    let dayTdee = 0;
                    let lbm = 0;
                    let age = parseInt(document.getElementById('age')?.value) || 45;

                    if (dayObj.calculated && dayObj.calculated.tdee) {
                        dayTdee = dayObj.calculated.tdee;
                        lbm = dayObj.calculated.lbm || (dayObj.calculated.weight ? dayObj.calculated.weight * 0.8 : 70);
                        if (dayObj.calculated.age) age = dayObj.calculated.age;
                    } else {
                        const w = dayObj.calculated?.weight || getMetricVal('weight') || 70;
                        const h = getMetricVal('height') || 175;
                        const waist = getMetricVal('waist') || 0;
                        const neck = getMetricVal('neck') || 0;
                        const hip = getMetricVal('hip') || 0;
                        const gender = document.getElementById('gender').value;
                        const actMult = parseFloat(document.getElementById('activityLevel').value) || 1.25;

                        const userBodyFat = parseFloat(document.getElementById('bodyFat')?.value) || 0;
                        let rPct = userBodyFat;
                        if (rPct <= 0) {
                            rPct = (gender === "male") ? 32.0 : 42.0;
                            if ((gender === "male" && h > 0 && waist > neck && neck > 0) || (gender === "female" && h > 0 && (waist + hip) > neck && neck > 0 && hip > 0)) {
                                rPct = (gender === "male") 
                                    ? (495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(h)) - 450) 
                                    : (495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(h)) - 450);
                                if (rPct < 3) rPct = 3;
                            }
                        }
                        lbm = w - (w * (rPct / 100)); 
                        dayTdee = (370 + (21.6 * lbm)) * actMult;
                        dayObj.calculated = { weight: w, tdee: dayTdee, consumedKcal: dayKcal, lbm: lbm, age: age };
                    }

                    totalCalorieSaldo += (dayKcal - dayTdee);

                    let ageMultiplier = 1.0;
                    let minThreshold = 30.0;
                    if (age >= 60) {
                        ageMultiplier = 1.15;
                        minThreshold = 35.0;
                    } else if (age >= 50) {
                        ageMultiplier = 1.08;
                        minThreshold = 32.0;
                    }

                    const mtorThreshold = Math.max(minThreshold, lbm * 0.4 * ageMultiplier);
                    if (dayObj.meals.some(m => m.p >= mtorThreshold)) mtorActiveDaysCount++;
                }
            });

            document.getElementById('cumDaysCount').innerText = totalDays;
            document.getElementById('cumEnergyTotal').innerText = Math.round(totalEnergyKcal);
            
            const deficitTitle = document.getElementById('cumDeficitTitle');
            const deficitEl = document.getElementById('cumDeficitTotal');
            const fatKgEl = document.getElementById('cumFatBurnedKg');
            const fatLitersEl = document.getElementById('cumFatBurnedLiters');

            const absVal = Math.abs(totalCalorieSaldo);
            const fatKgVal = absVal / 7700;
            const fatLitersVal = fatKgVal / 0.90;

            const unitType = document.getElementById('unitSelect')?.value || 'metric';
            const fbKgOut = unitType === 'imperial' ? (fatKgVal * 2.20462).toFixed(2) : fatKgVal.toFixed(2);
            if(document.getElementById('cumFatBurnedUnit')) document.getElementById('cumFatBurnedUnit').innerText = unitType === 'imperial' ? 'lbs' : 'kg';

            if (totalCalorieSaldo > 0) {
                deficitTitle.innerHTML = lang === 'en' ? "⚠️ Accumulated calorie balance (<span class='alert-red'>surplus = weight gained</span>):" : "⚠️ Kertynyt kalorisaldo (<span class='alert-red'>plussalla = painoa tullut lisää</span>):";
                deficitEl.innerText = "+" + Math.round(totalCalorieSaldo);
                fatKgEl.innerText = "+" + fbKgOut;
                fatLitersEl.innerText = "+" + fatLitersVal.toFixed(2);
                deficitEl.className = "alert-red";
                fatKgEl.className = "alert-red";
                fatLitersEl.className = "alert-red";
            } else if (totalCalorieSaldo < 0) {
                deficitTitle.innerHTML = lang === 'en' ? "🟢 Accumulated calorie balance (<span class='alert-green'>negative = weight lost</span>):" : "🟢 Kertynyt kalorisaldo (<span class='alert-green'>negatiivinen = laihduttu</span>):";
                deficitEl.innerText = Math.round(totalCalorieSaldo);
                fatKgEl.innerText = "-" + fbKgOut;
                fatLitersEl.innerText = "-" + fatLitersVal.toFixed(2);
                deficitEl.className = "alert-green";
                fatKgEl.className = "alert-green";
                fatLitersEl.className = "alert-green";
            } else {
                deficitTitle.innerText = lang === 'en' ? "Accumulated calorie balance:" : "Kertynyt kalorisaldo:";
                deficitEl.innerText = "0";
                fatKgEl.innerText = "0.00";
                fatLitersEl.innerText = "0.00";
                deficitEl.className = "";
                fatKgEl.className = "";
                fatLitersEl.className = "";
            }

            document.getElementById('cumMtorDays').innerText = mtorActiveDaysCount;
            const cumAutoEl = document.getElementById('cumAutophagyDays');
            if (cumAutoEl) cumAutoEl.innerText = autophagyActiveDaysCount;

            const cumFatBurnEl = document.getElementById('cumFatBurnAvgVal');
            if (cumFatBurnEl) {
                if (totalDays > 0) {
                    const avgHours = totalFatBurnHours / totalDays;
                    cumFatBurnEl.innerText = muotoileAikaJaProsentti(avgHours, 24.0, lang);
                } else {
                    cumFatBurnEl.innerText = lang === 'en' ? "00:00 / 0.0% of day" : "00:00 / 0.0% vuorokaudesta";
                }
            }
        }

        function log10(val) { return Math.log(val) / Math.LN10; }
        function tarkistaCustomTavoite() { document.getElementById('customGoalContainer').style.display = (document.getElementById('strategyGoal').value === "custom") ? "block" : "none"; }

        function paivitaLaskelmat() {
            const w = getMetricVal('weight') || 0;
            if (w > 0 && historyDB[activeDateStr]) {
                lisaaAnnosV20(true);
            }
        }

        function lisaaAnnosV20(isRefreshOnly = false) {
            const w = getMetricVal('weight') || 0;
            const h = getMetricVal('height') || 0;
            const waist = getMetricVal('waist') || 0;
            const neck = getMetricVal('neck') || 0;
            const hip = getMetricVal('hip') || 0;
            const gender = document.getElementById('gender').value;

            const c = parseFloat(document.getElementById('carbs').value) || 0;
            const p = parseFloat(document.getElementById('protein').value) || 0;
            const f = parseFloat(document.getElementById('fat').value) || 0;

            const lang = document.getElementById('langSelect').value;

            if (isNaN(w) || w <= 0) { 
                if (!isRefreshOnly) alert(lang === 'en' ? "Enter current weight (kg) to continue!" : "Syötä nykyinen paino (kg) jatkaaksesi!"); 
                return; 
            }

            if (!historyDB[activeDateStr]) historyDB[activeDateStr] = { macros: { carbs: 0, protein: 0, fat: 0 }, meals: [], calculated: null };

            if (!isRefreshOnly) {
                if (editingMealIndex !== null && historyDB[activeDateStr] && historyDB[activeDateStr].meals && historyDB[activeDateStr].meals[editingMealIndex] !== undefined) {
                    const mealTimeInput = document.getElementById('mealTime').value;
                    let timeStr = mealTimeInput;
                    if (!timeStr) {
                        const now = new Date();
                        timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
                    }

                    historyDB[activeDateStr].meals[editingMealIndex] = { c: c, p: p, f: f, time: timeStr };

                    let totC = 0, totP = 0, totF = 0;
                    historyDB[activeDateStr].meals.forEach(m => {
                        totC += (m.c || 0);
                        totP += (m.p || 0);
                        totF += (m.f || 0);
                    });
                    historyDB[activeDateStr].macros = { carbs: totC, protein: totP, fat: totF };

                    document.getElementById('carbs').value = ""; 
                    document.getElementById('protein').value = ""; 
                    document.getElementById('fat').value = ""; 
                    document.getElementById('mealTime').value = "";

                    editingMealIndex = null;
                    paivitaMuokkausUI();
            updateLabelsForUnits();
                    sailytaPaivaDB();
                    if (window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
                } else if (c > 0 || p > 0 || f > 0) {
                    const mealTimeInput = document.getElementById('mealTime').value;
                    let timeStr = mealTimeInput;
                    if (!timeStr) {
                        const now = new Date();
                        timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
                    }

                    historyDB[activeDateStr].macros.carbs += c;
                    historyDB[activeDateStr].macros.protein += p;
                    historyDB[activeDateStr].macros.fat += f;
                    historyDB[activeDateStr].meals.push({ c: c, p: p, f: f, time: timeStr });

                    document.getElementById('carbs').value = ""; document.getElementById('protein').value = ""; document.getElementById('fat').value = ""; document.getElementById('mealTime').value = "";

                    sailytaPaivaDB();
                    if (window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
                }
            }

            const userBodyFat = parseFloat(document.getElementById('bodyFat')?.value) || 0;
            let rPct = userBodyFat;
            if (rPct <= 0) {
                rPct = (gender === "male") ? 32.0 : 42.0;
                if ((gender === "male" && h > 0 && waist > neck && neck > 0) || (gender === "female" && h > 0 && (waist + hip) > neck && neck > 0 && hip > 0)) {
                    rPct = (gender === "male") 
                        ? (495 / (1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(h)) - 450) 
                        : (495 / (1.29579 - 0.35004 * log10(waist + hip - neck) + 0.22100 * log10(h)) - 450);
                    if (rPct < 3) rPct = 3;
                }
            }

            const actMult = parseFloat(document.getElementById('activityLevel').value) || 1.25;
            const rMoor = w - (w * (rPct / 100)); 
            const tdee = (370 + (21.6 * rMoor)) * actMult;

            document.getElementById('resFatPct').innerText = rPct.toFixed(1);
            
            
            const unitObj1 = document.getElementById('unitSelect')?.value || 'metric';
            document.getElementById('resLean').innerText = unitObj1 === 'imperial' ? (rMoor * 2.20462).toFixed(1) : rMoor.toFixed(1);
            if(document.getElementById('resLeanUnit')) document.getElementById('resLeanUnit').innerText = unitObj1 === 'imperial' ? 'lbs' : 'kg';

            if (document.getElementById('estExpenditureVal')) {
                document.getElementById('estExpenditureVal').innerText = Math.round(tdee);
            }

            const fatKg = w * (rPct / 100);
            const fatLiters = fatKg / 0.90;
            
            
            const unitObj2 = document.getElementById('unitSelect')?.value || 'metric';
            const fatKgOut = unitObj2 === 'imperial' ? (fatKg * 2.20462).toFixed(1) : fatKg.toFixed(1);
            const wUnit = unitObj2 === 'imperial' ? 'lbs' : 'kg';
            document.getElementById('resFatVolCombined').innerText = `${fatKgOut} ${wUnit} (${fatLiters.toFixed(1)} ${lang === 'en' ? 'liters' : 'litraa'})`;


            const strat = document.getElementById('strategyGoal').value;
            let wkKg = 0;
            let dailyDeficit = 0;

            if (strat === 'lose_1pct') { wkKg = w * 0.01; dailyDeficit = (wkKg * 7700) / 7; }
            else if (strat === 'lose_075pct') { wkKg = w * 0.0075; dailyDeficit = (wkKg * 7700) / 7; }
            else if (strat === 'lose_05pct') { wkKg = w * 0.005; dailyDeficit = (wkKg * 7700) / 7; }
            else if (strat === 'lose_025pct') { wkKg = w * 0.0025; dailyDeficit = (wkKg * 7700) / 7; }
            else if (strat === 'maintain') { wkKg = 0; dailyDeficit = 0; }
            else if (strat === 'custom') {
                const delta = parseFloat(document.getElementById('customCalorieDelta').value) || 0;
                dailyDeficit = -delta;
                wkKg = Math.abs(delta * 7 / 7700);
            }

            
            const unitObj = document.getElementById('unitSelect')?.value || 'metric';
            document.getElementById('resWeeklyTarget').innerText = unitObj === 'imperial' ? (wkKg * 2.20462).toFixed(2) : wkKg.toFixed(2);
            if(document.getElementById('resWeeklyTargetUnit')) document.getElementById('resWeeklyTargetUnit').innerText = (unitObj === 'imperial' ? 'lbs' : 'kg') + '/wk';

            document.getElementById('resWeeklyVol').innerText = (wkKg / 0.90).toFixed(2);

            const totalCarbs = historyDB[activeDateStr].macros.carbs;
            const totalProt = historyDB[activeDateStr].macros.protein;
            const totalFat = historyDB[activeDateStr].macros.fat;

            const targetBudget = Math.max(0, tdee - dailyDeficit);
            const kCals = (totalCarbs * 4) + (totalProt * 4) + (totalFat * 9);

            document.getElementById('ledgerBudget').innerText = `${Math.round(targetBudget)} (${lang === 'en' ? 'Burn' : 'Kulutus'}: ${Math.round(tdee)})`;
            document.getElementById('ledgerUsed').innerText = Math.round(kCals);
            document.getElementById('ledgerLeft').innerText = Math.round(targetBudget - kCals);
            const age = parseInt(document.getElementById('age').value) || 45;
            const lbm = rMoor; // Rasvaton massa lasketaan koodissa nimellä rMoor

            let ageMultiplier = 1.0;
            let minThreshold = 30.0;
            if (age >= 60) {
            ageMultiplier = 1.15;
            minThreshold = 35.0;
            } else if (age >= 50) {
            ageMultiplier = 1.08;
            minThreshold = 32.0;
    }


            const mtorThreshold = Math.max(minThreshold, lbm * 0.4 * ageMultiplier);
            document.getElementById('resMtorG').innerText = `${mtorThreshold.toFixed(1)} g ${lang === 'en' ? 'protein / meal' : 'proteiinia / ateria'}`;
            document.getElementById('resDailyProt').innerText = `${totalProt.toFixed(1)} g`;

            const curMeals = historyDB[activeDateStr] ? historyDB[activeDateStr].meals : [];
            const fastingData = laskePaastoIkkuna(curMeals);
            const autoStatus = haeAutofagiaStatus(fastingData.fastWindow, lang);

            const resEatWinEl = document.getElementById('resEatingWindow');
            const resFastWinEl = document.getElementById('resFastingWindow');
            const resAutoStatusEl = document.getElementById('resAutophagyStatus');

            if (resEatWinEl) resEatWinEl.innerText = `${fastingData.eatWindow.toFixed(1)} h`;
            if (resFastWinEl) resFastWinEl.innerText = `${fastingData.fastWindow.toFixed(1)} h`;
            if (resAutoStatusEl) {
                resAutoStatusEl.innerText = autoStatus.text;
                resAutoStatusEl.style.color = autoStatus.color;
            }

            const totalGL = totalCarbs * 0.6;
            const iTot = (totalCarbs * 1.0) + (totalProt * 0.56) + (totalFat * 0.10);
            const bufferD = 1.0 + ((totalProt * 0.01) + (totalFat * 0.02));
            const iPeak = (iTot / bufferD).toFixed(1);

            document.getElementById('resGlycemicLoad').innerText = totalGL.toFixed(1);
            document.getElementById('resInsulinTotal').innerText = `${iTot.toFixed(1)} iAUC`;
            document.getElementById('resInsulinBuffer').innerText = bufferD.toFixed(2);
            document.getElementById('resInsulinPeak').innerText = `${iPeak} uIU/ml`;

            let insulinStatus = lang === 'en' ? "🟢 LOW (Ketosis / Efficient fat burning active)" : "🟢 MATALA (Ketoosi / Tehokas rasvanpoltto käynnissä)";
            if (iPeak > 80) insulinStatus = lang === 'en' ? "🔴 HIGH (Elevated insulin buffers fat burning)" : "🔴 KORKEA (Kohonnut insuliini puskuroi rasvanpolton)";
            else if (iPeak > 35) insulinStatus = lang === 'en' ? "🟡 MODERATELY ACTIVE (Digestion active)" : "🟡 KOHTALAISEN AKTIIVINEN (Ruoansulattelu aktiivinen)";
            document.getElementById('resInsulinStatus').innerText = insulinStatus;

            const resFatBurnEl = document.getElementById('resFatBurnWindow');
            if (resFatBurnEl) {
                const todayStr = (isDemoMode && demoDates[30]) ? demoDates[30] : getTodayStr();
                const isToday = (activeDateStr === todayStr);

                if (isToday) {
                    const now = new Date();
                    const tNow = now.getHours() + (now.getMinutes() / 60);
                    const elapsedHours = Math.max(0.1, tNow);
                    const fbDataNow = laskeRasvanpolttoAika(curMeals, elapsedHours);
                    const fbData24 = laskeRasvanpolttoAika(curMeals, 24.0);

                    const nowStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
                    const hhmmNow = muotoileHHMM(fbDataNow.hours);
                    const pctNow = fbDataNow.pct.toFixed(1);

                    const hhmm24 = muotoileHHMM(fbData24.hours);
                    const pct24 = fbData24.pct.toFixed(1);

                    if (lang === 'en') {
                        resFatBurnEl.innerText = `${hhmmNow} / ${pctNow}% (by ${nowStr}) | Full 24h: ${hhmm24} / ${pct24}%`;
                    } else {
                        resFatBurnEl.innerText = `${hhmmNow} / ${pctNow}% (klo ${nowStr} mennessä) | Koko 24h: ${hhmm24} / ${pct24}%`;
                    }
                    resFatBurnEl.className = fbDataNow.pct >= 50 ? "alert-green" : "alert-orange";
                } else {
                    const fbData24 = laskeRasvanpolttoAika(curMeals, 24.0);
                    resFatBurnEl.innerText = muotoileAikaJaProsentti(fbData24.hours, 24.0, lang);
                    resFatBurnEl.className = fbData24.hours >= 12.0 ? "alert-green" : "alert-orange";
                }
            }

            historyDB[activeDateStr].calculated = { weight: w, tdee: tdee, consumedKcal: kCals, lbm: rMoor, age: age };
            sailytaPaivaDB();
            paivitaLogiNaytto();
            document.getElementById('outputBox').style.display = "block";
            piirraKuvaaja24H();
        }

        function paivitaLogiNaytto() {
            const tl = document.getElementById('mealTimeline'); 
            if (!tl) return;
            tl.innerHTML = "";
            const curData = historyDB[activeDateStr];
            const lang = document.getElementById('langSelect')?.value || 'fi';
            const t = translations[lang] || translations.fi;

            if (curData && curData.meals && curData.meals.length > 0) {
                document.getElementById('logBox').style.display = "block";
                curData.meals.forEach((m, idx) => {
                    const gl = m.c * 0.6;
                    const buf = 1.0 + ((m.p * 0.01) + (m.f * 0.02));
                    const iTot = (m.c * 1.0) + (m.p * 0.56) + (m.f * 0.10);
                    const iPeak = iTot / buf;

                    const mealWord = lang === 'en' ? 'Meal' : 'Ateria';
                    const editWord = t.editMealBtn || (lang === 'en' ? '✏️ Edit' : '✏️ Muokkaa');
                    const deleteWord = t.deleteMealBtn || (lang === 'en' ? '🗑️ Delete' : '🗑️ Poista');
                    const cLabel = lang === 'en' ? 'C' : 'HH';
                    const pLabel = 'P';
                    const fLabel = lang === 'en' ? 'F' : 'R';

                    const isEditingThis = (editingMealIndex === idx);
                    const d = document.createElement('div'); 
                    d.className = 'meal-log-item';
                    if (isEditingThis) {
                        d.style.border = '1px solid #00ffff';
                        d.style.background = 'rgba(0, 255, 255, 0.15)';
                    }
                    const safeTime = String(m.time).replace(/[<>&"']/g, x => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[x]));
                    d.innerHTML = `<strong>${mealWord} ${idx + 1} (${safeTime})</strong> — ${cLabel}: ${m.c}g | ${pLabel}: ${m.p}g | ${fLabel}: ${m.f}g &nbsp;|&nbsp; <span style="color:#ffff00;">GL: ${gl.toFixed(1)}</span> | <span style="color:#88ffff;">D: ${buf.toFixed(2)}x</span> | <span style="color:#ff88ff;">Peak: ${iPeak.toFixed(1)} uIU/ml</span>
                    <span style="margin-left: 8px; display: inline-block;">
                        <button type="button" onclick="muokkaaAnnos(${idx})" style="display:inline-block; width:auto; padding:2px 6px; font-size:11px; margin-top:0; background:#003344; color:#00ffff; border:1px solid #00ffff; cursor:pointer;">${editWord}</button>
                        <button type="button" onclick="poistaAnnos(${idx})" style="display:inline-block; width:auto; padding:2px 6px; font-size:11px; margin-top:0; background:#440000; color:#ffaaaa; border:1px solid #ff4444; cursor:pointer;">${deleteWord}</button>
                    </span>`;
                    tl.appendChild(d);
                });
                const cLabel = lang === 'en' ? 'C' : 'HH';
                const pLabel = 'P';
                const fLabel = lang === 'en' ? 'F' : 'R';
                document.getElementById('logMacros').innerText = `${cLabel}: ${curData.macros.carbs.toFixed(1)}g | ${pLabel}: ${curData.macros.protein.toFixed(1)}g | ${fLabel}: ${curData.macros.fat.toFixed(1)}g`;
            } else { 
                document.getElementById('logBox').style.display = "none"; 
            }
        }

        function poistaAnnos(idx) {
            if (!historyDB[activeDateStr] || !historyDB[activeDateStr].meals) return;
            historyDB[activeDateStr].meals.splice(idx, 1);

            if (editingMealIndex === idx) {
                editingMealIndex = null;
                if (document.getElementById('carbs')) document.getElementById('carbs').value = "";
                if (document.getElementById('protein')) document.getElementById('protein').value = "";
                if (document.getElementById('fat')) document.getElementById('fat').value = "";
                if (document.getElementById('mealTime')) document.getElementById('mealTime').value = "";
                paivitaMuokkausUI();
            updateLabelsForUnits();
            } else if (editingMealIndex !== null && editingMealIndex > idx) {
                editingMealIndex--;
            }

            let totC = 0, totP = 0, totF = 0;
            historyDB[activeDateStr].meals.forEach(m => {
                totC += (m.c || 0);
                totP += (m.p || 0);
                totF += (m.f || 0);
            });
            historyDB[activeDateStr].macros = { carbs: totC, protein: totP, fat: totF };

            sailytaPaivaDB();
            paivitaLogiNaytto();
            paivitaLaskelmat();
            if (window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
        }

        function muokkaaAnnos(idx) {
            if (!historyDB[activeDateStr] || !historyDB[activeDateStr].meals || !historyDB[activeDateStr].meals[idx]) return;
            const m = historyDB[activeDateStr].meals[idx];
            editingMealIndex = idx;
            if (document.getElementById('carbs')) document.getElementById('carbs').value = (m.c !== undefined && m.c !== null) ? m.c : '';
            if (document.getElementById('protein')) document.getElementById('protein').value = (m.p !== undefined && m.p !== null) ? m.p : '';
            if (document.getElementById('fat')) document.getElementById('fat').value = (m.f !== undefined && m.f !== null) ? m.f : '';
            if (document.getElementById('mealTime') && m.time) {
                document.getElementById('mealTime').value = m.time;
            }
            paivitaMuokkausUI();
            updateLabelsForUnits();
        }

        function peruutaMuokkaus() {
            editingMealIndex = null;
            if (document.getElementById('carbs')) document.getElementById('carbs').value = "";
            if (document.getElementById('protein')) document.getElementById('protein').value = "";
            if (document.getElementById('fat')) document.getElementById('fat').value = "";
            if (document.getElementById('mealTime')) document.getElementById('mealTime').value = "";
            paivitaMuokkausUI();
            updateLabelsForUnits();
        }

        function paivitaMuokkausUI() {
            const lang = document.getElementById('langSelect')?.value || 'fi';
            const t = translations[lang] || translations.fi;
            const logBtn = document.getElementById('logMealBtn');
            const cancelBtn = document.getElementById('cancelEditBtn');

            if (editingMealIndex !== null) {
                if (logBtn) logBtn.innerText = t.updateMealBtn || (lang === 'en' ? 'Update meal ✏️' : 'Päivitä ateria ✏️');
                if (cancelBtn) cancelBtn.style.display = 'block';
            } else {
                if (logBtn) logBtn.innerText = t.logMealBtn || (lang === 'en' ? 'Log and calculate balance 📥' : 'Kirjaa ja laske tase 📥');
                if (cancelBtn) cancelBtn.style.display = 'none';
            }
            paivitaLogiNaytto();
        }

        function lataaSuosikit() {
            const selectEl = document.getElementById('favoriteSelect');
            if (!selectEl) return;
            const lang = document.getElementById('langSelect')?.value || 'fi';
            const t = translations[lang] || translations.fi;

            const favs = JSON.parse(localStorage.getItem('metabolic_v20_favorites')) || [];
            
            const cLabel = lang === 'en' ? 'C' : 'HH';
            const pLabel = 'P';
            const fLabel = lang === 'en' ? 'F' : 'R';

            let html = `<option value="" data-i18n="favoriteDefault">${t.favoriteDefault || '-- Valitse suosikkiateria --'}</option>`;
            favs.forEach((fav, idx) => {
                const safeName = String(fav.name).replace(/[<>&"']/g, m => ({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;',"'":'&#39;'}[m]));
                html += `<option value="${idx}">${safeName} (${cLabel}: ${fav.c}g, ${pLabel}: ${fav.p}g, ${fLabel}: ${fav.f}g)</option>`;
            });
            selectEl.innerHTML = html;
        }

        function tallennaSuosikki() {
            const lang = document.getElementById('langSelect')?.value || 'fi';
            const t = translations[lang] || translations.fi;

            const c = parseFloat(document.getElementById('carbs').value) || 0;
            const p = parseFloat(document.getElementById('protein').value) || 0;
            const f = parseFloat(document.getElementById('fat').value) || 0;

            if (c <= 0 && p <= 0 && f <= 0) {
                alert(t.favAlertEmpty || "Syötä ainakin jokin makro (hiilihydraatit, proteiini tai rasva) ennen tallennusta!");
                return;
            }

            const name = prompt(t.favPromptName || "Anna suosikkiaterialle nimi:");
            if (!name || !name.trim()) return;

            const favs = JSON.parse(localStorage.getItem('metabolic_v20_favorites')) || [];
            favs.push({ name: name.trim(), c: c, p: p, f: f });
            localStorage.setItem('metabolic_v20_favorites', JSON.stringify(favs));
            lataaSuosikit();
        }

        function valitseSuosikki(val) {
            if (val === "" || val === null || val === undefined) return;
            const idx = parseInt(val, 10);
            if (isNaN(idx)) return;

            const favs = JSON.parse(localStorage.getItem('metabolic_v20_favorites')) || [];
            if (favs[idx]) {
                const fav = favs[idx];
                document.getElementById('carbs').value = fav.c !== undefined ? fav.c : '';
                document.getElementById('protein').value = fav.p !== undefined ? fav.p : '';
                document.getElementById('fat').value = fav.f !== undefined ? fav.f : '';
            }
        }

        function poistaSuosikki() {
            const selectEl = document.getElementById('favoriteSelect');
            if (!selectEl) return;
            const val = selectEl.value;
            const lang = document.getElementById('langSelect')?.value || 'fi';
            const t = translations[lang] || translations.fi;

            if (val === "" || val === null || val === undefined) {
                alert(t.favAlertSelectDelete || "Valitse poistettava suosikkiateria valikosta!");
                return;
            }

            const idx = parseInt(val, 10);
            if (isNaN(idx)) return;

            let favs = JSON.parse(localStorage.getItem('metabolic_v20_favorites')) || [];
            if (idx >= 0 && idx < favs.length) {
                favs.splice(idx, 1);
                localStorage.setItem('metabolic_v20_favorites', JSON.stringify(favs));
                lataaSuosikit();
            }
        }

        function piirraKuvaaja24H() {
            const canvas = document.getElementById('dynamicsChart');
            if (!canvas || !canvas.getContext) return;
            const ctx = canvas.getContext('2d');
            const W = canvas.width, H = canvas.height;
            const lang = document.getElementById('langSelect').value;
            ctx.clearRect(0, 0, W, H);

            ctx.strokeStyle = '#003300';
            ctx.lineWidth = 1;
            for (let x = 0; x < W; x += W / 24) {
                ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H - 25); ctx.stroke();
            }
            for (let y = 0; y < H - 25; y += 35) {
                ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
            }

            ctx.fillStyle = '#00ff00';
            ctx.font = '10px Courier New';
            for (let i = 0; i <= 24; i += 2) {
                const xPos = (i / 24) * W;
                if (i < 24) {
                    ctx.fillText(`${String(i).padStart(2, '0')}:00`, xPos + 4, H - 8);
                }
            }

            const meals = historyDB[activeDateStr]?.meals || [];

            function getInsulinAtTime(t) {
                return laskeInsuliiniAikaan(meals, t);
            }

            function getGLAtTime(t) {
                let gl = 0.0;
                meals.forEach(m => {
                    if (m.time) {
                        const parts = m.time.split(':');
                        const mealTime = parseInt(parts[0], 10) + (parseInt(parts[1] || '0', 10) / 60);
                        const dt = t - mealTime;
                        if (dt >= 0) {
                            const totalM = m.c + m.p + m.f;
                            const carbRatio = totalM > 0 ? (m.c / totalM) : 0;
                            const buf = 1.0 + ((m.p * 0.01) + (m.f * 0.02));
                            const glLoad = m.c * 0.6;

                            // GL Latency and peak timing:
                            // High-carb: rise starts ~10 min (0.167h), peak ~30 min (0.5h)
                            // Low-carb: rise starts ~15 min (0.25h), peak ~45 min (0.75h)
                            const tStart = 0.25 - (carbRatio * 0.0833);
                            const tPeak = 0.75 - (carbRatio * 0.25);

                            if (dt >= tStart && glLoad > 0) {
                                let factor = 0;
                                if (dt <= tPeak) {
                                    // Smooth sigmoidal up-slope
                                    const u = (dt - tStart) / (tPeak - tStart);
                                    factor = (3 * u * u) - (2 * u * u * u);
                                } else {
                                    // Smooth tail decay
                                    const tau = dt - tPeak;
                                    const decayScale = 1.1 * buf;
                                    factor = Math.exp(-Math.pow(tau / decayScale, 1.4));
                                }
                                if (factor > 0) {
                                    gl += glLoad * factor;
                                }
                            }
                        }
                    }
                });
                return gl;
            }

            const STEPS = 288;
            let insulinSamples = [];
            let glSamples = [];
            for (let s = 0; s <= STEPS; s++) {
                const t = (s / STEPS) * 24;
                insulinSamples.push(getInsulinAtTime(t));
                glSamples.push(getGLAtTime(t));
            }

            const maxVal = Math.max(90, ...insulinSamples, ...glSamples);

            const thresholdY = (H - 30) - ((35 / maxVal) * (H - 60));
            ctx.beginPath();
            ctx.strokeStyle = '#ff0000';
            ctx.setLineDash([5, 5]);
            ctx.lineWidth = 1.5;
            ctx.moveTo(0, thresholdY);
            ctx.lineTo(W, thresholdY);
            ctx.stroke();
            ctx.setLineDash([]); 
            ctx.fillStyle = '#ff5555';
            ctx.fillText(lang === 'en' ? 'THRESHOLD (35 uIU/ml)' : 'KYNNSYSTASO (35 uIU/ml)', W - 180, thresholdY - 4);

            if (activeDateStr === getTodayStr()) {
                const now = new Date();
                const currentFraction = now.getHours() + (now.getMinutes() / 60);
                const currentX = (currentFraction / 24) * W;

                ctx.beginPath();
                ctx.strokeStyle = '#00ffff';
                ctx.lineWidth = 2;
                ctx.setLineDash([3, 3]);
                ctx.moveTo(currentX, 0);
                ctx.lineTo(currentX, H - 25);
                ctx.stroke();
                ctx.setLineDash([]);

                ctx.fillStyle = '#00ffff';
                ctx.font = 'bold 10px Courier New';
                ctx.fillText(lang === 'en' ? '◀ NOW' : '◀ NYT', currentX + 4, 15);
            }

            ctx.beginPath();
            ctx.strokeStyle = '#ffff00';
            ctx.lineWidth = 2;
            for (let s = 0; s <= STEPS; s++) {
                const t = (s / STEPS) * 24;
                const x = (t / 24) * W;
                const gl = glSamples[s];
                const y = (H - 30) - ((gl / maxVal) * (H - 60));
                if (s === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.beginPath();
            ctx.strokeStyle = '#00ff00';
            ctx.lineWidth = 2.5;
            for (let s = 0; s <= STEPS; s++) {
                const t = (s / STEPS) * 24;
                const x = (t / 24) * W;
                const ins = insulinSamples[s];
                const y = (H - 30) - ((ins / maxVal) * (H - 60));
                if (s === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            ctx.lineTo(W, H - 25);
            ctx.lineTo(0, H - 25);
            ctx.fillStyle = 'rgba(0, 255, 0, 0.12)';
            ctx.fill();
        }

        function nollaaValittuPaiva() {
            if (editingMealIndex !== null) peruutaMuokkaus();
            historyDB[activeDateStr] = { macros: { carbs: 0, protein: 0, fat: 0 }, meals: [], calculated: null };
            sailytaPaivaDB();
            paivitaLogiNaytto();
            document.getElementById('outputBox').style.display = "none";
            if (window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
        }

        function haeVarmuuskopioPayload() {
            if (!isDemoMode) {
                tallennaKayttajaParametrit(false);
            }
            const realHistoryDB = isDemoMode 
                ? (JSON.parse(localStorage.getItem('metabolic_v20_historyDB')) || {})
                : historyDB;
            const realUserParams = isDemoMode
                ? (JSON.parse(localStorage.getItem('metabolic_v20_userParams')) || {})
                : JSON.parse(localStorage.getItem('metabolic_v20_userParams') || '{}');

            return {
                app: "metabolic_calculator_v20",
                version: "1.0",
                exportedAt: localStorage.getItem('metabolic_v20_lastUpdate') || new Date().toISOString(),
                lang: localStorage.getItem('metabolic_v20_lang') || 'fi',
                userParams: realUserParams,
                historyDB: realHistoryDB
            };
        }

        function palautaVarmuuskopioPayload(imported) {
            if (!imported || (typeof imported !== 'object')) return false;

            if (isDemoMode) {
                toggleDemoMode();
            }

            let hasValidData = false;

            if (imported.historyDB && typeof imported.historyDB === 'object') {
                historyDB = imported.historyDB;
                localStorage.setItem('metabolic_v20_historyDB', JSON.stringify(historyDB));
                hasValidData = true;
            }

            if (imported.userParams && typeof imported.userParams === 'object') {
                localStorage.setItem('metabolic_v20_userParams', JSON.stringify(imported.userParams));
                lataaKayttajaParametrit();
                hasValidData = true;
            }

            if (imported.lang) {
                localStorage.setItem('metabolic_v20_lang', imported.lang);
                if (document.getElementById('langSelect')) {
                    document.getElementById('langSelect').value = imported.lang;
                    switchLanguage(imported.lang);
                }
            }

            if (hasValidData) {
                alustaKumulatiivisetPaivaykset();
                lataaAktiivisenPaivanTiedot();
                tarkistaSukupuoli();
                tarkistaCustomTavoite();
                paivitaKaikkienPaivienLaskelmat();
            }

            return hasValidData;
        }

        window.haeVarmuuskopioPayload = haeVarmuuskopioPayload;
        window.palautaVarmuuskopioPayload = palautaVarmuuskopioPayload;

        function vieVarmuuskopioData() {
            const backupData = haeVarmuuskopioPayload();
            const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backupData, null, 2));
            const downloadAnchor = document.createElement('a');
            const today = getTodayStr();
            downloadAnchor.setAttribute("href", dataStr);
            downloadAnchor.setAttribute("download", `metabolinen_laskuri_varmuuskopio_${today}.json`);
            document.body.appendChild(downloadAnchor);
            downloadAnchor.click();
            downloadAnchor.remove();
        }

        function tuoVarmuuskopioData(event) {
            const file = event.target.files && event.target.files[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = function(e) {
                try {
                    const imported = JSON.parse(e.target.result);
                    const lang = document.getElementById('langSelect').value;
                    const success = palautaVarmuuskopioPayload(imported);
                    if (!success) {
                        alert(lang === 'en' ? "Error: The file does not contain valid calculator backup data!" : "Virhe: Tiedosto ei sisällä kelvollista laskurin varmuuskopiodataa!");
                        return;
                    }
                    if (window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
                    alert(lang === 'en' ? "Backup imported and data updated successfully!" : "Varmuuskopio tuotu ja tiedot päivitetty onnistuneesti!");
                } catch (err) {
                    console.error("Import error:", err);
                    const lang = document.getElementById('langSelect').value;
                    alert(lang === 'en' ? "Failed to parse JSON backup file. Please make sure it is a valid backup file." : "Virhe tiedoston tuonnissa! Tarkista, että tiedosto on kelvollinen JSON-varmuuskopio.");
                } finally {
                    event.target.value = '';
                }
            };
            reader.readAsText(file);
        }

        function nollaaKaikkiTiedot() {
            const lang = document.getElementById('langSelect').value;
            const vahvistus = confirm(
                lang === 'en' ? 
                "⚠️ WARNING!\n\nAll saved data (profile, settings, meals, and history) will be completely deleted.\n\nThis is an IRREVERSIBLE ACTION!\n\nDo you still want to proceed?" :
                "⚠️ VAROITUS!\n\nKaikki tallennetut tiedot (profiili, asetukset, ateriat ja historia) poistetaan kokonaan.\n\nTämä on PERUUTTAMATON TAPAHTUMA!\n\nHaluatko tehdä sen siitä huolimatta?"
            );
            
            if (vahvistus) {
                localStorage.clear();
                alert(lang === 'en' ? "System successfully reset!" : "Järjestelmä nollattu onnistuneesti!");
                location.reload();
            }
        }
