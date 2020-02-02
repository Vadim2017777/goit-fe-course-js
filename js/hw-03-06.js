'use strict';
const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];
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
