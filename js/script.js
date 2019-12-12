// TASK - 1;
// const logItems = function(array) {
//   for (i = 0; i < array.length; i += 1) {
//     console.log(`${i + 1}  ${array[i]}`);
//   }
// };

// logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);
// // logItems(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']);

// TASK - 2;

// const calculateEngravingPrice = (string, pricePerWord) => {
//   const words = string.split(' ');
//   let summ = 0;
//   for (i = 0; i < words.length; i += 1) {
//     summ += pricePerWord;
//   }
//   return summ;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
// //   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// TASK - 2;

const findLongestWord = function(string) {
  const words = string.split(' ');
  let longestWord = words[0];
  for (i = 0; i < words.length; i += 1) {
    // console.log(words[i]);
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

// console.log(findLongestWord('Google do a roll')); // 'Google'

// console.log(findLongestWord('May the force be with you')); // 'force'
