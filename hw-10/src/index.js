import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  input:document.querySelector('.js-switch-input')
}

const BaseTheme = () => {
  if(localStorage.getItem('Theme') == Theme.DARK){
    refs.input.checked = true;
    refs.classList.add(localStorage.getItem('Theme'));
  };

const BaseTheme = document
  .querySelector('body')
  .classList.add(localStorage.getItem('Theme'));

const input = document.querySelector('.js-switch-input');

if (localStorage.getItem('Theme') == Theme.DARK) {
  input.checked = true;

  console.log('HELLO');
}
input.addEventListener('change', handleClick);

function handleClick(e) {
  console.log(e.target.checked);

  if (e.target.checked === true) {
    document.querySelector('body').classList.remove('light-theme');
    document.querySelector('body').classList.add('dark-theme');
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.DARK);
  } else if (e.target.checked === false) {
    document.querySelector('body').classList.remove('dark-theme');
    document.querySelector('body').classList.add('light-theme');
    localStorage.removeItem('Theme');
    localStorage.setItem('Theme', Theme.LIGHT);
  }
}
