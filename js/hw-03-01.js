'use strict';
const mood = 'happy';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const addName = () => (user.mood = mood);
const changeHobby = () => (user.hobby = 'skydiving');
const changeStatus = () => (user.premium = false);
const changePropertyUser = () => {
  addName();
  changeHobby();
  changeStatus();
};
changePropertyUser();
console.log(user);

const keys = Object.keys(user);
for (let key of keys) {
  console.log(`key: ${key} value: ${user[key]} `);
}

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

// user.changeProperty(false);
// user.changeHobby('skydiving');
// console.log(user);
