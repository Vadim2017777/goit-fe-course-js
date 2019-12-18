'use strict';
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

const countProps = function(Object) {
  let count = 0;
  for (let key in Object) {
    count += 1;
  }
  return count;
};
console.log(countProps({})); // 0
console.log(countProps({ name: 'Mango', age: 2 }));
console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

// const findBestEmployee = function(employees) {
//   // твой код
// };

// const employees{
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   }

const findBestEmployee = function(employees) {
  let max = 0;
  let name;
  const keys = Object.keys(employees);

  for (let key of keys) {
    if (max < employees[key]) {
      max += employees[key];
      name = key;
    }
  }
  return {
    name,
    max,
  };
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence
// console.log(name, max);

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
