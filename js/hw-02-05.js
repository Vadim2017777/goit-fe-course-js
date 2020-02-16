'use strict';

const checkForSpam = message => {
  let spam = message.toLowerCase();
  spam = spam.includes('sale') || spam.includes('spam');
  return spam;
};

console.log(checkForSpam('Latest technology news')); // false
console.log(checkForSpam('JavaScript weekly newsletter')); // false
console.log(checkForSpam('Get best sale offers now!')); // true
console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
