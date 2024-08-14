/*
Write a function `lastVowel(str)` that takes in a string and returns the last
vowel that appears sequentially in the string. Note that the string may contain
capitalization.

npm test test/01-last-vowel-spec.js

Hint: You may find the `String.toLowerCase` or `String.toUpperCase` methods useful.

String.toLowerCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase
String.toUpperCase: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/


// Your code here 
function lastVowel(str) { // Declare a function lastVowel that takes in a string as an argument
  const vowels = "aeiouAEIOU"; // Declare a variable vowels that will be equal to all vowels both uppercase and lowercase
  
  for (let i = str.length - 1; i >= 0; i--) { // Iterate through the string backwards with index i
      if (vowels.includes(str[i])) { // Set an if conditional so that if vowels includes a letter in the str
          return str[i]; // It'll return the str at that index
      }
  }
  
  return null; // Return null if no vowel is found
}

console.log(lastVowel('battery')); // 'e'
console.log(lastVowel('TUNNEL')); // 'E'
console.log(lastVowel('dog')); // 'o'
console.log(lastVowel('conventional')); // 'a'
console.log(lastVowel('rhythm')); // null

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = lastVowel;
  } catch (e) {
    module.exports = null;
  }