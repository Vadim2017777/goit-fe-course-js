'use strict';
const categories = document.getElementById('categories');

// const list = document.querySelectorAll('.item').forEach(item =>
//   console.log(
//     `Категория: ${item.firstElementChild.textContent}
// Количество элементов: ${item.querySelectorAll('li').length}`,
//   ),
// );

const list = document.querySelectorAll('.item').forEach(element => {
  const title = element.querySelector('h2').textContent;
  const elementLength = element.querySelectorAll('li').length;
  console.log(`Категория: ${title}
Количество элементов: ${elementLength}`);
});
