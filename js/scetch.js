const mood = 'happy';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

const addName = () => {
  return (user.mood = mood);
};
const changeHobby = () => {
  return (user.hobby = 'skydiving');
};

const changeStatus = () => {
  return (user.premium = false);
};

const changePropertyUser = () => {
  addName();
  changeHobby();
  changeStatus();
};
changePropertyUser();
console.log(user);

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

// TASK_2

const countProps = obj => {
  const keys = Object.keys(obj);
  return keys.length;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// TASK_3

// const findBestEmployee = (employees)=> {
//   let max = 0;
//   let BestEmployee;
//   for (let key in employees) {
//     if (employees[key] > max) {
//       max = employees[key];
//       BestEmployee = key;
//     }
//   }
//   return BestEmployee;
// };

const findBestEmployee = employees => {
  let max = 0;
  let name;

  for (const [key, value] of Object.entries(employees)) {
    if (max < value) {
      max = value;
      name = [key, value];
    }
  }
  return name;
};

console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

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

// TASK_4;

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

// TASK_5;
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  let proporties = [];

  for (const product of arr) {
    if (product[prop] === undefined) {
      continue;
    }
    proporties.push(product[prop]);
  }
  return proporties;
};

console.log('Values_name = ' + getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log('Values_quantity = ' + getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log('Values_category = ' + getAllPropValues(products, 'category')); // []

// TASK_6

const calculateTotalPrice = (allProdcuts, productName) => {
  let totalPrice;
  for (const proporties of allProdcuts) {
    if (productName == proporties['name']) {
      totalPrice = proporties['price'] * proporties['quantity'];
    }
  }
  return totalPrice;
};

console.log('TotalPrice = ' + calculateTotalPrice(products, 'Радар')); // 5200

console.log('TotalPrice = ' + calculateTotalPrice(products, 'Дроид')); // 2800

// TASK_7
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,
  transactions: [],

  createTransaction(amount, type) {
    this.transaction = {
      id: 0,
      type: 0,
      amount: 0,
    };
    this.transaction.amount = amount;
    this.transaction.type = type;
    return this.transaction;
  },

  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount);
    this.transaction.id = 1;
    this.transaction.type = Transaction.DEPOSIT;
    this.transactions.push(this.transaction);
  },

  withdraw(amount) {
    this.createTransaction(amount);
    if (this.balance >= amount) {
      this.transactions.push(this.transaction);
      this.transaction.id = 2;
      this.transaction.type = Transaction.WITHDRAW;
      this.balance -= amount;
    } else {
      console.log('Not enough money on account');
    }
  },

  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    let totalId = [];
    for (const value of this.transactions) {
      if (value.id == id) {
        totalId.push(value);
      }
    }
    return totalId;
  },

  getTransactionTotal(type) {
    let total = 0;
    for (const value of this.transactions) {
      if (value.type === type) {
        total += value.amount;
      }
    }
    return total;
  },
};

account.deposit(100);
account.deposit(50);
account.withdraw(5);
account.withdraw(50);
console.log(account.getTransactionDetails(2));
console.log('Balance = ' + account.getBalance());
console.log(
  'Transaction withdraw total = ' +
    account.getTransactionTotal(Transaction.WITHDRAW),
);
console.log(
  'Transaction deposit total = ' +
    account.getTransactionTotal(Transaction.DEPOSIT),
);
console.log(account);
