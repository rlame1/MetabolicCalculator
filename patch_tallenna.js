function tallennaKayttajaParametrit(triggerSync = true) {
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
        }
