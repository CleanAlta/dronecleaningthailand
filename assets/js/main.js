/* CleanAlta Thailand — Main JS v4 */
document.addEventListener('DOMContentLoaded', () => {
  /* Hamburger */
  const h = document.querySelector('.ham');
  const mn = document.querySelector('.mob-nav');
  const mo = document.querySelector('.mob-ov');
  const b = document.body;
  function toggle() {
    h.classList.toggle('on');
    mn.classList.toggle('on');
    mo.classList.toggle('on');
    b.style.overflow = mn.classList.contains('on') ? 'hidden' : '';
  }
  if (h) {
    h.addEventListener('click', toggle);
    mo.addEventListener('click', toggle);
    mn.querySelectorAll('a:not(.mob-lng a)').forEach(l => {
      l.addEventListener('click', () => { if (mn.classList.contains('on')) toggle(); });
    });
  }

  /* Header scroll */
  const hdr = document.querySelector('.hdr');
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });

  /* FAQ accordion */
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

  /* Smooth anchor scroll */
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e) {
      e.preventDefault();
      const t = document.querySelector(this.getAttribute('href'));
      if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  /* Intersection Observer for fade-in */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.sec-hd, .sc, .vc, .lc, .icard, .pjc, .blc, .cpc, .prs').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    obs.observe(el);
  });
});
