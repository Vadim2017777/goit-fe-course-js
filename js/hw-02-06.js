'use strict';

let input;
const numbers = [];
let total = 0;

do {
  input = prompt('Введите число');
  if (input === null) {
    break;
  } else if (isNaN(input)) {
    alert('Было введено не число, попробуйте еще раз');
  } else {
    numbers.push(input);
  }
} while (input);

for (let number of numbers) {
  total += Number(number);
}

console.log(`Общая сумма чисел равна ${total}`);
