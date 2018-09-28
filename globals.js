/**
 * This is where you will declaire all your reusable and commomly use functions and packages
 */

const fetch = require('cross-fetch');

const setResponse = (res) => {
    // Send the HTTP header 
    // HTTP Status: 200 : OK
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    return res
  }

module.exports = {
    fetch,
    setResponse
}