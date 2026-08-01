// ---------- Mobile menu ----------
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
    menuBtn.setAttribute('aria-expanded', String(!expanded));
  });
}

// ---------- Count-up stats ----------
function animateCount(el) {
  const target = parseInt(el.dataset.count, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1400;
  const start = performance.now();
  function tick(now) {
    const progress = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counters = document.querySelectorAll('[data-count]');
if (counters.length) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });
  counters.forEach((c) => io.observe(c));
}

// ---------- Generic form validation + fake-submit handling ----------
// NOTE: These forms have no backend wired up yet. Hook the fetch() call
// below up to a real endpoint (e.g. Formspree, your own API, or an email
// service) when ready to go live.
function wireForm(formId, statusId) {
  const form = document.getElementById(formId);
  const status = document.getElementById(statusId);
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
    const fields = form.querySelectorAll('[required]');

    const seenRadioGroups = new Set();

    fields.forEach((field) => {
      if (field.type === 'radio') {
        if (seenRadioGroups.has(field.name)) return;
        seenRadioGroups.add(field.name);
        const checked = form.querySelector(`input[name="${field.name}"]:checked`);
        if (!checked) valid = false;
        return;
      }

      const errorEl = form.querySelector(`[data-error-for="${field.id}"]`);
      let fieldValid = field.value.trim().length > 0;

      if (field.type === 'email' && fieldValid) {
        fieldValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
      }
      if (field.type === 'tel' && fieldValid) {
        fieldValid = /^[0-9+\s-]{7,15}$/.test(field.value.trim());
      }

      if (!fieldValid) {
        valid = false;
        field.classList.add('border-red-500');
        if (errorEl) errorEl.classList.remove('hidden');
      } else {
        field.classList.remove('border-red-500');
        if (errorEl) errorEl.classList.add('hidden');
      }
    });

    if (!valid) {
      if (status) {
        status.textContent = 'Please fill in all required fields correctly.';
        status.className = 'mt-4 text-sm font-medium text-red-600';
      }
      return;
    }

    if (status) {
      status.textContent = 'Thank you â€” your message has been received. Our team will contact you shortly.';
      status.className = 'mt-4 text-sm font-medium text-teal-700';
    }
    form.reset();
  });
}

wireForm('contact-form', 'contact-status');
wireForm('enquiry-form', 'enquiry-status');
wireForm('career-form', 'career-status');

// ---------- Set current year in footer ----------
document.querySelectorAll('[data-year]').forEach((el) => {
  el.textContent = new Date().getFullYear();
});// ---------- Custom Google Translate Widget ----------
function loadCustomTranslate() {
  // 1. Create the hidden google translate div
  const translateDiv = document.createElement('div');
  translateDiv.id = 'google_translate_element';
  document.body.appendChild(translateDiv);

  // 2. Load Google script
  const script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
  document.body.appendChild(script);

  window.googleTranslateElementInit = function() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  };

  // 3. Create Custom UI
  const customUi = document.createElement('div');
  customUi.id = 'custom-lang-selector';
  customUi.innerHTML = `
    <i class="fa-solid fa-globe"></i>
    <span id="current-lang">English</span>
    <i class="fa-solid fa-chevron-down" style="font-size: 0.8rem; margin-left: 4px; color: #9ca3af;"></i>
    <div class="lang-dropdown" id="lang-dropdown">
      <div class="lang-option" data-lang="en">English</div>
      <div class="lang-option" data-lang="ar">Arabic (العربية)</div>
      <div class="lang-option" data-lang="hi">Hindi (हिन्दी)</div>
      <div class="lang-option" data-lang="ml">Malayalam (മലയാളം)</div>
    </div>
  `;
  document.body.appendChild(customUi);

  // 4. Handle clicks
  customUi.addEventListener('click', (e) => {
    if (e.target.closest('.lang-option')) {
      const langCode = e.target.closest('.lang-option').dataset.lang;
      const langName = e.target.closest('.lang-option').textContent.split(' ')[0];
      document.getElementById('current-lang').textContent = langName;
      
      // Trigger Google Translate
      const googleSelect = document.querySelector('.goog-te-combo');
      if (googleSelect) {
        googleSelect.value = langCode;
        googleSelect.dispatchEvent(new Event('change'));
      }
    }
    document.getElementById('lang-dropdown').classList.toggle('show');
  });

  // Close dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!customUi.contains(e.target)) {
      document.getElementById('lang-dropdown').classList.remove('show');
    }
  });
}

// Initialize immediately
loadCustomTranslate();

