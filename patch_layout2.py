import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_controls = """    <div class="top-controls-box">
        <div style="font-size: 16px; font-weight: bold; color: #fff;">Metabolic Calculator</div>
        <div style="display: flex; align-items: center; gap: 8px;">
            <div id="headerDriveBadge" style="font-size: 11px; color: #888; background: #000; border: 1px solid #333; padding: 5px 10px; border-radius: 4px; display: flex; align-items: center; gap: 6px; cursor: pointer;" onclick="toggleOptionsPanel();">
                ☁️ Drive: <span id="headerDriveStatusText">Ei kirjauduttu</span>
            </div>
            <button class="btn-options-toggle" onclick="toggleOptionsPanel()" data-i18n="optionsBtn">⚙️ ASETUKSET</button>
        </div>
    </div>"""

new_controls = """    <div class="top-controls-box" style="justify-content: center; position: relative;">
        <div id="headerDriveBadge" style="font-size: 11px; color: #888; background: #000; border: 1px solid #333; padding: 5px 10px; border-radius: 4px; display: flex; align-items: center; gap: 6px; cursor: pointer;" onclick="toggleOptionsPanel();">
            ☁️ Drive: <span id="headerDriveStatusText">Ei kirjauduttu</span>
        </div>
        <button class="btn-options-toggle" style="position: absolute; right: 15px;" onclick="toggleOptionsPanel()" data-i18n="optionsBtn">⚙️ ASETUKSET</button>
    </div>"""

if old_controls in content:
    content = content.replace(old_controls, new_controls)
else:
    print("WARNING: old_controls not found!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
