import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'function detectInitialLanguage\(\) \{.*?\}\n        \}\n', re.DOTALL)

new_detect = """function detectInitialLanguage() {
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
"""

if pattern.search(content):
    content = pattern.sub(new_detect, content)
else:
    print("WARNING: detectInitialLanguage not found!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
