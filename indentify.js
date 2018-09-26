const global = require('./globals');

global.fetch('https://www.reddit.com/r/javascript/.json')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  });


/**
 *  The .then of a Promise is a higher order function. 
 *  The function passed to it will be called when the promise is resolved.
 */

const fetch = require('cross-fetch');

fetch('https://www.reddit.com/r/javascript/.json')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  });

//  Can also be written as:

const responseJSON = response => response.json();
const logResult = result => {
    console.log(result);
};
  
fetch('https://www.reddit.com/r/javascript/.json')
    .then(responseJSON)
    .then(logResult);

