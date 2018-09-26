
/**
 * Filter written with a forEach
 */
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evenNumbers = []; // 1. Initialize accumulator variable

// 2. Iterate over an array
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number); // 3. Update the accumulator variable
  }
});

console.log(evenNumbers);

// The same code written with a filter instead of a forEach

let numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers1 = numbers1.filter((number) => {
  return number % 2 === 0;
});

console.log(evenNumbers1);

// We could also store the function in a variable:

const isEven = (number) => {
  return number % 2 === 0;
};

let numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers2 = numbers2.filter(isEven);

console.log(evenNumbers2);

/**
 *  The callback function passed into the filter will get called with 3 parameters:
 *  
 *  1. The element value
 *  2. The element index
 *  3.The array filter was called upon
 */

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNumbers3 = numbers3.filter((number, index, array) => {
  console.log(number, 'is the', index, 'in the array:', array);  
  return number % 2 === 0;
});

console.log(evenNumbers3);



