with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

out = []
skip = False
for i, line in enumerate(lines):
    # Detect start of window.onload
    if "window.onload = function() {" in line and "const savedLang = detectInitialLanguage();" in lines[i+1]:
        out.append(line)
        out.append(lines[i+1])
        out.append(lines[i+2])
        out.append(lines[i+3])
        out.append("""
            const initialUnit = detectInitialUnit();
            document.getElementById('unitSelect').value = initialUnit;
            updateLabelsForUnits();

            // Attempt IP geolocation check in background for new users
            if (!localStorage.getItem('metabolic_v20_lang') || !localStorage.getItem('metabolic_v20_units')) {
                autoDetectSettingsByIP();
            }
""")
        skip = True
        continue
    
    if skip:
        if "updateLabelsForUnits();" in line and "const savedUnit = localStorage.getItem('metabolic_v20_units');" in lines[i-4]:
            skip = False
        continue

    # Detect start of detectInitialLanguage
    if "        function detectInitialLanguage() {" in line and "const saved = localStorage.getItem('metabolic_v20_lang');" in lines[i+1]:
        out.append(line)
        out.append(lines[i+1])
        out.append(lines[i+2])
        out.append(lines[i+3])
        out.append(lines[i+4])
        out.append(lines[i+5])
        out.append(lines[i+6])
        out.append(lines[i+7])
        out.append(lines[i+8])
        out.append(lines[i+9])
        out.append(lines[i+10])
        out.append(lines[i+11])
        out.append(lines[i+12])
        out.append(lines[i+13])
        out.append(lines[i+14])
        out.append(lines[i+15])
        out.append(lines[i+16])
        out.append(lines[i+17])
        out.append(lines[i+18])
        out.append(lines[i+19])
        out.append(lines[i+20])
        out.append(lines[i+21])
        out.append("""
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
""")
        skip = True
        continue
    
    if skip and "        }" in line and "    async function autoDetectLanguageByIP() {" in lines[i-31]:
        skip = False
        continue

    out.append(line)

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(out)
