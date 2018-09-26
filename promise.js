
// Using Promise.then()
var promise1 = new Promise((resolve, reject) => {
    setTimeout(() => { 
      resolve('foo');
    }, 300);
});
  
promise1.then(function(value) { 
    console.log(value);
    // expected output: "foo"
});
  
console.log(promise1);
// expected output: [object Promise]

// Using Promise.all()
var promise11 = Promise.resolve(3);
var promise22 = 42;
var promise33 = new Promise( (resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise11, promise22, promise33]).then(function(values) {
  console.log(values);
});
// expected output: Array [3, 42, "foo"]

// Using Promise.catch()
var promise12 = new Promise(function(resolve, reject) {
    throw 'Uh-oh!';
});
  
promise12.catch(function(error) {
    console.log(error);
});
// expected output: Uh-oh!









  