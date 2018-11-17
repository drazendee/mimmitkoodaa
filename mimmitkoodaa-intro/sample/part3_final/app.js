// lets require express, so we can use it here
var express = require('express');

// create a new instance of express
var app = express();

// tell Express that if someone navigates on the root of our website '/' we should send them a hello back
app.get('/', function (req, res) {
  res.send('Hello from Node.js!');
});

// tell express that we will use port 3000 for this webserver
app.listen(3000);