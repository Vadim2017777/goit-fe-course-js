'use strict';
const inputFontControl = document.getElementById('font-size-control');
const inputFontText = document.getElementById('text');

console.dir(inputFontControl.value);
inputFontControl.addEventListener('input', handleRange);

function handleRange(e) {
  inputFontText.style.fontSize = e.currentTarget.value + 'px';
}

// function handleRange(e) {
//   inputFontText.style.fontSize = this.value + 'px';
// }
