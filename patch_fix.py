import re
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Add unitSelect if not exists
if 'id="unitSelect"' not in content:
    unit_select = """
            <label for="unitSelect" style="margin:0; font-size:13px; color:#fff;" data-i18n="unitLabel">📏 YKSIKÖT:</label>
            <select id="unitSelect" onchange="switchUnits(this.value)" style="width: auto; padding: 6px; margin:0; font-size: 13px;">
                <option value="metric" selected>Metric (KG/CM)</option>
                <option value="imperial">Imperial (LBS/IN)</option>
            </select>
"""
    content = content.replace(
        '<label for="langSelect"',
        unit_select + '\n            <label for="langSelect"'
    )

if 'function getMetricVal' not in content:
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
            const unit = document.getElementById('unitSelect')?.value || 'metric';
            const lang = document.getElementById('langSelect')?.value || 'fi';
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
"""
    content = content.replace('        function detectInitialLanguage() {', helpers + '\n        function detectInitialLanguage() {')
    
    content = content.replace('            paivitaMuokkausUI();', '            paivitaMuokkausUI();\n            updateLabelsForUnits();')
    
    # Remove data-i18n and data-i18n-placeholder and add IDs
    content = re.sub(r'<label data-i18n="heightLabel">', '<label id="lblHeight">', content)
    content = re.sub(r'<label data-i18n="weightLabel">', '<label id="lblWeight">', content)
    content = re.sub(r'<label data-i18n="waistLabel">', '<label id="lblWaist">', content)
    content = re.sub(r'<label data-i18n="neckLabel">', '<label id="lblNeck">', content)
    content = re.sub(r'<label data-i18n="hipLabel">', '<label id="lblHip">', content)
    
    # Actually they are all <label data-i18n="...Label"> without IDs, let's fix
    content = content.replace('data-i18n="heightLabel"', 'id="lblHeight"')
    content = content.replace('data-i18n="weightLabel"', 'id="lblWeight"')
    content = content.replace('data-i18n="waistLabel"', 'id="lblWaist"')
    content = content.replace('data-i18n="neckLabel"', 'id="lblNeck"')
    content = content.replace('data-i18n="hipLabel"', 'id="lblHip"')
    
    content = re.sub(r'data-i18n-placeholder="[^"]+"', '', content)
    
    content = content.replace('<span id="resLean"></span> kg', '<span id="resLean"></span> <span id="resLeanUnit">kg</span>')
    content = content.replace('<span id="resWeeklyTarget"></span> kg/wk', '<span id="resWeeklyTarget"></span> <span id="resWeeklyTargetUnit">kg/wk</span>')
    content = content.replace('<span id="cumFatBurnedKg">0.00</span> kg', '<span id="cumFatBurnedKg">0.00</span> <span id="cumFatBurnedUnit">kg</span>')

    content = re.sub(r'parseFloat\(document\.getElementById\(\'height\'\)\.value\)', "getMetricVal('height')", content)
    content = re.sub(r'parseFloat\(document\.getElementById\(\'weight\'\)\.value\)', "getMetricVal('weight')", content)
    content = re.sub(r'parseFloat\(document\.getElementById\(\'waist\'\)\.value\)', "getMetricVal('waist')", content)
    content = re.sub(r'parseFloat\(document\.getElementById\(\'neck\'\)\.value\)', "getMetricVal('neck')", content)
    content = re.sub(r'parseFloat\(document\.getElementById\(\'hip\'\)\.value\)', "getMetricVal('hip')", content)

    content = content.replace("document.getElementById('height').value = \"180\";", "setMetricValToInput('height', 180);")
    content = content.replace("document.getElementById('weight').value = \"110\";", "setMetricValToInput('weight', 110);")
    content = content.replace("document.getElementById('waist').value = \"112\";", "setMetricValToInput('waist', 112);")
    content = content.replace("document.getElementById('neck').value = \"43\";", "setMetricValToInput('neck', 43);")
    content = content.replace("document.getElementById('hip').value = \"118\";", "setMetricValToInput('hip', 118);")
    
    content = content.replace("document.getElementById('height').value = \"170\";", "setMetricValToInput('height', 170);")
    content = content.replace("document.getElementById('weight').value = \"100\";", "setMetricValToInput('weight', 100);")
    content = content.replace("document.getElementById('waist').value = \"104\";", "setMetricValToInput('waist', 104);")
    content = content.replace("document.getElementById('neck').value = \"38\";", "setMetricValToInput('neck', 38);")
    content = content.replace("document.getElementById('hip').value = \"\";", "setMetricValToInput('hip', null);")

    content = content.replace("document.getElementById('weight').value = historyDB[activeDateStr].calculated.weight;", "setMetricValToInput('weight', historyDB[activeDateStr].calculated.weight);")

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

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
