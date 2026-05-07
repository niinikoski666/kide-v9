# ⚛ KIDE v9 - Planeettajärjestelmän älykäs vastausjärjestelmä

Tervetuloa **KIDE v9:n** maailmaan! Tämä on futuristinen, oppiva vastausjärjestelmä, jossa 50 eri planeettaa antaa vastauksia omalla ainutlaatuisella tyylillään.

## 🌍 Mitä on KIDE v9?

KIDE v9 on interaktiivinen sovellus, jossa voit:
- Valita 50 eri planeetan joukosta
- Esittää kysymyksiä ja saada vastauksia **planeetan omalla tyylillä**
- Antaa palautetta vastausten laadusta
- Seurata, miten planeetan tyyli kehittyy oppimisen kautta

## 🚀 Aloitus

1. **Avaa `index.html` selaimessasi**
2. Selain lataa sovelluksen automaattisesti
3. Valmis käyttöön!

Ei asennusta, ei palvelinta - puhdas **frontend-sovellus**.

## 🎮 Käyttöohje

### Perusvaiheet:
1. **Valitse planeetta** - Klikkaa vasemmalla olevista planeettapainikkeista
2. **Kirjoita teksti** - Kysymys tai mikä tahansa teksti
3. **Lähetä** - Paina "🚀 Lähetä" -painiketta
4. **Anna palaute** - Arvioi vastausta (❌ Huono / 😐 Ok / ✅ Hyvä)

### Pikavinkit:
- 🔍 **Haku** - Etsi planeettoja hakukentällä
- ⌨️ **Pikanäppäin** - Ctrl+Enter lähettää kysymyksen
- 📜 **Historia** - Viimeisimmät 10 kyselyä näkyvät oikealla
- 📊 **Tilastot** - Näe kuinka monta planeettaa ja kyselyä olet käyttänyt

## 🌟 50 Planeettaa

Jokainen planeetta edustaa eri rotuyksiköitä ja tyylillä vastausta:

| Planeetta | Rotu | Tyyli | Symboli |
|-----------|------|-------|---------|
| **VULPERRA** | Kettukansa | Nokkela | 🦊 |
| **URGON** | Karhukansa | Syvä | 🐻 |
| **LUMORA** | Jääkristallit | Kylmä logiikka | ❄ |
| **PYRAXIS** | Tuliliskot | Tulinen | 🔥 |
| **AERILUNE** | Tuulihaltiat | Runollinen | 🌬 |
| **KORVAX** | Metallirobotit | Tekninen | ⚙ |
| **MIRELLA** | Sammakot | Hauska | 🐸 |
| **THORNWELL** | Piikkisiilit | Sarkastinen | 🦔 |
| ... ja 42 muuta! | ... | ... | ... |

### Täydellinen lista:
- VULPERRA (clever)
- URGON (deep)
- LUMORA (coldLogic)
- PYRAXIS (fiery)
- AERILUNE (poetic)
- KORVAX (technical)
- MIRELLA (funny)
- THORNWELL (sarcastic)
- SOLARION (bright)
- NOXARIA (darkPhilosophy)
- DRAVENOR (dragonWisdom)
- QUILLEN (academic)
- GLOOMROOT (riddle)
- ZERKON (heavy)
- FLAREMIST (dreamy)
- TINKERIA (practical)
- VYREX (warning)
- ORBELLION (prophetic)
- HARMONIA (rhythmic)
- RUSTFALL (harsh)
- BLOOMERA (gentle)
- FROSTMAW (military)
- ETHERION (abstract)
- MOLTAR (explosive)
- SKYREND (strategic)
- NIMBRIA (soft)
- RAVENHOLD (omen)
- GEARFORGE (engineered)
- LURKSWAMP (suspicious)
- STARWEAVE (cosmic)
- EMBERFALL (melancholic)
- GLITTERMOOR (playful)
- IRONVAULT (disciplined)
- WISPERIA (whisper)
- THUNDERMAW (thunder)
- SANDREACH (storyteller)
- VORTEXIA (chaotic)
- LUNARIS (intuitive)
- BRAMBLETON (winding)
- OBSIDIAN (coldTruth)
- AURAFLOW (emotional)
- FERALDUSK (instinct)
- MINDREACH (direct)
- RIFTWALK (alternate)
- CINDERSPORE (burst)
- HOLLOWVALE (hollow)
- SKYGLINT (prism)
- ROOTWELL (nature)
- FROSTWING (icy)
- ASTRYON (shaman)

## 🧠 Oppimismekanismi

Jokainen planeetta alkaa **neutraalit tekijällä 1.0**. Kun annat palautetta:

### Palautteet:
- **✅ Hyvä** (+1) → Kerroin nousee
- **😐 Ok** (0) → Kerroin pysyy
- **❌ Huono** (-1) → Kerroin laskee

### Kerroin-asteikko:
- **0.2 - 1.1**: Normaali vastaus
- **1.1 - 2.0**: "tyyli vahvistettu x1.5" (esimerkki)
- **2.0 - 3.0**: `VASTAUS BOOST x2.8` (KIRJAIMET ISONA)

Kerroin vaihtelee **0.2 - 3.0** välillä.

## 🎨 Käyttöliittymä

### Värit:
- **Pohja**: Musta (#0a0a0a)
- **Teksti**: Violetti (#b19cd9)
- **Korostukset**: Kirkkaampi violetti (#c084fc, #7c3aed)
- **Painikkeet**: Neon-violetti (#7c3aed) hover-efektillä

### Layout:
```
┌─────────────────────────────────────────┐
│           ⚛ KIDE v9                    │
│   Planeettajärjestelmän älykäs          │
│   vastausjärjestelmä                    │
└─────────────────────────────────────────┘

┌──────────────────┬──────────────────────┐
│                  │                      │
│  🌍 Planeetan    │  💬 Vastaus &        │
│  valinta         │  Oppiminen           │
│                  │                      │
│  • Hakutoiminto  │  • Vastauslaatikko   │
│  • 50 painiketta │  • Palautepainikkeet │
│  • Syöttökenttä  │  • Historia          │
│  • Lähetä-nappi  │  • Tilastot          │
│                  │                      │
└──────────────────┴──────────────────────┘
```

## 🔧 Tekniset tiedot

### Tiedostot:
- **index.html** - Käyttöliittymä (HTML + CSS)
- **app.js** - Logiikka ja vuorovaikutus
- **README.md** - Tämä dokumentaatio

### Teknologia:
- Pure HTML5 + CSS3
- Vanilla JavaScript (ES6+)
- Responsive design (toimii pöytäkoneilla ja mobiileilla)
- LocalStorage-pohjainen historia

### Tietovirtaus:
```
Käyttäjä
    ↓
[Valitse planeetta] + [Kirjoita teksti]
    ↓
app.js → answerQuestion()
    ↓
applyStyle() + learn[]
    ↓
[Näytä vastaus]
    ↓
[Anna palaute]
    ↓
giveFeedback() → päivitä kerroin
```

## 💾 Data

### Sovelluksen tila (`kideState`):
```javascript
{
  planets: [],              // 50 planeettaa
  styleFuncs: {},          // 50 tyylifunktiota
  learn: {},               // Kerroimen arvot (1.0-3.0)
  history: [],             // Viimeiset 200 kyselyä
  selectedPlanet: null,    // Valittu planeetta
  lastAnswerIndex: null    // Viimeisen vastauksen indeksi
}
```

### Kyselyjen rakenne:
```javascript
{
  planet: "VULPERRA",
  input: "Miten oppia nopeasti?",
  output: "🦊 Nokkela: Miten oppia nopeasti?",
  feedback: 1  // -1, 0, tai 1
}
```

## 🌐 Selainyhteensopivuus

- ✅ Chrome/Chromium (uusin)
- ✅ Firefox (uusin)
- ✅ Safari (uusin)
- ✅ Edge (uusin)
- ✅ Mobiiliselaimet

## 📝 Esimerkkejä

### Esimerkki 1: Nokkea vastaus
```
Planeetta: VULPERRA
Teksti: "Mikä on paras tapa oppia?"
Vastaus: "🦊 Nokkela: Mikä on paras tapa oppia?"
```

### Esimerkki 2: Oppiminen
```
Planeetta: VULPERRA
1. käyttö: kerroin 1.0 (normaali)
2. käyttö: palaute ✅ → kerroin 1.2
3. käyttö: palaute ✅ → kerroin 1.4
...
10. käyttö: kerroin 2.5 → "VASTAUS BOOST x2.5"
```

## 🎯 Tulevaisuuden ominaisuudet

- [ ] LocalStorage persistent data
- [ ] Planeetan tietokortti (klikkaa planeetan nimeä)
- [ ] Tilastograafiikka
- [ ] Palaute-animaatiot
- [ ] Ääniohjaus (voice input)
- [ ] Monikielinen käyttöliittymä
- [ ] API-rajapinta

## 📄 Lisenssi

MIT License - Vapaa käyttöön ja muokkaamiseen

## 👨‍💻 Tekijä

Luotu **GitHub Copilotilla** 2026

---

**Tervetuloa KIDE v9:n maailmaan!** 🌌✨

Lähde: https://github.com/niinikoski666/kide-v9
