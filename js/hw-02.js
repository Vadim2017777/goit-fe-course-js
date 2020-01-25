'use strict';
// TASK - 1;

const logItems = array => {
  for (let i = 0; i < array.length; i += 1) {
    console.log(`${i + 1}-${array[i]}`);
  }
};

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// TASK - 2;

const calculateEngravingPrice = (string, pricePerWord) => {
  const words = string.split(' ');
  let summ = 0;
  for (let word of words) {
    summ += pricePerWord;
  }
  return summ;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80
console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240
console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120

// // TASK - 3;

const findLongestWord = string => {
  const words = string.split(' ');
  let longestWord = words[0];
  for (let i = 0; i < words.length; i += 1) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
console.log(findLongestWord('Google do a roll')); // 'Google'
console.log(findLongestWord('May the force be with you')); // 'force'

// TASK - 4;
const formatString = (string, maxLength = 40) => {
  if (string.length > maxLength) {
    string = string.slice(0, maxLength) + '...';
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);

// TASK_5;

const checkForSpam = message => {
  let spam = message.toLowerCase();
  spam = spam.includes('sale') || spam.includes('spam');
  return spam;
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// TASK_6;

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

// TASK_7

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const isLoginUnique = (allLogins, login) => {
  return allLogins.includes(login);
};

const addLogin = (allLogins, login) => {
  if (!isLoginValid(login)) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return;
  } else if (isLoginUnique(allLogins, login)) {
    console.log('Такой логин уже используется!');
    return;
  } else allLogins.push(login);
  console.log('Логин успешно добавлен!');
};

addLogin(logins, 'Ajax'); // 'Логин успешно добавлен!'
addLogin(logins, 'robotGoogles'); // 'Такой логин уже используется!'
addLogin(logins, 'Zod'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
addLogin(logins, 'jqueryisextremelyfast'); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.table(logins);
