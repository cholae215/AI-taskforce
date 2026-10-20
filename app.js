/**
 * AI TASKFORCE — Interactive Application Logic (app.js)
 * Implements interactive demo widgets, token streaming engine,
 * live latency visualizer, and accessibility features.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initBilingualWidget();
  initRealtimeVisualizer();
  initPrivacyControls();
  initPlayground();
  initNewsletter();
  initScrollSpy();
});

/* ===================================================================
   1. Mobile Menu Drawer
   =================================================================== */
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobileToggle');
  const menu = document.getElementById('mobileMenu');
  if (!toggleBtn || !menu) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });

  // Close on link click
  const links = menu.querySelectorAll('.mobile-link, a');
  links.forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      menu.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    }
  });
}

/* ===================================================================
   2. Bilingual & Contextual LLM Interactive Widget
   =================================================================== */
function initBilingualWidget() {
  const container = document.getElementById('bilingualPreview');
  const chips = document.querySelectorAll('.lang-chip');
  if (!container || !chips.length) return;

  const demoTranslations = {
    en: `"System: Provide preventive community medical guidance with cultural context."\n\nAI Output: "Prioritize boiled drinking water, integrate locally fermented legumes for gut immunity, and limit strenuous agricultural labor during peak solar hours (11:00 - 14:00)."`,
    es: `"Sistema: Proporcionar orientación médica preventiva con contexto comunitario."\n\nAI Output: "Priorice el agua hervida potable, aproveche las legumbres y hortalizas locales para la inmunidad y evite la exposición solar intensa en horas centrales del día."`,
    my: `"စနစ်- ဒေသတွင်း အလေ့အထနှင့် ကိုက်ညီသော ကျန်းမာရေး အကြံပြုချက်များ ပေးပါ။"\n\nAI Output: "ဆူပွက်အောင် ကျိုချက်ထားသော ရေကို အဓိက သောက်သုံးပါ။ ရိုးရာ ပဲပုပ်နှင့် အာဟာရပြည့် ဒေသထွက် ဟင်းသီးဟင်းရွက်များကို မျှတစွာစားသုံးပြီး နေပြင်းချိန် (၁၁ နာရီမှ ၂ နာရီ) ပြင်းထန်သော အလုပ်များကို လျှော့ချပါ။"`,
    sw: `"Mfumo: Toa mwongozo wa afya wa kuzuia magonjwa kulingana na mazingira ya kienyeji."\n\nAI Output: "Zingatia maji safi yaliyochemshwa, tumia vyakula vya asili vya kunde kwa ajili ya afya bora, na epuka kazi ngumu za shamba wakati wa jua kali la mchana."`
  };

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');

      const lang = chip.getAttribute('data-lang');
      container.style.opacity = '0.4';
      setTimeout(() => {
        container.textContent = demoTranslations[lang] || demoTranslations.en;
        container.style.opacity = '1';
      }, 140);
    });
  });
}

/* ===================================================================
   3. Real-Time Latency Waveform & Ping Visualizer
   =================================================================== */
function initRealtimeVisualizer() {
  const waveformBox = document.getElementById('waveformBox');
  const pingCounter = document.getElementById('livePingCounter');
  const heroPing = document.getElementById('heroPingVal');
  if (!waveformBox) return;

  // Generate 24 dynamic bars
  const totalBars = 24;
  const bars = [];
  waveformBox.innerHTML = '';

  for (let i = 0; i < totalBars; i++) {
    const bar = document.createElement('div');
    bar.className = 'wave-bar';
    bar.style.height = `${Math.floor(Math.random() * 70) + 15}%`;
    waveformBox.appendChild(bar);
    bars.push(bar);
  }

  // Animate bars continuously
  setInterval(() => {
    bars.forEach((bar) => {
      const height = Math.floor(Math.random() * 80) + 12;
      bar.style.height = `${height}%`;
    });
  }, 160);

  // Fluctuating realistic low latency ping
  setInterval(() => {
    const randomPing = (11.4 + Math.random() * 2.8).toFixed(1);
    if (pingCounter) {
      pingCounter.textContent = `${randomPing} ms TTFT`;
    }
    if (heroPing) {
      heroPing.textContent = `< ${Math.ceil(parseFloat(randomPing))}`;
    }
  }, 1800);
}

/* ===================================================================
   4. Privacy-First Governance Controls
   =================================================================== */
function initPrivacyControls() {
  const airgap = document.getElementById('toggleAirgap');
  const retention = document.getElementById('toggleRetention');
  const masking = document.getElementById('toggleMasking');
  const statusText = document.getElementById('privacyStatusText');
  if (!airgap || !retention || !masking || !statusText) return;

  function updateStatus() {
    const isAirgap = airgap.checked;
    const isZdr = retention.checked;
    const isMask = masking.checked;

    if (isAirgap && isZdr && isMask) {
      statusText.textContent = 'STATUS: Sovereign Fortress (Air-Gapped + ZDR + DP Masking)';
      statusText.style.color = 'var(--brand-emerald-glow)';
    } else if (isAirgap && isZdr) {
      statusText.textContent = 'STATUS: Maximum Security Boundary (Air-Gapped + ZDR)';
      statusText.style.color = 'var(--brand-emerald-glow)';
    } else if (isAirgap) {
      statusText.textContent = 'STATUS: Air-Gapped Mode (On-Premise Isolated)';
      statusText.style.color = 'var(--accent-cyan)';
    } else if (isZdr) {
      statusText.textContent = 'STATUS: Ephemeral Memory (Zero Data Retention Active)';
      statusText.style.color = 'var(--brand-indigo-light)';
    } else {
      statusText.textContent = 'STATUS: Standard Cloud Pipeline (Audit Logs Enabled)';
      statusText.style.color = 'var(--text-secondary)';
    }
  }

  airgap.addEventListener('change', updateStatus);
  retention.addEventListener('change', updateStatus);
  masking.addEventListener('change', updateStatus);
}

/* ===================================================================
   5. Interactive Model Playground Engine
   =================================================================== */
function initPlayground() {
  const promptInput = document.getElementById('promptInput');
  const charCounter = document.getElementById('charCounter');
  const btnRun = document.getElementById('btnRunInference');
  const outputConsole = document.getElementById('outputConsole');
  const presetChips = document.querySelectorAll('.preset-chip');
  const modelSelect = document.getElementById('modelSelect');
  const metricTokens = document.getElementById('metricTokens');
  const metricSpeed = document.getElementById('metricSpeed');
  const metricTTFT = document.getElementById('metricTTFT');
  const btnCopy = document.getElementById('btnCopyOutput');
  const copyLabel = document.getElementById('copyLabel');
  const terminalStatus = document.getElementById('terminalStatus');

  if (!promptInput || !btnRun || !outputConsole) return;

  // Track character count
  function updateCharCount() {
    const len = promptInput.value.length;
    if (charCounter) charCounter.textContent = `${len} chars`;
  }
  promptInput.addEventListener('input', updateCharCount);
  updateCharCount();

  // Preset chips handling
  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const promptText = chip.getAttribute('data-prompt');
      if (promptText) {
        promptInput.value = promptText;
        updateCharCount();
        runStreamingInference(promptText);
      }
    });
  });

  // Pre-configured simulated model responses
  const responses = {
    burmeseHealth: [
      "[Taskforce-v1-Multilingual | Context: Rural Healthcare Advisory]",
      "----------------------------------------------------------------",
      "Analysis:",
      "Target community: Magway & Dry Zone rural clusters.",
      "Cultural adaptation: Substitute temperate ingredients with local sesame, tamarind, and chickpea flours.",
      "",
      "Generated Local Output (မြန်မာဘာသာ အကြံပြုချက်):",
      "၁။ ရာသီဥတုပူပြင်းချိန်တွင် ခန္ဓာကိုယ်ရေဓာတ်မဆုံးရှုံးစေရန် ရေဆူအေးနှင့် သဘာဝမန်ကျည်းဖျော်ရည် သောက်သုံးပေးပါ။",
      "၂။ အစာကြေလွယ်ပြီး အာဟာရပြည့်ဝစေရန် ပဲနီလေးဟင်းနှင့် ဒေသထွက် ပဲပုပ်ကို ပုံမှန်စားသုံးပါ။",
      "၃။ မွန်းတည့် ၁၂:၀၀ မှ ညနေ ၃:၀၀ အတွင်း ပြင်းထန်သော လယ်ယာလုပ်ငန်းများတွင် အရိပ်ခို၍ အနားယူပါ။",
      "",
      "✓ Cryptographic Boundary: Validated Local Zero-Retention Node",
      "✓ Latency to first token: 13.2ms"
    ],
    legalPrivacy: [
      "[Taskforce-Sovereign-MoE | Air-Gapped Privacy Protocol]",
      "----------------------------------------------------------------",
      "Auditing Contract Stream against Local Governance Rules...",
      "",
      "1. PII Redaction: Detected 4 tax IDs and 2 banking IBANs. Automatically sanitized with SHA-256 tokens.",
      "2. Retention Clause: 'Vendor shall store diagnostic records for 30 days.'",
      "   → Flagged as Non-Compliant with Zero-Retention Policy §4.2.",
      "3. Recommendation:",
      "   Amend Section 9.1 to require ephemeral in-memory processing with verifiable end-of-session cryptographic purge.",
      "",
      "Status: Air-gap verified. Zero artifacts transmitted outside local host enclave."
    ],
    agritech: [
      "[Taskforce-Edge-Quantized | Community Dispatch Matrix]",
      "----------------------------------------------------------------",
      "Weather telemetry: 32°C, 68% relative humidity, approaching monsoon front.",
      "",
      "Actionable Farm Dispatch:",
      "• Sesame & Groundnut: Recommended harvesting window within the next 48 hours to avoid rain spoilage.",
      "• Regional Wholesale Index: Lentils +4.2% across local township depots.",
      "• Pest Advisory: Monitor lower leaves for stem rot due to anticipated humidity surge.",
      "",
      "Broadcast payload packaged in SMS-ready 160-character localized bundles."
    ],
    fallback: [
      "[Taskforce Inference Engine Response]",
      "----------------------------------------------------------------",
      "Synthesizing customized contextual prompt...",
      "",
      "The AI Taskforce architecture has processed your prompt within a secure local container.",
      "Key benefits observed:",
      "• Zero transmission of raw prompt data to centralized commercial APIs.",
      "• Domain-specific weights preserved contextual nuance with zero drift.",
      "• Sub-15ms initial token latency achieved with 4-bit edge quantization.",
      "",
      "Ready for enterprise edge deployment and offline on-premise integration."
    ]
  };

  let streamingTimer = null;
  let isStreaming = false;

  function runStreamingInference(customPrompt) {
    if (isStreaming) return;
    isStreaming = true;

    btnRun.disabled = true;
    btnRun.innerHTML = `
      <span class="pulse-dot" style="width: 6px; height: 6px;"></span>
      <span>Generating...</span>
    `;

    if (terminalStatus) terminalStatus.textContent = 'Cluster: Generating...';
    if (metricTTFT) metricTTFT.textContent = 'TTFT: ~13ms';

    outputConsole.innerHTML = '';
    const cursor = document.createElement('span');
    cursor.className = 'streaming-cursor';
    outputConsole.appendChild(cursor);

    // Pick response based on prompt text
    const text = (customPrompt || promptInput.value || '').toLowerCase();
    let chosenLines = responses.fallback;
    if (text.includes('burmese') || text.includes('health') || text.includes('dietary')) {
      chosenLines = responses.burmeseHealth;
    } else if (text.includes('privacy') || text.includes('contract') || text.includes('legal')) {
      chosenLines = responses.legalPrivacy;
    } else if (text.includes('agri') || text.includes('market') || text.includes('weather')) {
      chosenLines = responses.agritech;
    }

    const fullText = chosenLines.join('\n');
    const words = fullText.split(' ');
    let wordIndex = 0;
    let tokenCount = 0;
    const startTime = performance.now();

    streamingTimer = setInterval(() => {
      if (wordIndex < words.length) {
        // Append 1-2 words per tick
        const nextWords = words.slice(wordIndex, wordIndex + 2).join(' ') + ' ';
        wordIndex += 2;
        tokenCount += 3;

        // Insert before the cursor
        cursor.insertAdjacentText('beforebegin', nextWords);
        outputConsole.scrollTop = outputConsole.scrollHeight;

        // Update live metrics
        const elapsedSec = (performance.now() - startTime) / 1000;
        const currentSpeed = Math.round(tokenCount / Math.max(elapsedSec, 0.1));
        if (metricTokens) metricTokens.textContent = `Tokens: ${tokenCount}`;
        if (metricSpeed) metricSpeed.textContent = `Speed: ${currentSpeed} t/s`;
      } else {
        // Complete
        clearInterval(streamingTimer);
        streamingTimer = null;
        cursor.remove();
        isStreaming = false;

        btnRun.disabled = false;
        btnRun.innerHTML = `
          <span>Run Inference</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polygon points="5 3 19 12 5 21 5 3"></polygon>
          </svg>
        `;

        if (terminalStatus) terminalStatus.textContent = 'Cluster: Ready';
      }
    }, 45);
  }

  btnRun.addEventListener('click', () => {
    runStreamingInference(promptInput.value);
  });

  // Copy to clipboard
  if (btnCopy) {
    btnCopy.addEventListener('click', async () => {
      const textToCopy = outputConsole.innerText;
      if (!textToCopy || textToCopy.includes('Click "Run Inference"')) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = copyLabel.textContent;
        copyLabel.textContent = 'Copied!';
        btnCopy.style.borderColor = 'var(--brand-emerald)';
        setTimeout(() => {
          copyLabel.textContent = originalText;
          btnCopy.style.borderColor = '';
        }, 1800);
      } catch (err) {
        console.error('Clipboard copy failed:', err);
      }
    });
  }

  // Model switch feedback
  if (modelSelect) {
    modelSelect.addEventListener('change', () => {
      const selected = modelSelect.options[modelSelect.selectedIndex].text;
      if (terminalStatus) {
        terminalStatus.textContent = `Loaded: ${selected.split(' ')[0]}`;
        setTimeout(() => {
          terminalStatus.textContent = 'Cluster: Ready';
        }, 1400);
      }
    });
  }
}

/* ===================================================================
   6. Newsletter & Early Access Form
   =================================================================== */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  const emailInput = document.getElementById('newsletterEmail');
  const toast = document.getElementById('newsletterToast');
  if (!form || !emailInput || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value.trim();
    if (!email) return;

    // Simulated API submission
    toast.style.display = 'block';
    toast.style.opacity = '1';
    emailInput.value = '';

    setTimeout(() => {
      toast.style.opacity = '0';
      setTimeout(() => {
        toast.style.display = 'none';
      }, 400);
    }, 4000);
  });
}

/* ===================================================================
   7. ScrollSpy Active Nav Link Tracker
   =================================================================== */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links .nav-link');
  if (!sections.length || !navLinks.length) return;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      const id = sec.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  });
}
