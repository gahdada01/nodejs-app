

/**
 * reduce written with a forEach
 */
let numbers1 = [1, 2, 3, 4, 5];

let sum1 = 0; // 1. Initialize accumulator variable

// 2. Iterate over an array
numbers1.forEach((number) => {
  sum1 += number; // 3. Update the accumulator variable
});

console.log(sum1);

// The same code written with a reduce instead of a forEach

let numbers2 = [1, 2, 3, 4, 5];

// 2. Iterate over an array
let sum2 = numbers2.reduce((sum, number) => { // sum will be the previously returned accumulator value
  sum += number; // 3. Update the accumulator variable
  return sum; // Always return the accumulator
}, 0); // 1. Initialize accumulator variable

console.log(sum2);

// We could also store the function in a variable:

const addToSum = (sum, number) => {
  sum += number;
  return sum;
};

let numbers3 = [1, 2, 3, 4, 5];
let sum3 = numbers3.reduce(addToSum, 0);

console.log(sum3);

/**
 *  The callback function passed into the reduce will get called with 4 parameters:
 *  1. The accumulator value
 *  2. The element value
 *  3. The element index
 *  4. The array reduce was called upon
 */

let numbers4 = [1, 2, 3, 4, 5];

let sum4 = numbers4.reduce((sum, number, index, array) => {
console.log(number, 'is the', index, 'in the array:', array);  
  sum += number;
  return sum;
}, 0);

console.log(sum4);

