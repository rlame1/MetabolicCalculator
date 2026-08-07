with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# I will replace `            if (unit === 'imperial') {` with `            const unit = document.getElementById('unitSelect')?.value || 'metric';\n            if (unit === 'imperial') {`
content = content.replace("            if (unit === 'imperial') {", "            const unit = document.getElementById('unitSelect')?.value || 'metric';\n            if (unit === 'imperial') {")

# But wait, did I remove it from paivitaLaskelmat too? Let's check:
content = content.replace("""
            document.getElementById('resLean').innerText = unit === 'imperial' ? (rMoor * 2.20462).toFixed(1) : rMoor.toFixed(1);""", """
            const unitObj1 = document.getElementById('unitSelect')?.value || 'metric';
            document.getElementById('resLean').innerText = unitObj1 === 'imperial' ? (rMoor * 2.20462).toFixed(1) : rMoor.toFixed(1);""")

content = content.replace("""
            const fatKgOut = unit === 'imperial' ? (fatKg * 2.20462).toFixed(1) : fatKg.toFixed(1);
            const wUnit = unit === 'imperial' ? 'lbs' : 'kg';""", """
            const unitObj2 = document.getElementById('unitSelect')?.value || 'metric';
            const fatKgOut = unitObj2 === 'imperial' ? (fatKg * 2.20462).toFixed(1) : fatKg.toFixed(1);
            const wUnit = unitObj2 === 'imperial' ? 'lbs' : 'kg';""")


with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
