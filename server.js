
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  // Send the HTTP header 
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  res.statusCode = 200;
  res.setHeader('Content-Type', 'application/json');

  // Send the response body as "Hello World"
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  // Console will print the message
  console.log(`Server running at http://${hostname}:${port}/`);
});

const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

// This responds with "Hello World" on the homepage
app.get('/', function (req, res) {
  console.log("Got a GET request for the homepage");
  res.send('Hello GET');
})

// This responds a POST request for the homepage
app.post('/', function (req, res) {
  console.log("Got a POST request for the homepage");
  res.send('Hello POST');
})

// This responds a DELETE request for the /del_user page.
app.delete('/del_user', function (req, res) {
  console.log("Got a DELETE request for /del_user");
  res.send('Hello DELETE');
})

// This responds a GET request for the /list_user page.
app.get('/list_user', function (req, res) {
  console.log("Got a GET request for /list_user");
  res.send('Page Listing');
})

// This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res) {   
  console.log("Got a GET request for /ab*cd");
  res.send('Page Pattern Match');
})


const server1 = app.listen(8080, function () {
  const port = server1.address().port;
  
  console.log("Example app listening at http://%s:%s", hostname, port);
});






