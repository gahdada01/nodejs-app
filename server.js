
const http = require('http');
const express = require('express');
const app = express();
const globals = require('./globals');

const hostname = '127.0.0.1';
const port = 8000;

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  res = globals.setResponse(res);;
  res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res = globals.setResponse(res);;
  res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res = globals.setResponse(res);;
  res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res = globals.setResponse(res);;
  res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
  console.log("Got a GET request for /ab*cd");
  res = globals.setResponse(res);;
  res.send('Page Pattern Match');
})

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});








