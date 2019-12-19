// 'use strict';

// // TASK_1
// const mood = 'happy';
// const user = {
//   name: 'Mango',
//   age: 20,
//   hobby: 'html',
//   premium: true,
//   mood,
//   changeHobby(newHobby) {
//     this.hobby = newHobby;
//   },
//   changeProperty(newValue) {
//     this.premium = newValue;
//   },
// };

// const keys = Object.keys(user);

// for (let key of keys) {
//   console.log(`key ${key} value ${user[key]} `);
// }

// user.changeProperty(false);
// user.changeHobby('skydiving');
// console.log(user);

// // TASK_2
// const countProps = function(Object) {
//   let count = 0;
//   for (let key in Object) {
//     count += 1;
//   }
//   return count;
// };
// console.log(countProps({})); // 0
// console.log(countProps({ name: 'Mango', age: 2 }));
// console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// // const findBestEmployee = function(employees) {
// //   // твой код
// // };

// // const employees{
// //     ann: 29,
// //     david: 35,
// //     helen: 1,
// //     lorence: 99,
// //   }

// // const findBestEmployee = function(employees) {
// //   let max = 0;
// //   let name;
// //   const keys = Object.keys(employees);

// //   for (let key of keys) {
// //     if (max < employees[key]) {
// //       max = employees[key];
// //       name = key;
// //     }
// //   }
// //   return {
// //     name,
// //     max,
// //   };
// // };

// // console.log(
// //   findBestEmployee({
// //     ann: 29,
// //     david: 35,
// //     helen: 1,
// //     lorence: 99,
// //   }),
// // ); // lorence
// // // console.log(name, max);

// // console.log(
// //   findBestEmployee({
// //     poly: 12,
// //     mango: 17,
// //     ajax: 4,
// //   }),
// // ); // mango

// // console.log(
// //   findBestEmployee({
// //     lux: 147,
// //     david: 21,
// //     kiwi: 19,
// //     chelsy: 38,
// //   }),
// // ); // lux

// // TASK_3
// const findBestEmployee = employees => {
//   let name;
//   let total = 0;

//   for (const [key, value] of Object.entries(employees)) {
//     if (total < value) {
//       total = value;
//       name = key;
//     }
//   }

//   return { name, total };
// };

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }),
// ); // lorence
// // console.log(name, max);

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   }),
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   }),
// ); // lux

// // TASK_4
// const countTotalSalary = employees => {
//   let total = 0;
//   let keys = Object.keys(employees);
//   for (let key of keys) {
//     total += employees[key];
//   }
//   return total;
// };

// console.log(countTotalSalary({})); // 0

// console.log(
//   countTotalSalary({
//     mango: 100,
//     poly: 150,
//     alfred: 80,
//   }),
// ); // 330

// console.log(
//   countTotalSalary({
//     kiwi: 200,
//     lux: 50,
//     chelsy: 150,
//   }),
// ); // 400

// TASK_5;

// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 2 },
// ];

// const getAllPropValues = function(arr, prop) {
//   let values = [];
//   for (let value of arr) {
//     if (value[prop] === undefined) {
//       continue;
//     }
//     values.push(value[prop]);
//   }
//   return values;
// };

// console.log(getAllPropValues(products, 'name'));
// console.log(getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]
// console.log(getAllPropValues(products, 'category')); // []

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const calculateTotalPrice = (allProdcuts, productName) => {
  let summery = 0;
  for (product of allProdcuts) {
    // console.log(product['name']);
    if (productName === product['name']) {
      console.log(product['name']);
      summery = product['price'] * product['quantity'];
    }
  }
  return summery;
};

console.log(calculateTotalPrice(products, 'Радар')); // 5200

console.log(calculateTotalPrice(products, 'Дроид')); // 2800
