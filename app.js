// ═══════════════════════════════════════════════════════════
// KIDE v9 - MASTER ENGINE
// Planeettajärjestelmän älykäs vastausjärjestelmä
// ═══════════════════════════════════════════════════════════

const PLANETS = [
  {"name":"VULPERRA","race":"Kettukansa","style":"clever","color":"#C77DFF"},
  {"name":"URGON","race":"Karhukansa","style":"deep","color":"#9D4EDD"},
  {"name":"LUMORA","race":"Jääkristallit","style":"coldLogic","color":"#A0C4FF"},
  {"name":"PYRAXIS","race":"Tuliliskot","style":"fiery","color":"#FF6D00"},
  {"name":"AERILUNE","race":"Tuulihaltiat","style":"poetic","color":"#BDE0FE"},
  {"name":"KORVAX","race":"Metallirobotit","style":"technical","color":"#6C757D"},
  {"name":"MIRELLA","race":"Sammakot","style":"funny","color":"#80ED99"},
  {"name":"THORNWELL","race":"Piikkisiilit","style":"sarcastic","color":"#6A040F"},
  {"name":"SOLARION","race":"Valokansa","style":"bright","color":"#FFD60A"},
  {"name":"NOXARIA","race":"Varjokansa","style":"darkPhilosophy","color":"#1A1A1A"},
  {"name":"DRAVENOR","race":"Lohikäärmeet","style":"dragonWisdom","color":"#D00000"},
  {"name":"QUILLEN","race":"Lintutietäjät","style":"academic","color":"#74C0FC"},
  {"name":"GLOOMROOT","race":"Sienet","style":"riddle","color":"#495057"},
  {"name":"ZERKON","race":"Kivijätit","style":"heavy","color":"#343A40"},
  {"name":"FLAREMIST","race":"Höyryhenget","style":"dreamy","color":"#E0AFA0"},
  {"name":"TINKERIA","race":"Mekaanikot","style":"practical","color":"#FFB703"},
  {"name":"VYREX","race":"Myrkkyliskot","style":"warning","color":"#6A040F"},
  {"name":"ORBELLION","race":"Kristallipallot","style":"prophetic","color":"#ADE8F4"},
  {"name":"HARMONIA","race":"Laulukansa","style":"rhythmic","color":"#FFAFCC"},
  {"name":"RUSTFALL","race":"Ruostekansa","style":"harsh","color":"#7F5539"},
  {"name":"BLOOMERA","race":"Kukkaisväki","style":"gentle","color":"#C8E6C9"},
  {"name":"FROSTMAW","race":"Jääkarhut","style":"military","color":"#CAF0F8"},
  {"name":"ETHERION","race":"Eetterihenget","style":"abstract","color":"#E0FBFC"},
  {"name":"MOLTAR","race":"Sulakivi","style":"explosive","color":"#FF5400"},
  {"name":"SKYREND","race":"Kotkat","style":"strategic","color":"#90E0EF"},
  {"name":"NIMBRIA","race":"Pilvikansa","style":"soft","color":"#DEE2FF"},
  {"name":"RAVENHOLD","race":"Korpit","style":"omen","color":"#212529"},
  {"name":"GEARFORGE","race":"Kääpiömekaanikot","style":"engineered","color":"#6C757D"},
  {"name":"LURKSWAMP","race":"Suokäärmeet","style":"suspicious","color":"#2D6A4F"},
  {"name":"STARWEAVE","race":"Tähtikudonta","style":"cosmic","color":"#B5179E"},
  {"name":"EMBERFALL","race":"Tuhkakansa","style":"melancholic","color":"#6C757D"},
  {"name":"GLITTERMOOR","race":"Keijut","style":"playful","color":"#FFC8DD"},
  {"name":"IRONVAULT","race":"Panssarikansa","style":"disciplined","color":"#495057"},
  {"name":"WISPERIA","race":"Kuiskijat","style":"whisper","color":"#CED4DA"},
  {"name":"THUNDERMAW","race":"Ukkosolennot","style":"thunder","color":"#F72585"},
  {"name":"SANDREACH","race":"Hiekkavaeltajat","style":"storyteller","color":"#E9C46A"},
  {"name":"VORTEXIA","race":"Pyörrekansa","style":"chaotic","color":"#7209B7"},
  {"name":"LUNARIS","race":"Kuunvalo","style":"intuitive","color":"#B5E48C"},
  {"name":"BRAMBLETON","race":"Pensaskansa","style":"winding","color":"#6A994E"},
  {"name":"OBSIDIAN","race":"Mustakivi","style":"coldTruth","color":"#000000"},
  {"name":"AURAFLOW","race":"Energiaväki","style":"emotional","color":"#FF70A6"},
  {"name":"FERALDUSK","race":"Villikissat","style":"instinct","color":"#D62828"},
  {"name":"MINDREACH","race":"Telepaatit","style":"direct","color":"#56CFE1"},
  {"name":"RIFTWALK","race":"Ulottuvuushyppääjät","style":"alternate","color":"#6930C3"},
  {"name":"CINDERSPORE","race":"Tulisienet","style":"burst","color":"#FF4D6D"},
  {"name":"HOLLOWVALE","race":"Onttokansa","style":"hollow","color":"#ADB5BD"},
  {"name":"SKYGLINT","race":"Prismakansa","style":"prism","color":"#4CC9F0"},
  {"name":"ROOTWELL","race":"Puukansa","style":"nature","color":"#2B9348"},
  {"name":"FROSTWING","race":"Jääsiivet","style":"icy","color":"#ADE8F4"},
  {"name":"ASTRYON","race":"Tähtisudet","style":"shaman","color":"#9D4EDD"}
];

const STYLE_FUNCTIONS = {
  "clever":      t => "🦊 Nokkela: " + t,
  "deep":        t => "🐻 Syvä ja vakaa: " + t,
  "coldLogic":   t => "❄ Kylmä logiikka: " + t,
  "fiery":       t => "🔥 Tulinen: " + t,
  "poetic":      t => "🌬 Runollinen: " + t,
  "technical":   t => "⚙ Tekninen: " + t,
  "funny":       t => "🐸 Hauska: " + t,
  "sarcastic":   t => "🦔 Sarkastinen: " + t,
  "bright":      t => "☀ Valon sävy: " + t,
  "darkPhilosophy": t => "🌑 Varjojen filosofia: " + t,
  "dragonWisdom": t => "🐲 Lohikäärmeen viisaus: " + t,
  "academic":    t => "📚 Akateeminen: " + t,
  "riddle":      t => "🍄 Arvoitus: " + t,
  "heavy":       t => "🪨 Raskas totuus: " + t,
  "dreamy":      t => "🌫 Unenomainen: " + t,
  "practical":   t => "🔧 Käytännön ratkaisu: " + t,
  "warning":     t => "☠ Varoitus: " + t,
  "prophetic":   t => "🔮 Ennustus: " + t,
  "rhythmic":    t => "🎵 Rytmi: " + t,
  "harsh":       t => "🪓 Karu totuus: " + t,
  "gentle":      t => "🌸 Lempeä: " + t,
  "military":    t => "🎖 Sotilaallinen: " + t,
  "abstract":    t => "🌀 Abstrakti: " + t,
  "explosive":   t => "💥 Räjähtävä: " + t,
  "strategic":   t => "🦅 Strateginen: " + t,
  "soft":        t => "☁ Pehmeä: " + t,
  "omen":        t => "🕯 Pahaenteinen: " + t,
  "engineered":  t => "🏗 Rakennettu: " + t,
  "suspicious":  t => "🐍 Epäluuloinen: " + t,
  "cosmic":      t => "✨ Kosminen: " + t,
  "melancholic": t => "🕳 Melankolia: " + t,
  "playful":     t => "🧚 Leikkisä: " + t,
  "disciplined": t => "🛡 Kurinalainen: " + t,
  "whisper":     t => "🤫 Kuiskaus: " + t,
  "thunder":     t => "⚡ Ukkonen: " + t,
  "storyteller": t => "📖 Tarina: " + t,
  "chaotic":     t => "🌪 Kaaos: " + t,
  "intuitive":   t => "🌙 Intuitio: " + t,
  "winding":     t => "🌿 Kiertävä: " + t,
  "coldTruth":   t => "🧊 Kylmä totuus: " + t,
  "emotional":   t => "💗 Tunne: " + t,
  "instinct":    t => "🐈 Vaisto: " + t,
  "direct":      t => "🎯 Suora: " + t,
  "alternate":   t => "🌀 Vaihtoehtoinen todellisuus: " + t,
  "burst":       t => "💣 PAM: " + t,
  "hollow":      t => "🕳 Ontto kaiku: " + t,
  "prism":       t => "🔷 Moninäkökulma: " + t,
  "nature":      t => "🌲 Luonnon viisaus: " + t,
  "icy":         t => "❄ Jääanalyysi: " + t,
  "shaman":      t => "🧙‍♂ Shamaanin näkemys: " + t
};

// ═══════════════════════════════════════════════════════════
// SOVELLUKSEN TILA
// ═══════════════════════════════════════════════════════════

let kideState = {
  planets: PLANETS,
  styleFuncs: STYLE_FUNCTIONS,
  learn: {},
  history: [],
  selectedPlanet: null,
  lastAnswerIndex: null
};

// Alusta oppiminen
function initLearning() {
  PLANETS.forEach(p => {
    kideState.learn[p.name] = 1.0;
  });
}

// ═══════════════════════════════════════════════════════════
// YDINLOGIIKKA
// ═══════════════════════════════════════════════════════════

function findPlanet(name) {
  return PLANETS.find(p => p.name.toUpperCase() === name.toUpperCase()) || PLANETS[0];
}

function applyStyle(planet, text, learn) {
  const style = planet.style;
  const f = STYLE_FUNCTIONS[style] || (x => x);
  const factor = learn[planet.name] || 1.0;
  let base = f(text);

  if (factor <= 1.1) {
    return base;
  } else if (factor <= 2.0) {
    return `${base} (tyyli vahvistettu x${factor.toFixed(1)})`;
  } else {
    return `${base.toUpperCase()} [OPPIVA BOOST x${factor.toFixed(1)}]`;
  }
}

function answerQuestion(planetName, userText) {
  const planet = findPlanet(planetName);
  const out = applyStyle(planet, userText, kideState.learn);
  
  const entry = {
    planet: planetName,
    input: userText,
    output: out,
    feedback: 0
  };
  
  kideState.history.push(entry);
  kideState.lastAnswerIndex = kideState.history.length - 1;
  
  if (kideState.history.length > 200) {
    kideState.history.shift();
  }
  
  return out;
}

function giveFeedback(planetName, score) {
  if (!(planetName in kideState.learn)) {
    return;
  }
  
  kideState.learn[planetName] += score * 0.2;
  
  if (kideState.learn[planetName] < 0.2) {
    kideState.learn[planetName] = 0.2;
  }
  if (kideState.learn[planetName] > 3.0) {
    kideState.learn[planetName] = 3.0;
  }
  
  // Päivitä historia
  if (kideState.lastAnswerIndex !== null) {
    kideState.history[kideState.lastAnswerIndex].feedback = score;
  }
}

// ═══════════════════════════════════════════════════════════
// KÄYTTÖLIITTYMÄN HALLINTA
// ═══════════════════════════════════════════════════════════

function initUI() {
  renderPlanetsList("");
  initLearning();
  updateStats();
}

function renderPlanetsList(searchTerm) {
  const planetsList = document.getElementById("planetsList");
  planetsList.innerHTML = "";
  
  const filtered = PLANETS.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  filtered.forEach(planet => {
    const btn = document.createElement("button");
    btn.className = "planet-btn";
    if (kideState.selectedPlanet === planet.name) {
      btn.classList.add("active");
    }
    btn.innerHTML = `<strong>${planet.name}</strong><br><small>${planet.race}</small>`;
    btn.onclick = () => selectPlanet(planet.name);
    planetsList.appendChild(btn);
  });
}

function selectPlanet(planetName) {
  kideState.selectedPlanet = planetName;
  renderPlanetsList(document.getElementById("planetSearch").value);
}

function sendQuestion() {
  if (!kideState.selectedPlanet) {
    alert("Valitse ensin planeetta!");
    return;
  }
  
  const userInput = document.getElementById("userInput").value.trim();
  if (!userInput) {
    alert("Kirjoita kysymys tai teksti!");
    return;
  }
  
  const answer = answerQuestion(kideState.selectedPlanet, userInput);
  
  const answerBox = document.getElementById("answerBox");
  answerBox.innerHTML = answer;
  answerBox.classList.add("new");
  setTimeout(() => answerBox.classList.remove("new"), 300);
  
  document.getElementById("feedbackGroup").style.display = "block";
  document.getElementById("userInput").value = "";
  
  updateStats();
  renderHistory();
}

function giveFeedback(score) {
  if (kideState.selectedPlanet) {
    giveFeedback(kideState.selectedPlanet, score);
    renderHistory();
    updateStats();
    
    const msg = score === 1 ? "✅ Kiitos!" : score === 0 ? "😐 OK" : "❌ Ymmärretty";
    alert(msg);
  }
}

function updateStats() {
  const uniquePlanets = new Set(kideState.history.map(h => h.planet)).size;
  document.getElementById("usedCount").textContent = uniquePlanets;
  document.getElementById("queryCount").textContent = kideState.history.length;
}

function renderHistory() {
  const historyArea = document.getElementById("historyArea");
  historyArea.innerHTML = "";
  
  const recent = kideState.history.slice(-10).reverse();
  
  recent.forEach(item => {
    const div = document.createElement("div");
    div.className = "history-item";
    
    let feedbackText = "";
    if (item.feedback === 1) feedbackText = "✅ Hyvä";
    else if (item.feedback === -1) feedbackText = "❌ Huono";
    else if (item.feedback === 0) feedbackText = "😐 Ok";
    
    div.innerHTML = `
      <div><span class="planet-name">${item.planet}</span></div>
      <div style="color: #a78bfa; margin-top: 5px;">"${item.input.substring(0, 50)}..."</div>
      ${feedbackText ? `<div class="feedback-score">${feedbackText}</div>` : ""}
    `;
    
    historyArea.appendChild(div);
  });
}

// ═══════════════════════════════════════════════════════════
// HAKUTOIMINNALLISUUS
// ═══════════════════════════════════════════════════════════

document.addEventListener("DOMContentLoaded", () => {
  initUI();
  
  document.getElementById("planetSearch").addEventListener("input", (e) => {
    renderPlanetsList(e.target.value);
  });
  
  document.getElementById("userInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter" && e.ctrlKey) {
      sendQuestion();
    }
  });
});
