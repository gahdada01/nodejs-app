const global = require('./globals');

global.fetch('https://www.reddit.com/r/javascript/.json')
  .then(response => response.json())
  .then(result => {
    console.log(result);
  });