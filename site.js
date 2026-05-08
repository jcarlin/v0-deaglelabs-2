/* ============================================================
   DEAGLE — Site interactions
   Reveal-on-scroll, mobile menu, FAQ, demo modal.
   ============================================================ */

(function () {
  // --- Reveal on scroll ---
  const rvEls = document.querySelectorAll('.rv');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    rvEls.forEach(el => obs.observe(el));
  } else {
    rvEls.forEach(el => el.classList.add('visible'));
  }

  // --- Mobile menu ---
  const ham = document.getElementById('hamburger');
  const sheet = document.getElementById('mobile-sheet');
  if (ham && sheet) {
    ham.addEventListener('click', () => {
      const open = sheet.classList.toggle('open');
      ham.setAttribute('aria-expanded', String(open));
    });
    sheet.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        sheet.classList.remove('open');
        ham.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // --- FAQ accordion ---
  const faqList = document.getElementById('faq-list');
  if (faqList) {
    faqList.addEventListener('click', (e) => {
      const q = e.target.closest('.faq-q');
      if (!q) return;
      q.parentElement.classList.toggle('open');
    });
  }

  // --- Demo modal ---
  const FORMSPREE_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_FORM_ID';

  const modal = document.getElementById('demo-modal');
  const modalClose = document.getElementById('demo-modal-close');
  const openTriggers = document.querySelectorAll('a[href="#demo"], #open-demo-form');
  const form = document.getElementById('demo-form');
  const ok = document.getElementById('demo-form-ok');
  const err = document.getElementById('demo-form-err');

  function openModal(e) {
    if (e) e.preventDefault();
    if (!modal) return;
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }
  function closeModal() {
    if (!modal) return;
    modal.hidden = true;
    document.body.style.overflow = '';
  }
  openTriggers.forEach(t => t.addEventListener('click', openModal));
  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
  }
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const submitLabel = submitBtn ? submitBtn.textContent : '';

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      if (err) err.hidden = true;

      if (!form.name.value.trim() || !form.email.value.trim() || !form.firm.value.trim()) {
        form.querySelectorAll('input[required]').forEach(i => {
          if (!i.value.trim()) i.style.borderColor = 'var(--red)';
        });
        return;
      }

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';
      }

      try {
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: 'POST',
          headers: { Accept: 'application/json' },
          body: new FormData(form),
        });
        if (!res.ok) throw new Error('Formspree responded ' + res.status);
        form.hidden = true;
        if (ok) ok.hidden = false;
      } catch (_) {
        if (err) err.hidden = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitLabel;
        }
      }
    });
  }
})();
