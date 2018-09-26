/**
 * Map written with a forEach
 */
let numbers1 = [1, 2, 3];
let doubledNumbers1 = []; // 1. Initialize accumulator variable

// 2. Iterate over an array
numbers1.forEach((number) => {
  doubledNumbers1.push(number * 2); // 3. Update the accumulator variable
})

console.log(doubledNumbers1);

// The same code written with a map instead of a forEach

let numbers2 = [1, 2, 3];

let doubledNumbers2 = numbers2.map((number) => {
  return number * 2;
});

console.log(doubledNumbers2);

// We could also store the function in a variable:

const double = (number) => {
  return number * 2;
};

let numbers3 = [1, 2, 3];

let doubledNumbers3 = numbers3.map(double);

console.log(doubledNumbers3);

/**
 * The callback function passed into the map will get called with 3 parameters:
 * 
 * 1. The element value
 * 2. The element index
 * 3. The array map was called upon
 */

let numbers4 = [1, 2, 3];

let doubledNumbers4 = numbers4.map((number, index, array) => {
  console.log(number, 'is the', index, 'in the array:', array);  
  return number * 2;
});

console.log(doubledNumbers4);

