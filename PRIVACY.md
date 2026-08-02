# 🔒 Tietosuojaseloste / Privacy Policy

**Metabolic Calculator v1.0**  
*Viimeksi päivitetty / Last updated: 2026-08-02*

---

## 🇫🇮 Suomeksi: Tietosuojaseloste

### 1. Yleistä ja Rekisterinpitäjä
Metabolic Calculator v1.0 ("Sovellus") on selaimessa toimiva paikallinen laskuri- ja seurantatypografia-työkalu. Sovellusta kehittää ja ylläpitää HVA2026. 

Sovellus on suunniteltu noudattamaan tiukinta mahdollista tietosuojaperiaatetta ("Privacy by Design").

### 2. Käsiteltävät Tiedot
Sovellus käsittelee vain käyttäjän itse syöttämiä tietoja:
- Biologiset parametrit (sukupuoli, ikä, pituus, paino, vyötärö, niska, lantio, aktiivisuustaso, tavoite)
- Aterialogit (ateria-ajat, hiilihydraatit, proteiinit, rasvat)
- Kielen ja sovelluksen asetukset

### 3. Tietojen Tallennus ja Sijainti
- **Ensisijainen tallennus:** Kaikki syötetyt tiedot tallennetaan yksinomaan käyttäjän omaan selaimeen (`localStorage`). Tiedot eivät koskaan siirry kehittäjän tai kolmansien osapuolten palvelimille.
- **Ei seurantaa:** Sovelluksessa ei käytetä seurantaevästeitä, mainostunnisteita eikä minkäänlaista kolmannen osapuolen analytiikkaa (esim. Google Analytics).

### 4. Google Drive -automaattisynkronointi
Jos käyttäjä päättää ottaa käyttöön Google Drive -synkronoinnin:
- **Suppea käyttöoikeus (Limited Scope):** Sovellus pyytää Google OAuth 2.0 -tunnistautumisessa ainoastaan rajoitetun `https://www.googleapis.com/auth/drive.file` -käyttöoikeuden sekä perusprofiilitiedot (`userinfo.profile`, `userinfo.email`).
- **Tiedostokohtainen rajaus:** `drive.file`-oikeus antaa sovellukselle pääsyn **vain ja ainoastaan** niihin tiedostoihin, jotka tämä sovellus itse luo (`metabolic_calculator_backup.json` kansiossa `Metabolic Calculator Backups`). Sovelluksella **ei ole mitään pääsyä** käyttäjän muihin Google Driven tiedostoihin, kansioihin tai dokumentteihin.
- **Suora yhteys:** Synkronointikutsut suoritetaan suoraan käyttäjän selaimesta Googles virallisiin API-rajapintoihin ilman välittettäviä taustapalvelimia.

### 5. Tietojen Poistaminen ja Hallinta
Käyttäjällä on täysi kontrolli tietoihinsa:
- Kaikki paikalliset tiedot voidaan tyhjentää milloin tahansa sovelluksen asetuksista kohdasta **"⚠️ NOLLAA KAIKKI TIEDOT (MASTER RESET)"**.
- Google Drivessä oleva varmuuskopio voidaan poistaa milloin tahansa suoraan omasta Google Drivestä.
- Google-tilin käyttöoikeudet voidaan peruuttaa milloin tahansa osoitteessa [myaccount.google.com/permissions](https://myaccount.google.com/permissions).

---

## 🇬🇧 In English: Privacy Policy

### 1. General & Data Controller
Metabolic Calculator v1.0 ("Application") is a browser-based local tracking tool created and maintained by HVA2026.

The application is built adhering strictly to the **Privacy by Design** principle.

### 2. Data Processed
The application processes only user-entered information:
- Biological metrics (gender, age, height, weight, waist, neck, hip measurements, activity level, strategic goals)
- Meal entries (timestamps, carbohydrates, protein, fat)
- Language preferences and app settings

### 3. Data Storage & Privacy
- **Primary Storage:** All data is stored purely locally within the user's web browser (`localStorage`). No data is ever transmitted to external servers or third parties.
- **Zero Tracking:** The application uses no tracking cookies, ad IDs, or third-party analytics services (e.g. Google Analytics).

### 4. Google Drive Auto-Sync
If the user chooses to enable Google Drive synchronization:
- **Restricted OAuth Scope:** The app requests only the restricted `https://www.googleapis.com/auth/drive.file` scope along with basic identity profile scopes (`userinfo.profile`, `userinfo.email`).
- **Strict File Isolation:** The `drive.file` scope restricts the app's access **exclusively** to files created by this application (`metabolic_calculator_backup.json` inside `Metabolic Calculator Backups`). The app **has zero access** to any other files or folders in your Google Drive.
- **Direct Client-to-Cloud Connection:** Synchronization requests occur directly between the user's browser and official Google Drive APIs without intermediary servers.

### 5. Data Control & Deletion
Users retain total control over their data:
- Local browser data can be completely cleared at any time using the **"⚠️ MASTER RESET (CLEAR ALL DATA)"** button in the app settings.
- Google Drive backups can be deleted at any time directly from the user's Google Drive storage.
- Google OAuth permissions can be revoked at any time via [myaccount.google.com/permissions](https://myaccount.google.com/permissions).
