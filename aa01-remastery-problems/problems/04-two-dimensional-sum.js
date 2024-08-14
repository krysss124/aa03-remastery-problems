/*
Write a function `twoDimensionalSum(arr)` that takes in a 2D array of numbers
and returns the total sum of all numbers.
*/

// Your code here 
function twoDimensionalSum(arr) {
  // Make a sum variable and set it equal to 0
  // Start a for loop with i to incrememnt through the arrays
  // Start a for loop with j and index i to increment through each individual array
  // Return sum variable plus to and equal to arr at index of i and j
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
       sum += arr[i][j];
    }
  }

  return sum;
}


let arr1 = [
    [1, 3],
    [-4, 7, 10],
    [2]
];
console.log(twoDimensionalSum(arr1)); // 19

let arr2 = [
    [],
    [3, 1, 2],
];
console.log(twoDimensionalSum(arr2)); // 6

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
try {
    module.exports = twoDimensionalSum;
  } catch (e) {
    module.exports = null;
  }