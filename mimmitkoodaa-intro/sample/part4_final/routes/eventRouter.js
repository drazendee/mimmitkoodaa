// require express event
var express = require('express');
// create a new EventRouter from express
var EventRouter = express.Router();
// require node-fetch so we can easily get the JSON from the Helsinki city APIs
var fetch = require('node-fetch');

// Render the correct index page if someone navigates to the events router
EventRouter.route('/').get(function (req, res) {
  res.render('events/index');
});

EventRouter.route('/post').post(function (req, res) {
  // get the text that was submitted to the form from the request body.
  // the name of the text-field on our form is searchText
  var searchTerm = req.body.searchText;

  // fetch the JSON from Linked Events API in JSON and use our search term for the text parameter
  fetch('https://api.hel.fi/linkedevents/v1/event/?format=json&text='+searchTerm)
    .then(response => response.json()) // parse the response as JSON
    .then(eventData => { // take the parsed JSON as eventData and
      console.log(eventData.data) // Print all the JSON to our console for debugging

      // response should render the event/results page and include the searchTerm and our data
      // we pass in eventData.data because the array that contains the events in the JSON response from Linked Events is called "data"
      res.render('events/results', {searchTerm: searchTerm, events: eventData.data});
    })
    .catch(error => console.error(error)); // in case of error print it to our commandline
});

// export this EventRoute when require this file
module.exports = EventRouter;