const theme = localStorage.getItem('theme');
if (theme === 'dark' ||
    (!theme && window.matchMedia('(prefers-color-scheme: dark)'))) {
  document.documentElement.setAttribute('theme', 'dark');
}

const themeSwitcher = document.getElementById('theme-switcher');

function toggleTheme() {
  if (document.documentElement.getAttribute('theme') === 'dark') {
    document.documentElement.setAttribute('theme', 'light');

    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('theme', 'dark');

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
