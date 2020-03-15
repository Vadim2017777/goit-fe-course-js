'use strict';

const controls = document.getElementById('controls');

const input = controls.querySelector('input');

const btnRender = controls.querySelector(`[data-action="render"]`);
const btnDestroy = controls.querySelector(`[data-action="destroy"]`);

const btnAction = btnRender.addEventListener('click', createBoxes);
const eraseBtn = btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  const boxes = document.querySelector('#boxes');
  for (let i = 0; i < amount; i += 1) {
    let color =
      '#' +
      (Math.random().toString(16) + '000000').substring(2, 8).toUpperCase();
    boxes.insertAdjacentHTML(
      'afterbegin',
      ` <div style="width: 30px; height: 30px; background-color:  ${color};">`,
    );
  }
}

function destroyBoxes() {
  // const boxes = document.getElementById('boxes');
  // const box = boxes
  //   .querySelectorAll('div')
  //   .forEach(item => console.log(item.remove()));
  document.getElementById('boxes').innerHTML = '';
}
