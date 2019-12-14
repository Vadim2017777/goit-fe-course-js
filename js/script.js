'use strict';
// TASK - 1;
// const logItems = function(array) {
//   for (i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1}  ${array[i]}`);
//   }
// };

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// // logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// TASK - 2;

// const calculateEngravingPrice = (string, pricePerWord) => {
//   const words = string.split(' ');
//   let summ = 0;
//   for (i = 0; i < words.length; i += 1) {
//     summ += pricePerWord;
//   }
//   return summ;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80
// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160
// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240
// console.log(
// //   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// TASK - 3;

// const findLongestWord = function(string) {
//   const words = string.split(' ');
//   let longestWord = words[0];
//   for (i = 0; i < words.length; i += 1) {
//     // console.log(words[i]);
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }
//   return longestWord;
// };

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
// console.log(findLongestWord('Google do a roll')); // 'Google'
// console.log(findLongestWord('May the force be with you')); // 'force'

// TASK - 4;
// const formatString = string => {
//   const maxLength = 40;
//   let words = string;
//   if (words.length > maxLength) {
//     console.log(words.length);
//     words = words.slice(0, maxLength) + '...';
//   }
//   return words;
// };

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(formatString('Curabitur ligula sapien.'));
// console.log(
//   formatString(
//     'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
//   ),
// );

// TASK_5;

// const checkForSpam = message => {
//   let spam = message.toLowerCase();
//   console.log(spam);
//   if (spam.includes('sale') || spam.includes('spam')) {
//     return true;
//   }
//   return false;
// };

// console.log(checkForSpam('Latest technology news')); // false
// console.log(checkForSpam('JavaScript weekly newsletter')); // false
// console.log(checkForSpam('Get best sale offers now!')); // true
// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// // TASK_6;

// let input;
// const numbers = [];
// let total = 0;

// const sumaryFunction = () => {
//   do {
//     input = prompt(`Введите число`);
//     numbers.push(Number(input));
//   } while (input != null);
//   if (numbers != 0) {
//     for (let i = 0; i < numbers.length; i += 1) {
//       total += numbers[i];
//     }
//     return total;
//   }
//   return (total = 'Pustoi massiv');
// };

// console.log(sumaryFunction());

// const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// const isLoginValid = login => {
//   if (login.length >= 4 && login.length <= 16) {
//     return true;
//   }
//   return false;
// };

// console.log(isLoginValid(login));

// const isLoginUnique = (allLogins, login) => {
//   allLogins.includes('Vadim');
//   for (let i = 0; i < allLogins.length; i += 1) {
//     console.log(allLogins[i]);
//     if (allLogins[i] != login) {
//       continue;
//     }
//     return false;
//   }
//   return true;
// };

// console.log(isLoginUnique(logins));

// const isLoginUnique = (allLogins, login = 'Aj4x1sBozz') => {
//   return allLogins.includes(login);
// };

// console.log(isLoginUnique(logins));

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = login => {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }
  return false;
};

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
