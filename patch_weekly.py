import re
with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace("document.getElementById('resWeeklyTarget').innerText = wkKg.toFixed(2);", """
            const unitObj = document.getElementById('unitSelect')?.value || 'metric';
            document.getElementById('resWeeklyTarget').innerText = unitObj === 'imperial' ? (wkKg * 2.20462).toFixed(2) : wkKg.toFixed(2);
            if(document.getElementById('resWeeklyTargetUnit')) document.getElementById('resWeeklyTargetUnit').innerText = (unitObj === 'imperial' ? 'lbs' : 'kg') + '/wk';
""")

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
