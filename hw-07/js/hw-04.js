'use strict';
const btnDecrement = document.querySelector('[data-action="decrement"]');
const btnIncrement = document.querySelector('[data-action="increment"]');
const counter = document.getElementById('value');

let counterValue = 0;
btnDecrement.addEventListener('click', handleClickDecrement);
btnIncrement.addEventListener('click', handleClickIncrement);

function handleClickDecrement() {
  counterValue -= 1;
  counter.textContent = counterValue;
}

function handleClickIncrement() {
  counterValue += 1;
  counter.textContent = counterValue;
}
