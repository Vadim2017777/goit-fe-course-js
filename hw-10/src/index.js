import './styles.css';

const input = document.querySelector('.js-switch-input');
console.dir(input);
input.addEventListener('click', handleClick);

function handleClick() {
  document.querySelector('body').classList.toggle('dark-theme');
}
