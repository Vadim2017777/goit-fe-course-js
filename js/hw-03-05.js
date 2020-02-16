const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 2 },
];

const getAllPropValues = (arr, prop) => {
  let proporties = [];

  for (const product of arr) {
    if (product[prop]) {
      proporties.push(product[prop]);
    }
  }
  return proporties;
};

console.log('Values_name = ' + getAllPropValues(products, 'name')); // ['Радар', 'Сканер', 'Дроид', 'Захват']

console.log('Values_quantity = ' + getAllPropValues(products, 'quantity')); // [4, 3, 7, 2]

console.log('Values_category = ' + getAllPropValues(products, 'category')); // []
