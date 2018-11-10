// lets require express, so we can use it here
var express = require('express');
// require the body-parser so we can easily read data that is passed from our form
var bodyParser = require('body-parser');

// create a new instance of express
var app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const EventRouter = require('./routes/eventRouter');
app.use('/events', EventRouter);

// tell Express that if someone navigates on the root of our website '/' we should send them a hello back
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});

// tell express that we will use port 3000 for this webserver
app.listen(3000, function () {
  console.log('Express is ready and listetning at http://localhost:3000!');
});