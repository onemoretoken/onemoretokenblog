// Dark mode fix for GitHub Pages
document.addEventListener('DOMContentLoaded', function() {
  const modeToggle = document.getElementById('mode');
  const body = document.body;

  if (modeToggle) {
    modeToggle.addEventListener('click', function(e) {
      e.preventDefault();

      // Toggle dark mode
      if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        localStorage.setItem('theme', 'light');
      } else {
        body.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
      }
    });
  }

  // Apply saved theme on load
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    body.setAttribute('data-theme', 'dark');
  }
});