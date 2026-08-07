import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

fi_trans_old = """masterResetBtn: "⚠️ NOLLAA KAIKKI TIEDOT (MASTER RESET)","""
fi_trans_new = """masterResetBtn: "⚠️ NOLLAA KAIKKI TIEDOT (MASTER RESET)",
                forceRefreshBtn: "🔄 PAKOTA SIVUN PÄIVITYS (FORCE REFRESH)","""

en_trans_old = """masterResetBtn: "⚠️ RESET ALL DATA (MASTER RESET)","""
en_trans_new = """masterResetBtn: "⚠️ RESET ALL DATA (MASTER RESET)",
                forceRefreshBtn: "🔄 FORCE APP REFRESH (CLEAR CACHE)","""

if fi_trans_old in content:
    content = content.replace(fi_trans_old, fi_trans_new)
else:
    print("WARNING: fi_trans_old not found!")

if en_trans_old in content:
    content = content.replace(en_trans_old, en_trans_new)
else:
    print("WARNING: en_trans_old not found!")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

