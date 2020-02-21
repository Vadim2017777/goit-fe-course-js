'use strict';
import users from './users.js';
// TASK_1

const getUserNames = users => {
  return users.map(user => user.name);
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

// TASK_2

const getUsersWithEyeColor = (users, color) => {
  return users.filter(user => user.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

// TASK_3

const getUsersWithGender = (users, gender) => {
  const result = users
    .filter(user => user.gender === gender)
    .map(user => user.name);
  return result;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

// TASK_4

const getInactiveUsers = users => {
  return users.filter(users => !users.isActive);
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

// TASK_5

const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

// TASK_6

const getUsersWithAge = (users, min, max) => {
  return users.filter(user => user.age > min && user.age < max);
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]
console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

// TASK_7

const calculateTotalBalance = users => {
  return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
};

console.log(calculateTotalBalance(users)); // 20916

// TASK_8

const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user['friends'].includes(friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]
// TASK_9

const getNamesSortedByFriendsCount = users => {
  return users
    .sort((userA, userB) => userA['friends'].length - userB['friends'].length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// TASK_10
const getSortedUniqueSkills = users => {
  const skills = users.reduce((allSkills, user) => {
    allSkills.push(...user.skills);

    return allSkills;
  }, []);
  const unique = skills
    .filter((skill, index) => skills.indexOf(skill) === index)
    .sort();

  return unique;
};

console.log(getSortedUniqueSkills(users));
