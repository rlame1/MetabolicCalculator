with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

c1 = """
            if (totalCalorieSaldo > 0) {
                deficitTitle.innerHTML = lang === 'en' ? "⚠️ Accumulated calorie balance (<span class='alert-red'>surplus = weight gained</span>):" : "⚠️ Kertynyt kalorisaldo (<span class='alert-red'>plussalla = painoa tullut lisää</span>):";
                deficitEl.innerText = "+" + Math.round(totalCalorieSaldo);
                fatKgEl.innerText = "+" + fatKgVal.toFixed(2);
                fatLitersEl.innerText = "+" + fatLitersVal.toFixed(2);
                deficitEl.className = "alert-red";
                fatKgEl.className = "alert-red";
                fatLitersEl.className = "alert-red";
            } else if (totalCalorieSaldo < 0) {
                deficitTitle.innerHTML = lang === 'en' ? "🟢 Accumulated calorie balance (<span class='alert-green'>negative = weight lost</span>):" : "🟢 Kertynyt kalorisaldo (<span class='alert-green'>negatiivinen = laihduttu</span>):";
                deficitEl.innerText = Math.round(totalCalorieSaldo);
                fatKgEl.innerText = "-" + fatKgVal.toFixed(2);
                fatLitersEl.innerText = "-" + fatLitersVal.toFixed(2);
                deficitEl.className = "alert-green";
                fatKgEl.className = "alert-green";
                fatLitersEl.className = "alert-green";
            } else {
"""

c2 = """
            const unitType = document.getElementById('unitSelect')?.value || 'metric';
            const fbKgOut = unitType === 'imperial' ? (fatKgVal * 2.20462).toFixed(2) : fatKgVal.toFixed(2);
            if(document.getElementById('cumFatBurnedUnit')) document.getElementById('cumFatBurnedUnit').innerText = unitType === 'imperial' ? 'lbs' : 'kg';

            if (totalCalorieSaldo > 0) {
                deficitTitle.innerHTML = lang === 'en' ? "⚠️ Accumulated calorie balance (<span class='alert-red'>surplus = weight gained</span>):" : "⚠️ Kertynyt kalorisaldo (<span class='alert-red'>plussalla = painoa tullut lisää</span>):";
                deficitEl.innerText = "+" + Math.round(totalCalorieSaldo);
                fatKgEl.innerText = "+" + fbKgOut;
                fatLitersEl.innerText = "+" + fatLitersVal.toFixed(2);
                deficitEl.className = "alert-red";
                fatKgEl.className = "alert-red";
                fatLitersEl.className = "alert-red";
            } else if (totalCalorieSaldo < 0) {
                deficitTitle.innerHTML = lang === 'en' ? "🟢 Accumulated calorie balance (<span class='alert-green'>negative = weight lost</span>):" : "🟢 Kertynyt kalorisaldo (<span class='alert-green'>negatiivinen = laihduttu</span>):";
                deficitEl.innerText = Math.round(totalCalorieSaldo);
                fatKgEl.innerText = "-" + fbKgOut;
                fatLitersEl.innerText = "-" + fatLitersVal.toFixed(2);
                deficitEl.className = "alert-green";
                fatKgEl.className = "alert-green";
                fatLitersEl.className = "alert-green";
            } else {
"""

content = content.replace(c1.strip(), c2.strip())
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
