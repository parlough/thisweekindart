const documentElement = document.documentElement;

const theme = localStorage.getItem('theme');
if (theme === 'dark' ||
    (!theme && window.matchMedia('(prefers-color-scheme: dark)'))) {
  documentElement.setAttribute('theme', 'dark');
}

const themeSwitcher = document.getElementById('theme-switcher');

function toggleTheme() {
  if (documentElement.getAttribute('theme') === 'dark') {
    documentElement.setAttribute('theme', 'light');

    localStorage.setItem('theme', 'light');
  } else {
    documentElement.setAttribute('theme', 'dark');

    localStorage.setItem('theme', 'dark');
  }
}

if (themeSwitcher) {
  themeSwitcher.addEventListener('click', toggleTheme);

  themeSwitcher.addEventListener("keydown", event => {
    if (!event.isComposing && event.code === 'Enter') {
      toggleTheme();
    }
  });
}
