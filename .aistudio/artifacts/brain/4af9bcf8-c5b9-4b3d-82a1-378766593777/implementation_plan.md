# Metabolisen Laskurin Virheiden Korjaus ja Tavoitepainoseuranta

Tämä päivitys korjaa koodikatselmuksessa valitut käyttöliittymä- ja käännösvirheet sekä tuo mukaan uuden valinnaisen **tavoitepainon** ja **tavoitepainoon vaadittavan jäljellä olevan kalorivajeen/ylityksen** seurannan kumulatiiviseen historiayhteenvetoon sekä Google Drive -synkronointiin.

## User Review & Critical Decisions

> [!IMPORTANT]
> Tarkista alla olevat vahvistetut valinnat sekä tavoitepainon laskentalogiikka ennen toteutusta.

- **Vahvistetut virhekorjaukset**:
  1. Toteutetaan puuttuva `toggleInfoPopup`-funktio, jotta ohjelaatikot avautuvat ja sulkeutuvat ilman JavaScript-virheitä.
  2. Lisätään käyttöliittymästä puuttuneet autofagian tilanäyttö (`resAutophagyStatus`) sekä autofagia- ja proteiini-infopaneelit (`fastingInfoBox`, `proteinInfoBox`), joille koodissa ja käännöksissä on jo valmiit tekstit.
  3. Korjataan 24h-kuvaajan kirjoitusvirhe (`KYNNSYSTASO` ➔ `KYNNYSTASO`) ja poistetaan `translations.fi`-objektin päällekkäiset avaimet (`demoSelectLabel`).
- **Vahvistettu uusi toiminnallisuus (Tavoitepaino & Kaloreita poltettavana)**:
  - **2. TAVOITE / KULUTUS -osioon** lisätään valinnainen kenttä **Tavoitepaino [Vapaaehtoinen]** (tukee automaattisesti yksikkövalintaa `kg` / `lbs` sekä tallennusta ja Google Drive -synkronointia aikaleimalla).
  - **KUMULATIIVINEN HISTORIAYHTEENVETO -osioon** lisätään uusi rivi, joka näyttää tavoitepainon, matkan tavoitteeseen (`kg`/`lbs` ja rasvalitroina/kvartseina) sekä **paljonko kaloreita on vielä kulutettava (poltettava)** tavoitepainon saavuttamiseksi (`7 700 kcal / kg` -energiavakion perusteella).

---

## 1. Overview & Core Concept

- **Mitä päivitys tekee**: Korjaa sovelluksen interaktiiviset tietolaatikot ja täydentää tulososion puuttuvat fysiologiset indikaattorit. Lisää käyttäjälle konkreettisen pitkän aikavälin kiintopisteen: valinnaisen tavoitepainon ja reaaliaikaisen laskurin siitä, kuinka monta kilokaloria tavoitepainon saavuttamiseen on vielä poltettava.
- **Kohdekäyttäjä**: Laskurin käyttäjä, joka seuraa päivittäistä energiavajetta, paastoikkunoita ja kumulatiivista edistymistä kohti selkeää painotavoitetta.
- **Keskeinen hyöty**: Yhdistää nykyisen painon, valitun viikkotavoitteen ja kumulatiivisen kalorisaldon suoraan jäljellä olevaan urakkaan (kcal ja kg/litraa), ja pitää tavoitepainon synkronoituna laitteiden välillä.

---

## 2. User Experience & Visual Design

- **Käyttäjäpolku (Tavoitepaino & Kumulatiivinen seuranta)**:
  1. Käyttäjä avaa osion **2. TAVOITE / KULUTUS** ja syöttää halutessaan arvon kenttään *Tavoitepaino (kg/lbs) [Vapaaehtoinen]*.
  2. Jos kenttä jätetään tyhjäksi, kumulatiivisen yhteenvedon tavoitepainorivi pysyy piilotettuna tai ilmoittaa siististi, ettei tavoitepainoa ole asetettu.
  3. Kun tavoitepaino ja nykyinen paino on syötetty, **📊 KUMULATIIVINEN HISTORIAYHTEENVETO** näyttää selkeän tilarivin:
     - **Painonpudotustavoite** (`nykyinen paino > tavoitepaino`): Näyttää jäljellä olevan pudotuksen (`kg` / `lbs` sekä rasvatilavuuden `litraa` / `kvartsia`), **Kaloreita poltettavana tavoitepainoon: X kcal** sekä arvioidun keston nykyisellä tavoitevauhdilla tai toteutuneella keskiarvolla.
     - **Tavoite saavutettu** (`nykyinen paino <= tavoitepaino`): Näyttää vihreän vahvistuksen tavoitteen saavuttamisesta (`0 kcal poltettavana`).
- **Käyttäjäpolku (Info-laatikot ja Autofagia-status)**:
  1. Osion **5. LAHJOMATON TASE & ANALYTIIKKA** kohdissa *Lihasmassan suojaus*, *Paastoikkuna* ja *Rasvanpolttoikkuna* näkyy `?`-infopainike.
  2. Painikkeen napsauttaminen avaa tai sulkee kyseisen osion selityslaatikon (`toggleInfoPopup`).
  3. *Paastoikkuna*-osiossa näkyy nyt myös **Autofagian statusvaste** värikoodattuna (Anabolinen / Peruspaasto / Aktiivinen autofagia / Syvä autofagia).
- **Visuaalinen ilme ja teema**:
  - *Estetiikka*: Säilytetään sovelluksen tarkka, korkean kontrastin tieteellis-terminaalinen (biotech/telemetry) tumma ulkoasu (`#000000` tausta, `#0a0a0a` paneelit, `1px` kehysviivat).
  - *Väripaletti*: Pääkorostus `#00ff00` (fosforinvihreä), huomiovärit `#ffff00` (keltainen), `#ff8800` (oranssi), `#00ffff` (syaani) ja `#ff4444` (punainen).
  - *Typografia*: Tietokentät ja numeeriset mittarit noudattavat kiinteäleveyksistä `Courier New`, monospace -asettelua, jotta lukemat ja yksiköt (`kcal`, `kg`, `litraa`) pysyvät täsmällisesti linjassa.

---

## 3. Key Product Decisions & Trade-Offs

- **Päätös 1: Tavoitepainoon jäljellä olevien kalorien laskentaperuste**
  - *Valittu ratkaisu*: Jäljellä oleva poltettava kalorimäärä lasketaan ensisijaisesti nykyisen painon ja tavoitepainon erotuksesta kaavalla `(Nykyinen paino kg − Tavoitepaino kg) × 7 700 kcal/kg`. Lisäksi jos käyttäjällä on kertynyttä kalorisaldoa eikä painoa ole vielä päivitetty, näytetään selkeästi yhteys kertyneeseen kalorisaldoon.
  - *Miksi*: `7 700 kcal / kg` on jo käytössä muualla laskurissa (sekä viikkotavoitteissa että kumulatiivisessa rasvanpolttolaskennassa), joten luvut ovat 100 % yhdenmukaisia koko sovelluksessa.
- **Päätös 2: Tavoitepainon yksikkömuunnos ja Google Drive -synkronointi**
  - *Valittu ratkaisu*: Tavoitepaino tallennetaan sisäisesti metrisenä (`kg`, attribuutilla `data-metric`), aivan kuten nykyinen paino, ja sille tallennetaan oma `targetWeightUpdatedAt`-aikaleima.
  - *Miksi*: Mahdollistaa saumattoman vaihdon `Metric (kg)` ja `Imperial (lbs)` -yksiköiden välillä ilman pyöristysvirheitä sekä luotettavan yhdistämisen eri laitteiden välillä Google Drive -synkronoinnissa.

---

## 4. Technical Architecture & Data Strategy

### Arkkitehtuuri- ja komponenttikaavio

```
┌───────────────────────────────────────────────────────────────────────────┐
│                        KÄYTTÄJÄPARAMETRIT & TILA                          │
│  userParams: { weight, targetWeight, targetWeightUpdatedAt,               │
│                activityLevel, strategyGoal, customCalorieDelta, ... }     │
└───────────────────┬───────────────────────────────────┬───────────────────┘
                    │                                   │
                    ▼                                   ▼
┌───────────────────────────────────────┐ ┌─────────────────────────────────┐
│     2. TAVOITE / KULUTUS (Syöte)      │ │   GOOGLE DRIVE & VARMUUSKOPIO   │
│  • Aktiivisuustaso                    │ │  • validoiJaKorjaaDatanKoherenssi│
│  • Strateginen tavoite                │ │  • sovitaTavoitepaino (Merge)   │
│  • Tavoitepaino [Vapaaehtoinen] (UUSI)│ │  • Automaattisynkronointi       │
└───────────────────┬───────────────────┘ └─────────────────────────────────┘
                    │
                    ▼
┌───────────────────────────────────────────────────────────────────────────┐
│                   LASKENTAMOOTTORI & ANALYTIIKKA                          │
│  • paivitaKumulatiivinenYhteenveto()                                      │
│    └─ Laskee: (weight - targetWeight) * 7700 kcal & rasvatilavuuden       │
│  • lisaaAnnosV20() / paivitaLaskelmat()                                   │
│    └─ Päivittää: Proteiini-info, Autofagia-status & 24h-kuvaaja           │
│  • toggleInfoPopup(id)                                                    │
│    └─ Avaa/sulkee: insulinInfoBox, proteinInfoBox, fastingInfoBox         │
└───────────────────┬───────────────────────────────────┬───────────────────┘
                    │                                   │
                    ▼                                   ▼
┌───────────────────────────────────────┐ ┌─────────────────────────────────┐
│  📊 KUMULATIIVINEN HISTORIAYHTEENVETO │ │ 5. LAHJOMATON TASE & ANALYTIIKKA│
│  • Kertynyt kalorisaldo               │ │  • Proteiini + ? Info-laatikko  │
│  • Tavoitepaino & Kaloreita           │ │  • Paastoikkuna + Autofagia + ? │
│    poltettavana tavoitteeseen (UUSI)  │ │  • Insuliini + ? + 24h-kuvaaja  │
└───────────────────────────────────────┘ └─────────────────────────────────┘
```

### Tietomalli ja tilanhallinta
- **`userParams`-laajennus**:
  - `targetWeight`: Valinnainen numeerinen arvo (kg, tallennetaan metrisenä, tyhjä jos ei asetettu).
  - `targetWeightUpdatedAt`: ISO-aikaleima, joka päivittyy kun käyttäjä muuttaa tavoitepainoa.
- **Yksikkömuunnoksen tuki (`metric` / `imperial`)**:
  - `targetWeight` liitetään osaksi `getMetricVal`- ja `setMetricValToInput`-funktioiden painokenttien logiikkaa (`id === 'weight' || id === 'targetWeight'`), jolloin `lbs` ↔ `kg` -muunnos toimii identtisesti nykyisen painon kanssa.

### Interaktiivisten komponenttien ja tilan kytkentä
1. **Tavoitepainokentän syöte (`#targetWeight`)**:
   - Kutsuu `oninput`-tapahtumassa `paivitaMittaKentta(this); tallennaKayttajaParametrit(); paivitaKumulatiivinenYhteenveto();`.
   - Jos kenttä tyhjennetään, `targetWeight` tallentuu tyhjänä (`""`), aikaleima päivittyy, ja kumulatiivisen seurannan tavoitepainorivi piilotetaan.
2. **Kumulatiivinen tavoitepainolaskenta (`paivitaKumulatiivinenYhteenveto`)**:
   - Lukee nykyisen painon (`weight`) ja tavoitepainon (`targetWeight`).
   - Kun `targetWeight > 0` ja `weight > 0`:
     - Laskee painoeron `diffKg = weight - targetWeight` ja kaloritarpeen `kcalRemaining = Math.round(Math.abs(diffKg) * 7700)`.
     - Jos `diffKg > 0` (painonpudotus): näyttää jäljellä olevan pudotettavan painon (`kg`/`lbs` ja rasvalitrat/kvartsit) sekä tekstin **Kaloreita poltettavana tavoitepainoon: X kcal**.
     - Jos `diffKg < 0` (painonnosto): näyttää jäljellä olevan kaloritarpeen tavoitepainoon.
     - Jos `diffKg <= 0.05 && diffKg >= -0.05`: ilmoittaa tavoitepainon saavutetuksi (`0 kcal`).
3. **Info-laatikoiden ja autofagian tilanäyttö**:
   - `toggleInfoPopup(id)` vaihtaa kohde-elementin `.active`-luokkaa (CSS:ssä `.info-popup-panel.active { display: block; }` on jo valmiina).
   - Lisätään `#proteinInfoBox` proteiiniosioon ja `#resAutophagyStatus` + `#fastingInfoBox` paastoikkunaosioon sekä sidotaan ne `vaihdaKieli()`-käännöksiin.
