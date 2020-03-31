import './styles.css';
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
const baseTheme = document
  .querySelector('body')
  .classList.add(localStorage.getItem('theme'));

const input = document.querySelector('.js-switch-input');
input.addEventListener('click', handleClick);

console.log(localStorage);

function handleClick() {
  console.log(localStorage);
  if (localStorage.getItem('theme') === Theme.LIGHT || 'null') {
    document.querySelector('body').classList.add(Theme.DARK);
    document.querySelector('body').classList.remove(Theme.LIGHT);
    localStorage.removeItem('theme');

    console.log(localStorage.getItem('theme'));
  } else {
    document.querySelector('body').classList.remove(Theme.DARK);
  }
}

console.log(localStorage.getItem('theme'));
