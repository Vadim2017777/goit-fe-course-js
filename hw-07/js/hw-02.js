'use strict';

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

createMenuVegetables(ingredients);

function createMenuVegetables(ingredients) {
  const list = document.getElementById('ingredients');
  ingredients.map(item => {
    let li = document.createElement('li');
    li.append(item);
    list.append(li);
  });
  return list;
}
