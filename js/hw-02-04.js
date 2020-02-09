'use strict';

const formatString = (string, maxLength = 40) => {
  if (string.length > maxLength) {
    string = string.slice(0, maxLength) + '...';
  }
  return string;
};

console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
console.log(formatString('Curabitur ligula sapien.'));
console.log(
  formatString(
    'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
  ),
);
