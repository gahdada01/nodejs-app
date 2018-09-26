const numbers = [1, 2, 3, 4, 5];

// Log all the numbers in the array

// With a for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// With a forEach
numbers.forEach((number) => {
  console.log(number);
});

// The callback function passed into the forEach will get called with 3 parameters:

// 1. The element value
// 2. The element index
// 3. The array being traversed

const numbers2 = [1, 2, 3, 4, 5];

numbers2.forEach((number, index, array) => {
  console.log(number, index, array);
});

