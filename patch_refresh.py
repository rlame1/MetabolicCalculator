import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

old_reset_section = """        <div style="border-top: 1px dashed #ff0000; padding-top: 12px; margin-top: 15px;">
            <p style="font-size: 11px; color: #ff8888; margin-bottom: 8px;" data-i18n="masterResetDesc">Tyhjennä laskurin koko muisti (kaikki tallennetut päivät ja profiilitiedot).</p>
            <button class="btn-master-reset" onclick="nollaaKaikkiTiedot()" data-i18n="masterResetBtn">⚠️ NOLLAA KAIKKI TIEDOT (MASTER RESET)</button>
        </div>"""

new_reset_section = """        <div style="border-top: 1px dashed #ff0000; padding-top: 12px; margin-top: 15px;">
            <p style="font-size: 11px; color: #ff8888; margin-bottom: 8px;" data-i18n="masterResetDesc">Tyhjennä laskurin koko muisti (kaikki tallennetut päivät ja profiilitiedot).</p>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <button class="btn-master-reset" style="flex: 1; min-width: 200px;" onclick="nollaaKaikkiTiedot()" data-i18n="masterResetBtn">⚠️ NOLLAA KAIKKI TIEDOT (MASTER RESET)</button>
                <button class="btn-backup" style="flex: 1; min-width: 200px; background: #333; border-color: #666; color: #fff;" onclick="forceAppRefresh()" data-i18n="forceRefreshBtn">🔄 PAKOTA SIVUN PÄIVITYS (FORCE REFRESH)</button>
            </div>
        </div>"""

if old_reset_section in content:
    content = content.replace(old_reset_section, new_reset_section)
else:
    print("WARNING: old_reset_section not found!")

script_append = """
        function forceAppRefresh() {
            window.location.href = window.location.href.split('?')[0] + '?t=' + new Date().getTime();
        }
"""

# Insert forceAppRefresh function before closing script tag of the main script block.
# Since the script block ends around line 3333, we'll use regex to insert it before the last `    </script>`.

if "function forceAppRefresh()" not in content:
    content = content.replace("    </script>\n</body>", script_append + "    </script>\n</body>")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

