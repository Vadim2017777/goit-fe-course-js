'use strict';
const countTotalSalary = employees => {
  let totalSalary = 0;
  for (const value of Object.keys(employees)) {
    totalSalary += employees[value];
  }
  return totalSalary;
};

console.log('TotalSalary = ' + countTotalSalary({})); // 0

console.log(
  'TotalSalary = ' +
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
); // 330

console.log(
  'TotalSalary = ' +
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
); // 400
