with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("const isEn = lang === 'en';", "const unit = document.getElementById('unitSelect')?.value || 'metric';\n            const isEn = lang === 'en';")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
