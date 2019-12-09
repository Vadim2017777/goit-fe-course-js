// 'use strict';

// TASK_1

const name = 'Генератор защитного поля';
let price = 1000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

price = 2000;
console.log(`Выбран «${name}», цена за штуку ${price} кредитов`);

// TASK_2

const total = 100;
const ordered = 50;

const summary =
  total >= ordered
    ? 'Заказ оформлен, с вами свяжется менеджер'
    : 'На складе недостаточно твоаров!';
console.log(summary);

// if (total >= ordered) {
//   console.log('Заказ оформлен, с вами свяжется менеджер');
// } else console.log('На складе недостаточно твоаров!');

// TASK_3

const ADMIN_PASSWORD = 'jqueryismyjam';
let message = prompt('Введите пароль администратора');

if (message === ADMIN_PASSWORD) {
  console.log('Добро пожаловать!');
} else if (message === null) {
  console.log('Отменено пользователем!');
} else console.log('Доступ запрещен, неверный пароль!');

// TASK_4
// const pricePerDroid = 3000;
// let credits = 23580;
// let userChoice = prompt(
//   'Укажите количество дроидов, которые Вы хотите купить!',
// );
// let totalPrice;

// if (userChoice === null) {
//   console.log('Отменено пользователем!');
// } else {
//   totalPrice = userChoice = Number(userChoice) * pricePerDroid;
//   console.log(totalPrice);
// }

// if (totalPrice > credits) {
//   console.log('Недостаточно средств на счету!');
// } else {
//   credits = credits - totalPrice;
//   console.log(
//     `Вы купили ${userChoice} дроидов, на счету осталось ${credits} кредитов.`,
//   );
// }

const pricePerDroid = 3000;
let credits = 23580;
let userChoice = prompt(
  'Укажите количество дроидов, которые Вы хотите купить!',
);
let totalPrice = (userChoice = Number(userChoice) * pricePerDroid);

if (userChoice === 0) {
  console.log('Отменено пользователем!');
} else if (totalPrice > credits) {
  console.log('Недостаточно средств на счету!');
} else {
  credits = credits - totalPrice;
  console.log(
    `Вы купили ${userChoice} дроидов, на счету осталось ${credits} кредитов.`,
  );
}

// TASK_5
const china = 'китай';
const chinaPrise = 100;
const chili = 'чили';
const chiliPrise = 250;
const аustralia = ' австралия';
const аustraliaPrise = 170;
const india = 'индия';
const indiaPrise = 80;
const jamaica = 'ямайка';
const jamicaPrise = 120;
let userChoiceCountry = prompt('Введите страну доставки');

if (userChoiceCountry === null) {
  console.log('ничего не введено');
} else {
  switch (userChoiceCountry.toLowerCase()) {
    case china:
      alert(`Доставка в ${china} будет стоить ${chinaPrise} кредитов`);
      break;
    case chili:
      alert(`Доставка в ${chili} будет стоить ${chiliPrise} кредитов`);
      break;
    case аustralia:
      alert(`Доставка в ${аustralia} будет стоить ${аustraliaPrise} кредитов`);
      break;
    case india:
      alert(`Доставка в ${india} будет стоить ${indiaPrise} кредитов`);
      break;
    case jamaica:
      alert(`Доставка в ${jamaica} будет стоить ${jamicaPrise} кредитов`);
      break;

    default:
      alert('В Вашей стране доставка не доступна');
  }
}

// TASK_6
let input;
let userTotal = 0;

// do {
//   input = prompt(`Введите число`);
//   userTotal = userTotal + Number(input);
// } while (input !== null);

// alert(`Общая сумма чисел равна ${userTotal}`);

while (input !== null) {
  input = prompt(`Введите число`);

  if (isNaN(input)) {
    alert('Введите число');
    console.log('Невалидный ввод, попробуйте еще раз!');
  } else userTotal = userTotal + Number(input);
}

alert(`Общая сумма чисел равна ${userTotal}`);
