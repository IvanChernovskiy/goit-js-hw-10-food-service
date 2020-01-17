import refs from './refs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeNow = localStorage.getItem('theme');

if (themeNow === Theme.DARK) {
  refs.themeInput.checked = true;
  refs.body.classList.add(Theme.DARK);
}

if (themeNow === Theme.LIGHT) {
  refs.themeInput.checked = false;
  refs.body.classList.add(Theme.LIGHT);
}

const handleChangeInput = e => {
  if (e.target.checked) {
    refs.body.classList.remove(Theme.LIGHT);
    refs.body.classList.add(Theme.DARK);

    localStorage.setItem('theme', Theme.DARK);
  }

  if (!e.target.checked) {
    refs.body.classList.remove(Theme.DARK);
    refs.body.classList.add(Theme.LIGHT);

    localStorage.setItem('theme', Theme.LIGHT);
  }
};

refs.themeInput.addEventListener('change', handleChangeInput);
