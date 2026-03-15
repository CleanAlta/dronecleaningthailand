/* ═══════════════════════════════════════════
   CleanAlta Thailand — Ultimate JS v6
   Counter animations, staggered reveals,
   smooth interactions
   ═══════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* ── Hamburger toggle ── */
  const ham = document.querySelector('.ham');
  const mobNav = document.querySelector('.mob-nav');
  const mobOv = document.querySelector('.mob-ov');
  const body = document.body;

  function toggleMenu() {
    ham.classList.toggle('on');
    mobNav.classList.toggle('on');
    mobOv.classList.toggle('on');
    body.style.overflow = mobNav.classList.contains('on') ? 'hidden' : '';
  }

  if (ham) {
    ham.addEventListener('click', toggleMenu);
    mobOv.addEventListener('click', toggleMenu);
    mobNav.querySelectorAll('a:not(.mob-lng a)').forEach(link => {
      link.addEventListener('click', () => {
        if (mobNav.classList.contains('on')) toggleMenu();
      });
    });
  }

  /* ── Header scroll effect ── */
  const hdr = document.querySelector('.hdr');
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        hdr.classList.toggle('scrolled', window.scrollY > 60);
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-q').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-i');
      const ans = item.querySelector('.faq-a');
      const isOpen = item.classList.contains('on');

      document.querySelectorAll('.faq-i.on').forEach(x => {
        x.classList.remove('on');
        x.querySelector('.faq-a').style.maxHeight = '0';
      });

      if (!isOpen) {
        item.classList.add('on');
        ans.style.maxHeight = ans.scrollHeight + 'px';
      }
    });
  });

  /* ── Smooth anchor scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ── Counter animation ── */
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    const duration = 1800;
    const start = performance.now();

    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      el.textContent = prefix + current.toLocaleString() + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => counterObs.observe(el));

  /* ── Scroll reveal with stagger ── */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('vis');
        revealObs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.06, rootMargin: '0px 0px -30px 0px' });

  // Apply reveal to key elements
  const revealSelectors = [
    '.sec-hd', '.sc', '.vc', '.lc', '.icd', '.pjc', '.blc',
    '.cpc', '.prs', '.testi', '.asym', '.impact', '.grid-2',
    '.inv-box', '.faq-i'
  ];

  revealSelectors.forEach(sel => {
    document.querySelectorAll(sel).forEach((el, i) => {
      el.classList.add('rv');
      // Stagger delay within groups
      const parent = el.parentElement;
      if (parent) {
        const siblings = Array.from(parent.querySelectorAll(sel));
        const idx = siblings.indexOf(el);
        el.style.transitionDelay = (idx * 0.08) + 's';
      }
    });
  });

  document.querySelectorAll('.rv').forEach(el => revealObs.observe(el));

  /* ── Impact number reveal ── */
  document.querySelectorAll('.impact-n').forEach(el => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('vis');
          // If has data-count, animate it
          if (entry.target.dataset.count) {
            animateCounter(entry.target);
          }
          obs.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    obs.observe(el);
  });
});
