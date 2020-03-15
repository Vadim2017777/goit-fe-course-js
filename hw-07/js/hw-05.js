'use strict';
const input = document.getElementById('name-input');
const inputOutText = document.getElementById('name-output');

input.addEventListener('input', hanleInputChange);

function hanleInputChange(e) {
  let word =
    e.currentTarget.value[0].toUpperCase() + e.currentTarget.value.slice(1);
  inputOutText.textContent = word;
}
