import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

pattern = re.compile(r'window\.onload = function\(\) \{.*?\};', re.DOTALL)

new_onload = """window.onload = function() { 
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
        };"""

if pattern.search(content):
    content = pattern.sub(new_onload, content)
else:
    print("WARNING: window.onload not found!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
