import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

tallenna_old = """        function tallennaKayttajaParametrit(triggerSync = true) {
            paivitaLaskettuRasvaprosenttiKenttaan();
            if (isDemoMode) return; 
            const params = {
                gender: document.getElementById('gender').value,
                age: document.getElementById('age').value,
                height: document.getElementById('height').value,
                weight: document.getElementById('weight').value,
                waist: document.getElementById('waist').value,
                neck: document.getElementById('neck').value,
                hip: document.getElementById('hip').value,
                bodyFat: document.getElementById('bodyFat')?.value || '',
                activityLevel: document.getElementById('activityLevel').value,
                strategyGoal: document.getElementById('strategyGoal').value,
                customCalorieDelta: document.getElementById('customCalorieDelta').value
            };
            localStorage.setItem('metabolic_v20_userParams', JSON.stringify(params));
            localStorage.setItem('metabolic_v20_lastUpdate', new Date().toISOString());
            if (triggerSync && window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
        }"""

tallenna_new = """        function tallennaKayttajaParametrit(triggerSync = true) {
            paivitaLaskettuRasvaprosenttiKenttaan();
            if (isDemoMode) return; 
            const params = {
                gender: document.getElementById('gender').value,
                age: document.getElementById('age').value,
                height: document.getElementById('height').value,
                weight: document.getElementById('weight').value,
                waist: document.getElementById('waist').value,
                neck: document.getElementById('neck').value,
                hip: document.getElementById('hip').value,
                bodyFat: document.getElementById('bodyFat')?.value || '',
                activityLevel: document.getElementById('activityLevel').value,
                strategyGoal: document.getElementById('strategyGoal').value,
                customCalorieDelta: document.getElementById('customCalorieDelta').value
            };
            const oldParamsStr = localStorage.getItem('metabolic_v20_userParams');
            const newParamsStr = JSON.stringify(params);
            
            if (oldParamsStr !== newParamsStr) {
                localStorage.setItem('metabolic_v20_userParams', newParamsStr);
                localStorage.setItem('metabolic_v20_lastUpdate', new Date().toISOString());
                if (triggerSync && window.triggerAutoSyncToDrive) window.triggerAutoSyncToDrive();
            }
        }"""

content = content.replace(tallenna_old, tallenna_new)

yhdista_old = """            const localParams = localPayload.userParams || {};
            const driveParams = drivePayload.userParams || {};
            const mergedParams = (localExportedAt >= driveExportedAt)
                ? { ...driveParams, ...localParams }
                : { ...localParams, ...driveParams };

            const mergedPayload = {"""

yhdista_new = """            const localParams = localPayload.userParams || {};
            const driveParams = drivePayload.userParams || {};
            const strLocalParams = JSON.stringify(localParams);
            const strDriveParams = JSON.stringify(driveParams);
            let mergedParams;
            
            if (strLocalParams !== strDriveParams) {
                if (localExportedAt > driveExportedAt) {
                    mergedParams = { ...driveParams, ...localParams };
                    driveUpdated = true;
                } else {
                    mergedParams = { ...localParams, ...driveParams };
                    localUpdated = true;
                }
            } else {
                mergedParams = { ...localParams };
            }

            const mergedPayload = {"""

content = content.replace(yhdista_old, yhdista_new)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)
