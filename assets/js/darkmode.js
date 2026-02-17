document.addEventListener('DOMContentLoaded', function () {
  const body = document.body;
  const toggle = document.getElementById('dark-toggle');
  const stored = localStorage.getItem('gfn_theme');

  if (stored === 'dark') body.classList.add('dark-mode');
  if (toggle) toggle.checked = body.classList.contains('dark-mode');

  if (toggle) {
    toggle.addEventListener('change', function () {
      if (toggle.checked) {
        body.classList.add('dark-mode');
        localStorage.setItem('gfn_theme', 'dark');
      } else {
        body.classList.remove('dark-mode');
        localStorage.setItem('gfn_theme', 'light');
      }
    });
  }

  // mark active nav link by filename match
  const navLinks = document.querySelectorAll('.site-nav .nav-links a');
  const current = window.location.pathname.split('/').pop();
  navLinks.forEach(a => {
    const href = (a.getAttribute('href') || '').split('/').pop();
    if (!href) return;
    if (href === current || (href === 'index.html' && current === '')) {
      a.classList.add('active');
    }
  });
});
