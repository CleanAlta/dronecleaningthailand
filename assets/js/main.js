
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-toggle');
  const mobilePanel = document.querySelector('.mobile-panel');
  if (menuButton && mobilePanel) {
    menuButton.addEventListener('click', function () {
      const open = menuButton.classList.toggle('open');
      menuButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      mobilePanel.hidden = !open;
    });
  }

  document.querySelectorAll('.faq-question').forEach(function (button) {
    button.addEventListener('click', function () {
      const item = button.closest('.faq-item');
      const open = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function (other) {
        other.classList.remove('open');
      });
      if (!open) item.classList.add('open');
    });
  });

  const briefConfig = {
    en: {
      subject: 'CleanAlta Thailand project brief',
      intro: 'Project brief',
      copied: 'Brief copied to clipboard'
    },
    fr: {
      subject: 'Brief projet CleanAlta Thailand',
      intro: 'Brief projet',
      copied: 'Brief copié'
    },
    de: {
      subject: 'Projektbrief CleanAlta Thailand',
      intro: 'Projektbrief',
      copied: 'Brief kopiert'
    },
    th: {
      subject: 'ข้อมูลโครงการ CleanAlta Thailand',
      intro: 'ข้อมูลโครงการ',
      copied: 'คัดลอก brief แล้ว'
    }
  };

  function buildBrief(form) {
    const locale = form.dataset.locale || 'en';
    const cfg = briefConfig[locale] || briefConfig.en;
    const entries = [];
    form.querySelectorAll('input, select, textarea').forEach(function (field) {
      const value = (field.value || '').trim();
      if (!value) return;
      const label = field.closest('label')?.querySelector('span')?.textContent?.trim() || field.name;
      entries.push(label + ': ' + value);
    });
    return {
      subject: cfg.subject,
      text: cfg.intro + '\n\n' + entries.join('\n')
    };
  }

  document.querySelectorAll('.brief-form').forEach(function (form) {
    form.querySelectorAll('[data-brief]').forEach(function (button) {
      button.addEventListener('click', async function () {
        const brief = buildBrief(form);
        const mode = button.dataset.brief;
        if (mode === 'email') {
          window.location.href = 'mailto:eco@cleanalta.net?subject=' + encodeURIComponent(brief.subject) + '&body=' + encodeURIComponent(brief.text);
        } else if (mode === 'whatsapp') {
          window.open('https://wa.me/33686505571?text=' + encodeURIComponent(brief.text), '_blank', 'noopener');
        } else if (mode === 'copy') {
          try {
            await navigator.clipboard.writeText(brief.text);
            alert((briefConfig[form.dataset.locale] || briefConfig.en).copied);
          } catch (e) {
            alert(brief.text);
          }
        }
      });
    });
  });
});
