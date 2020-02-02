'use strict';
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
