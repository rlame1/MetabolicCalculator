import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add unitSelect
unit_select = """
            <label data-i18n="unitLabel">Mittayksiköt (Units):</label>
            <select id="unitSelect" onchange="switchUnits(this.value)">
                <option value="metric">Metric (KG, CM)</option>
                <option value="imperial">Imperial (LBS, IN)</option>
            </select>
"""
content = content.replace(
    '<label data-i18n="langLabel">Kieli (Language):</label>',
    unit_select + '\n            <label data-i18n="langLabel">Kieli (Language):</label>'
)

# 2. Insert getMetricVal, setMetricValToInput, updateLabelsForUnits, switchUnits
helpers = """
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
            if (!metricVal && metricVal !== 0) { document.getElementById(id).value = ""; return; }
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
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            const lang = document.getElementById('langSelect').value;
            const isEn = lang === 'en';
            const isImperial = unit === 'imperial';
            
            const hL = document.querySelector('label[data-i18n="heightLabel"]');
            if(hL) hL.innerText = isEn ? (isImperial ? "Height (in) [Optional]:" : "Height (cm) [Optional]:") : (isImperial ? "Pituus (in) [Vapaaehtoinen]:" : "Pituus (cm) [Vapaaehtoinen]:");
            document.getElementById('height').placeholder = isEn ? (isImperial ? "👉 ENTER DATA (HEIGHT IN)" : "👉 ENTER DATA (HEIGHT CM)") : (isImperial ? "👉 SYÖTÄ TIETO (PITUUS IN)" : "👉 SYÖTÄ TIETO (PITUUS CM)");
                
            const wL = document.querySelector('label[data-i18n="weightLabel"]');
            if(wL) wL.innerText = isEn ? (isImperial ? "Current Weight (lbs):" : "Current Weight (kg):") : (isImperial ? "Nykyinen Paino (lbs):" : "Nykyinen Paino (kg):");
            document.getElementById('weight').placeholder = isEn ? (isImperial ? "👉 ENTER DATA (WEIGHT LBS)" : "👉 ENTER DATA (WEIGHT KG)") : (isImperial ? "👉 SYÖTÄ TIETO (PAINO LBS)" : "👉 SYÖTÄ TIETO (PAINO KG)");

            const waistL = document.querySelector('label[data-i18n="waistLabel"]');
            if(waistL) waistL.innerText = isEn ? (isImperial ? "Waist circumference (in) [Optional]:" : "Waist circumference (cm) [Optional]:") : (isImperial ? "Vyötärön ympärys (in) [Vapaaehtoinen]:" : "Vyötärön ympärys (cm) [Vapaaehtoinen]:");
            document.getElementById('waist').placeholder = isEn ? (isImperial ? "👉 ENTER DATA (WAIST IN)" : "👉 ENTER DATA (WAIST CM)") : (isImperial ? "👉 SYÖTÄ TIETO (VYÖTÄRÖ IN)" : "👉 SYÖTÄ TIETO (VYÖTÄRÖ CM)");

            const neckL = document.querySelector('label[data-i18n="neckLabel"]');
            if(neckL) neckL.innerText = isEn ? (isImperial ? "Neck circumference (in) [Optional]:" : "Neck circumference (cm) [Optional]:") : (isImperial ? "Niskan ympärys (in) [Vapaaehtoinen]:" : "Niskan ympärys (cm) [Vapaaehtoinen]:");
            document.getElementById('neck').placeholder = isEn ? (isImperial ? "👉 ENTER DATA (NECK IN)" : "👉 ENTER DATA (NECK CM)") : (isImperial ? "👉 SYÖTÄ TIETO (NISKA IN)" : "👉 SYÖTÄ TIETO (NISKA CM)");

            const hipL = document.querySelector('label[data-i18n="hipLabel"]');
            if(hipL) hipL.innerText = isEn ? (isImperial ? "Hip circumference (in) [Female optional]:" : "Hip circumference (cm) [Female optional]:") : (isImperial ? "Lantion ympärys (in) [Naisilla vapaaehtoinen]:" : "Lantion ympärys (cm) [Naisilla vapaaehtoinen]:");
            document.getElementById('hip').placeholder = isEn ? (isImperial ? "👉 ENTER DATA (HIP IN)" : "👉 ENTER DATA (HIP CM)") : (isImperial ? "👉 SYÖTÄ TIETO (LANTIO IN)" : "👉 SYÖTÄ TIETO (LANTIO CM)");
            
            const fvL = document.querySelector('label[data-i18n="fatVolLabel"]');
            if (fvL) {
                // not a label but a span in result section:
                // Actually it's span.result-title with data-i18n="fatVolLabel"
            }
            const spans = document.querySelectorAll('span[data-i18n="fatVolLabel"]');
            spans.forEach(s => {
                s.innerText = isEn ? (isImperial ? "Body Fat (LBS / liters):" : "Body Fat (KG / liters):") : (isImperial ? "Kudosrasvasi (LBS / litraa):" : "Kudosrasvasi (KG / litraa):");
            });
            
            const ul = document.querySelector('label[data-i18n="unitLabel"]');
            if (ul) ul.innerText = isEn ? "Unit System:" : "Mittayksiköt (Units):";
        }
"""
content = content.replace('        function detectInitialLanguage() {', helpers + '\n        function detectInitialLanguage() {')

# 3. Add updateLabelsForUnits to switchLanguage
content = content.replace(
    '            paivitaMuokkausUI();',
    '            paivitaMuokkausUI();\n            updateLabelsForUnits();'
)

# 4. Remove data-i18n from inputs and placeholders from inputs so they don't get overwritten
content = re.sub(r'data-i18n-placeholder="[^"]+"', '', content)
# leave data-i18n on labels so querySelector('label[data-i18n="..."]') still finds them, but switchLanguage will overwrite them. Wait! switchLanguage replaces innerHTML using translation keys.
# So I need to modify switchLanguage to NOT overwrite these specific keys.
# Let's remove data-i18n from the labels in HTML. Then querySelector won't find them if we use data-i18n.
# Let's change querySelector to use id? They don't have id. Let's add IDs to labels.
content = content.replace('<label data-i18n="heightLabel">', '<label id="lblHeight">')
content = content.replace('<label data-i18n="weightLabel">', '<label id="lblWeight">')
content = content.replace('<label data-i18n="waistLabel">', '<label id="lblWaist">')
content = content.replace('<label data-i18n="neckLabel">', '<label id="lblNeck">')
content = content.replace('<label data-i18n="hipLabel">', '<label id="lblHip">')
content = content.replace('<span class="result-title" data-i18n="fatVolLabel">', '<span class="result-title" id="lblFatVol">')

# Also replace in python script updateLabelsForUnits:
content = content.replace("querySelector('label[data-i18n=\"heightLabel\"]')", "getElementById('lblHeight')")
content = content.replace("querySelector('label[data-i18n=\"weightLabel\"]')", "getElementById('lblWeight')")
content = content.replace("querySelector('label[data-i18n=\"waistLabel\"]')", "getElementById('lblWaist')")
content = content.replace("querySelector('label[data-i18n=\"neckLabel\"]')", "getElementById('lblNeck')")
content = content.replace("querySelector('label[data-i18n=\"hipLabel\"]')", "getElementById('lblHip')")
content = content.replace("querySelectorAll('span[data-i18n=\"fatVolLabel\"]')", "querySelectorAll('#lblFatVol')")

# Remove those keys from translations object so switchLanguage doesn't need them, or they just become dead keys. (dead keys is fine)

# 5. Fix HTML outputs: <span id="resLeanUnit">kg</span>, <span id="cumFatBurnedUnit">kg</span>, etc
content = content.replace('<span id="resLean"></span> kg', '<span id="resLean"></span> <span id="resLeanUnit">kg</span>')
content = content.replace('<span id="resWeeklyTarget"></span> kg/wk', '<span id="resWeeklyTarget"></span> <span id="resWeeklyTargetUnit">kg/wk</span>')
content = content.replace('<span id="cumFatBurnedKg">0.00</span> kg', '<span id="cumFatBurnedKg">0.00</span> <span id="cumFatBurnedUnit">kg</span>')


# 6. Replace reads
content = re.sub(r'parseFloat\(document\.getElementById\(\'height\'\)\.value\)', "getMetricVal('height')", content)
content = re.sub(r'parseFloat\(document\.getElementById\(\'weight\'\)\.value\)', "getMetricVal('weight')", content)
content = re.sub(r'parseFloat\(document\.getElementById\(\'waist\'\)\.value\)', "getMetricVal('waist')", content)
content = re.sub(r'parseFloat\(document\.getElementById\(\'neck\'\)\.value\)', "getMetricVal('neck')", content)
content = re.sub(r'parseFloat\(document\.getElementById\(\'hip\'\)\.value\)', "getMetricVal('hip')", content)

# 7. Replace writes (demo)
content = content.replace("document.getElementById('height').value = \"180\";", "setMetricValToInput('height', 180);")
content = content.replace("document.getElementById('weight').value = \"110\";", "setMetricValToInput('weight', 110);")
content = content.replace("document.getElementById('waist').value = \"112\";", "setMetricValToInput('waist', 112);")
content = content.replace("document.getElementById('neck').value = \"43\";", "setMetricValToInput('neck', 43);")
content = content.replace("document.getElementById('hip').value = \"118\";", "setMetricValToInput('hip', 118);")
# And the 170/100/104/38 combo:
content = content.replace("document.getElementById('height').value = \"170\";", "setMetricValToInput('height', 170);")
content = content.replace("document.getElementById('weight').value = \"100\";", "setMetricValToInput('weight', 100);")
content = content.replace("document.getElementById('waist').value = \"104\";", "setMetricValToInput('waist', 104);")
content = content.replace("document.getElementById('neck').value = \"38\";", "setMetricValToInput('neck', 38);")
content = content.replace("document.getElementById('hip').value = \"\";", "setMetricValToInput('hip', null);")

# 8. Replace writes (historyDB restores)
content = content.replace("document.getElementById('weight').value = historyDB[activeDateStr].calculated.weight;", "setMetricValToInput('weight', historyDB[activeDateStr].calculated.weight);")

# 9. Format outputs in paivitaLaskelmat
content = content.replace("document.getElementById('resLean').innerText = rMoor.toFixed(1);", """
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            document.getElementById('resLean').innerText = unit === 'imperial' ? (rMoor * 2.20462).toFixed(1) : rMoor.toFixed(1);
            if(document.getElementById('resLeanUnit')) document.getElementById('resLeanUnit').innerText = unit === 'imperial' ? 'lbs' : 'kg';
""")

content = content.replace("document.getElementById('resFatVolCombined').innerText = `${fatKg.toFixed(1)} kg (${fatLiters.toFixed(1)} ${lang === 'en' ? 'liters' : 'litraa'})`;", """
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            const fatKgOut = unit === 'imperial' ? (fatKg * 2.20462).toFixed(1) : fatKg.toFixed(1);
            const wUnit = unit === 'imperial' ? 'lbs' : 'kg';
            document.getElementById('resFatVolCombined').innerText = `${fatKgOut} ${wUnit} (${fatLiters.toFixed(1)} ${lang === 'en' ? 'liters' : 'litraa'})`;
""")

content = content.replace("document.getElementById('resWeeklyTarget').innerText = wkKg.toFixed(2);", """
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            document.getElementById('resWeeklyTarget').innerText = unit === 'imperial' ? (wkKg * 2.20462).toFixed(2) : wkKg.toFixed(2);
            if(document.getElementById('resWeeklyTargetUnit')) document.getElementById('resWeeklyTargetUnit').innerText = (unit === 'imperial' ? 'lbs' : 'kg') + '/wk';
""")
# Wait, let's check if the above is correct string.
# Ah, I don't see `document.getElementById('resWeeklyTarget').innerText = wkKg.toFixed(2);` in the file.
