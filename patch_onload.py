import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_onload = """        window.onload = function() { 
            const savedLang = detectInitialLanguage();
            document.getElementById('langSelect').value = savedLang;
            switchLanguage(savedLang);

            // Attempt IP geolocation check in background for new users
            if (!localStorage.getItem('metabolic_v20_lang')) {
                autoDetectLanguageByIP();
            }
            
            const savedUnit = localStorage.getItem('metabolic_v20_units');
            if (savedUnit) {
                document.getElementById('unitSelect').value = savedUnit;
            }
            updateLabelsForUnits();

            document.getElementById('selectedDate').value = activeDateStr;
            lataaKayttajaParametrit();
            lataaAktiivisenPaivanTiedot();
            lataaSuosikit();
            tarkistaSukupuoli(); 
            tarkistaCustomTavoite();
            alustaKumulatiivisetPaivaykset();
        };"""

new_onload = """        window.onload = function() { 
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

if old_onload in content:
    content = content.replace(old_onload, new_onload)
else:
    print("WARNING: old_onload not found!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
