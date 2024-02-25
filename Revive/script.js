const body = document.body;
const themeToggle = document.querySelector('.theme-switch');
let currentTheme = localStorage.getItem('theme') || 'light-theme';

body.classList.add(currentTheme);
themeToggle.checked = currentTheme === 'dark-theme';

themeToggle.addEventListener('change', () => {
  currentTheme = themeToggle.checked ? 'dark-theme' : 'light-theme';
  body.className = currentTheme;
  localStorage.setItem('theme', currentTheme);
});
