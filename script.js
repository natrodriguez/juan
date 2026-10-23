(() => {
  const buttons = document.querySelectorAll('[data-language]');
  function setLanguage(lang) {
    const chosen = lang === 'en' ? 'en' : 'es';
    document.documentElement.lang = chosen;
    document.querySelectorAll('[data-es][data-en]').forEach(el => { el.textContent = el.dataset[chosen]; });
    document.querySelectorAll('[data-alt-es]').forEach(el => { el.alt = el.getAttribute('data-alt-' + chosen); });
    buttons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === chosen)));
    document.querySelector('.video iframe').title = 'El Pipo y La Piña — ' + (chosen === 'es' ? 'video musical' : 'music video');
    document.title = chosen === 'es' ? 'Juan — Música & Libros' : 'Juan — Music & Books';
    try { localStorage.setItem('juan-language', chosen); } catch {}
  }
  let saved; try { saved = localStorage.getItem('juan-language'); } catch {}
  setLanguage(saved || 'es');
  buttons.forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
})();
