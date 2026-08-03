# 🔒 Tietosuojaseloste / Privacy Policy

**Metabolic Calculator v1.0**  
*Viimeksi päivitetty / Last updated: 2026-08-03*

---

## 🇫🇮 Suomeksi: Tietosuojaseloste

### 1. Yleistä ja Rekisterinpitäjä
Metabolic Calculator v1.0 ("Sovellus") on selaimessa toimiva paikallinen laskuri- ja seurantatyökalu. Sovellus on suunniteltu noudattamaan tiukinta mahdollista tietosuojaperiaatetta ("Privacy by Design").

### 2. Käsiteltävät Tiedot
Sovellus käsittelee vain käyttäjän itse syöttämiä toiminnallisia tietoja:
- **Kehon ja aineenvaihdunnan parametrit:** Sukupuoli, ikä, pituus, paino, vyötärö, niska, lantio, aktiivisuustaso ja tavoite.
- **Aterialogit ja ravitsemustiedot:** Ateria-ajat, hiilihydraatit, proteiinit, rasvat sekä näistä lasketut päivittäiset verensokeri- (GL) ja insuliinivasteet.
- **Sovellusasetukset:** Kielen ja käyttöliittymän asetukset.
- **Google Drive -synkronointi:** Varmuuskopiodata (`historyDB` ja `userParams`). Sovellus **ei pyydä eikä käsittele** käyttäjän nimeä, sähköpostiosoitetta, profiilikuvaa tai muita henkilötietoja.

### 3. Tietojen Tallennus ja Sijainti
- **Ensisijainen tallennus:** Kaikki syötetyt tiedot tallennetaan yksinomaan käyttäjän omaan selaimeen (`localStorage`). Tiedot eivät koskaan siirry kehittäjän tai kolmansien osapuolten palvelimille.
- **Ei seurantaa:** Sovelluksessa ei käytetä seurantaevästeitä, mainostunnisteita eikä minkäänlaista kolmannen osapuolen analytiikkaa (esim. Google Analytics).

### 4. Google Drive -automaattisynkronointi
Jos käyttäjä päättää ottaa käyttöön Google Drive -synkronoinnin:
- **Tiukin käyttöoikeus (Minimum Scope):** Sovellus pyytää Google OAuth 2.0 -tunnistautumisessa ainoastaan rajoitetun `https://www.googleapis.com/auth/drive.file` -käyttöoikeuden. Sovellus **ei pyydä** profiili- tai sähköpostiosoiteoikeuksia (`email`, `profile`, `openid`).
- **Tiedostokohtainen rajaus:** `drive.file`-oikeus antaa sovellukselle pääsyn **vain ja ainoastaan** niihin tiedostoihin, jotka tämä sovellus itse luo (`metabolic_calculator_backup.json` kansiossa `Metabolic Calculator Backups`). Sovelluksella **ei ole mitään pääsyä** käyttäjän muihin Google Driven tiedostoihin, kansioihin tai dokumentteihin.
- **Suora yhteys:** Synkronointikutsut suoritetaan suoraan käyttäjän selaimesta Googles virallisiin API-rajapintoihin ilman välitettäviä taustapalvelimia.

### 5. Tietojen Poistaminen ja Hallinta
Käyttäjällä on täysi kontrolli tietoihinsa:
- Kaikki paikalliset tiedot voidaan tyhjentää milloin tahansa sovelluksen asetuksista kohdasta **"⚠️ NOLLAA KAIKKI TIEDOT (MASTER RESET)"**.
- Google Drivessä oleva varmuuskopio voidaan poistaa milloin tahansa suoraan omasta Google Drivestä.
- Google-tilin käyttöoikeudet voidaan peruuttaa milloin tahansa osoitteessa [myaccount.google.com/permissions](https://myaccount.google.com/permissions).

---

## 🇬🇧 In English: Privacy Policy

### 1. General & Data Controller
Metabolic Calculator v1.0 ("Application") is a browser-based local tracking tool built strictly adhering to the **Privacy by Design** principle.

### 2. Data Processed
The application processes only user-entered functional data:
- **Body and Metabolic Metrics:** Gender, age, height, weight, waist, neck, hip measurements, activity level, and goals.
- **Meal Logs & Nutrition:** Recorded meal timestamps, macronutrients (carbs, protein, fat), and derived 24h glycemic/insulin response curves.
- **App Settings:** Language preferences and UI options.
- **Google Drive Sync Data:** Backup payload (`historyDB` and `userParams`). The application **does not request or process** the user's name, email, profile picture, or personal identity details.

### 3. Data Storage & Privacy
- **Primary Storage:** All data is stored purely locally within the user's web browser (`localStorage`). No data is ever transmitted to external servers or third parties.
- **Zero Tracking:** The application uses no tracking cookies, ad IDs, or third-party analytics services (e.g. Google Analytics).

### 4. Google Drive Auto-Sync
If the user chooses to enable Google Drive synchronization:
- **Minimum Required Scope:** The app requests exclusively the `https://www.googleapis.com/auth/drive.file` scope. The app **does not request** identity scopes (`email`, `profile`, `openid`).
- **Strict File Isolation:** The `drive.file` scope restricts the app's access **exclusively** to files created by this application (`metabolic_calculator_backup.json` inside `Metabolic Calculator Backups`). The app **has zero access** to any other files or folders in your Google Drive.
- **Direct Client-to-Cloud Connection:** Synchronization requests occur directly between the user's browser and official Google Drive APIs without intermediary servers.

### 5. Data Control & Deletion
Users retain total control over their data:
- Local browser data can be completely cleared at any time using the **"⚠️ MASTER RESET (CLEAR ALL DATA)"** button in the app settings.
- Google Drive backups can be deleted at any time directly from the user's Google Drive storage.
- Google OAuth permissions can be revoked at any time via [myaccount.google.com/permissions](https://myaccount.google.com/permissions).
