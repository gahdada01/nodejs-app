/**
 * Assign a function to a variable
 */

// Assign an Anonymous Function to a variable
const whatTimeIsIt = () => {
    console.log('It is: ', new Date().toTimeString());
};
 
// Invoke the function using the variable
whatTimeIsIt();

/**
 * Pass a function as an argument
 */

const sayHello1 = () => {
    return 'Hello, ';
};
 
greeting = (helloFn, name) => {
    console.log(helloFn() + name);
};
 
// Pass `sayHello` as an argument to `greeting` function
greeting(sayHello1, 'JavaScript!');

/**
 * Return a function
 */

const sayHello2 = () => {
    return () => {
        console.log("Hello!");
    };
};

/**
 * How would we invoke the inner function??
 */

//  1. Store the return value in a variable and invoke it
const logHello = sayHello2();
logHello();

// 2. Invoke the return value on the same line
sayHello2()();

