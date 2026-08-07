import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

top_controls_old = """    <div class="top-controls-box">
        <div style="display: flex; align-items: center; gap: 8px;">
            
            <label for="unitSelect" style="margin:0; font-size:13px; color:#fff;" data-i18n="unitLabel">📏 YKSIKÖT:</label>
            <select id="unitSelect" onchange="switchUnits(this.value)" style="width: auto; padding: 6px; margin:0; font-size: 13px;">
                <option value="metric" selected>Metric (KG/CM)</option>
                <option value="imperial">Imperial (LBS/IN)</option>
            </select>

            <label for="langSelect" style="margin:0; font-size:13px; color:#fff;" data-i18n="langLabel">🌐 KIELI:</label>
            <select id="langSelect" onchange="switchLanguage(this.value)" style="width: auto; padding: 6px; margin:0; font-size: 13px;">
                <option value="fi" selected>Suomi</option>
                <option value="en">English</option>
            </select>
        </div>
        <div id="headerDriveBadge" style="font-size: 11px; color: #888; background: #000; border: 1px solid #333; padding: 5px 10px; border-radius: 4px; display: flex; align-items: center; gap: 6px; cursor: pointer;" onclick="toggleOptionsPanel();">
            ☁️ Drive: <span id="headerDriveStatusText">Ei kirjauduttu</span>
        </div>
        <button class="btn-options-toggle" onclick="toggleOptionsPanel()" data-i18n="optionsBtn">⚙️ ASETUKSET</button>
    </div>"""

top_controls_new = """    <div class="top-controls-box">
        <div style="font-size: 16px; font-weight: bold; color: #fff;">Metabolic Calculator</div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <div id="headerDriveBadge" style="font-size: 11px; color: #888; background: #000; border: 1px solid #333; padding: 5px 10px; border-radius: 4px; display: flex; align-items: center; gap: 6px; cursor: pointer;" onclick="toggleOptionsPanel();">
                ☁️ Drive: <span id="headerDriveStatusText">Ei kirjauduttu</span>
            </div>
            <button class="btn-options-toggle" onclick="toggleOptionsPanel()" data-i18n="optionsBtn">⚙️ ASETUKSET</button>
        </div>
    </div>"""

options_panel_old = """    <div id="optionsPanel" class="options-panel">
        <h3 style="color: #ff00ff; border-color: #ff00ff; margin-top: 0; padding-bottom: 6px; font-size: 14px;" data-i18n="optionsTitle">⚙️ LISÄASETUKSET JA HALLINTA</h3>
        
        <div style="margin-bottom: 15px;">
            <button id="demoBtn" class="btn-demo" onclick="toggleDemoMode()" data-i18n="demoBtnOn">🎭 KÄYNNISTÄ ESITTELYTILA (DEMO)</button>"""

options_panel_new = """    <div id="optionsPanel" class="options-panel">
        <h3 style="color: #ff00ff; border-color: #ff00ff; margin-top: 0; padding-bottom: 6px; font-size: 14px;" data-i18n="optionsTitle">⚙️ LISÄASETUKSET JA HALLINTA</h3>
        
        <div style="margin-bottom: 15px; display: flex; flex-wrap: wrap; gap: 15px;">
            <div style="display: flex; align-items: center; gap: 8px;">
                <label for="unitSelect" style="margin:0; font-size:13px; color:#fff;" data-i18n="unitLabel">📏 YKSIKÖT:</label>
                <select id="unitSelect" onchange="switchUnits(this.value)" style="width: auto; padding: 6px; margin:0; font-size: 13px;">
                    <option value="metric">Metric (KG/CM)</option>
                    <option value="imperial">Imperial (LBS/IN)</option>
                </select>
            </div>
            <div style="display: flex; align-items: center; gap: 8px;">
                <label for="langSelect" style="margin:0; font-size:13px; color:#fff;" data-i18n="langLabel">🌐 KIELI:</label>
                <select id="langSelect" onchange="switchLanguage(this.value)" style="width: auto; padding: 6px; margin:0; font-size: 13px;">
                    <option value="fi">Suomi</option>
                    <option value="en">English</option>
                </select>
            </div>
        </div>
        
        <div style="margin-bottom: 15px;">
            <button id="demoBtn" class="btn-demo" onclick="toggleDemoMode()" data-i18n="demoBtnOn">🎭 KÄYNNISTÄ ESITTELYTILA (DEMO)</button>"""

if top_controls_old in content:
    content = content.replace(top_controls_old, top_controls_new)
else:
    print("WARNING: top-controls-box old content not found!")

if options_panel_old in content:
    content = content.replace(options_panel_old, options_panel_new)
else:
    print("WARNING: optionsPanel old content not found!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
