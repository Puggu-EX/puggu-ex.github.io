// Theme toggle with persistence
(function () {
  const root = document.documentElement;
  const stored = window.localStorage.getItem('portfolio-theme');

  if (stored === 'light' || stored === 'dark') {
    root.setAttribute('data-theme', stored);
  }

  const toggle = document.getElementById('themeToggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
      const next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      window.localStorage.setItem('portfolio-theme', next);
    });
  }
})();

(function () {
  const projectButtons = document.querySelectorAll('[data-project-link]');

  projectButtons.forEach((btn) => {
    const url = btn.getAttribute('data-project-link');
    if (!url) return;

    btn.addEventListener('click', () => {
      window.open(url, '_blank', 'noreferrer');
    });
  });
})();

// Footer year
(function () {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = String(new Date().getFullYear());
  }
})();

