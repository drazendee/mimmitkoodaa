# It's all about APIs
You might have hear about APIs before. It seems that they're popping up in all kinds of conversations, also out side of the 

>In computer programming, an application programming interface (API) is a set of subroutine definitions, communication protocols, and tools for building software. - Wikipedia

Essentially with it's something that you expose either internally between your app(s) or expose to external apps built by others, to access certain functionality from your app.

The APIs we'll be using come from the city of Helsinki. They have various data about the city, transportation, where they snowplowes are and also, what events are happening in Helsinki. They have a collection of data and logic, that they're exposing to everyone to use.

> APIs can also be completely open and free, like the ones from the city of Helsinki but they can also behind authentication (like Yle Areena) and of course some APIs having pricing.
>
> Sometimes we use APIs to access data, like information about the upcoming events in Helsinki. And sometimes we use APIs like Computer Vision service on Microsoft Azure to send a photo to the machine learning algorithm and ask it to analyze it.

:mag: You can find a list of the APIs provided by the city of Helsinki here https://api.hel.fi/ We'll be using the [Linked Events API](https://api.hel.fi/linkedevents/v1/)

## What kind of data do APIs provide?
There are several different formants in which APIs can provide you with data, but one of the most common ones is **JSON** (JavaScript Object Notation). It's basically a commonly agreed format to share data, that's easy for both humans and machines to read.

JSON Object example from [W3C](https://www.w3schools.com/js/js_json_objects.asp)
```json
myObj = {
    "name":"John",
    "age":30,
    "cars": {
        "car1":"Ford",
        "car2":"BMW",
        "car3":"Fiat"
    }
 }
 ```

When you navigate to the Linked Events API you'll be able to request JSON as the format, so we can usually use it in our application.

JSON Response sample for [search query "malmi" from Linked Events API](https://api.hel.fi/linkedevents/v1/event/?format=json&text=malmi):
```json
{
  "meta": {
    "count": 4384,
    "next": "https://api.hel.fi/linkedevents/v1/event/?format=json&page=2&text=malmi",
    "previous": null
  },
  "data": [
    {
      "id": "kulke:46574",
      "location": {
        "@id": "https://api.hel.fi/linkedevents/v1/place/tprek:8740/?format=json"
      },
      "keywords": [...],
      "super_event": null,
      "event_status": "EventScheduled",
      "external_links": [],
      "offers": [],
      "data_source": "kulke",
      "publisher": "ahjo:u4804001050",
      "sub_events": [],
      "in_language": [],
      "audience": [],
      "created_time": "2018-11-07T13:18:18.806625Z",
      "last_modified_time": "2018-11-08T14:14:28.766834Z",
      "date_published": null,
      "start_time": "2018-12-14T15:00:00Z",
      "end_time": null,
      "custom_data": null,
      "super_event_type": null,
      "description": {
        "fi": "<p>Pukinmäen taidekoulujen eri taiteenalojen (teatteri, tanssi, sirkus) yhteistyöprojekti, jossa Lumikki, Tähkäpää ja Tuhkimo ovat paenneet satumaailmasta ja nyt satuihin pitäisi löytää äkkiä uudet prinsessat!</p><p>Niinpä kaksi näppärää elämäntapavalmentajaa ryhtyvät pelastamaan satumaailmaa.</p><p>He onnistuvat houkuttelemaan iloisesta hirviöjoukosta prinsessoille sijaiset ja loihtivat heidät satujen kaunottariksi. Mutta onko satumaailma ja kaunottarena olo niin ihanaa kuin ajatellaan? Ja onko ulkoinen kauneus avain onneen?</p><p>Esitys koskettaa, naurattaa ja kertoo tuttujen satujen hahmoista sekä satumaailmasta sinulle ehkä jotain uutta.</p><p>Esitys sopii koko perheelle. Esityksen kesto noin 40 min. Tervetuloa!</p><p>Ohjaus: Vilma Salmi<br>Sirkusohjaus ja koreografiat: Sanni Sarlin<br>Käsikirjoitus: Vilma Salmi, Sanni Sarlin ja työryhmä<br>Hirviötanssin koreografia: Salli Tommola<br>Puvustus: Elisa Auvinen</p><p>Kesto noin 40 min</p><p>Ryhmälippu 7,5 €/hlö</p>",
        "sv": "<p>På scenen glänser Pukinmäki taidekoulus karismatiska unga uppträdare i olika åldrar.</p><p>Cirkusgrenar vi får se är akrobati, luftakrobati, balansgång, jonglering och clowneri. Uppträdandet är för hela familjen.</p>",
        "en": "<p>The charismatic young performers from Pukinmäki art schools are set to take the stage.</p><p>The circus acts include acrobatics, aerial acrobatics, balancing, juggling, and clownery. The shows are fun for the entire family.</p>"
      },
      "info_url": {
        "fi": "http://www.malmitalo.fi/fi/tapahtumat/event/8500AA4962C0A08E2B8249131AC733B8/Kaunotar_vai_Hirvio",
        "sv": "http://www.malmitalo.fi/sv/evenemangen/event/8500AA4962C0A08E2B8249131AC733B8/Kaunotar_vai_Hirvio",
        "en": "http://www.malmitalo.fi/en/events/event/8500AA4962C0A08E2B8249131AC733B8/Kaunotar_vai_Hirvio"
      },
      "short_description": {
        "fi": "Pukinmäen taidekoulujen eri taiteenalojen (teatteri, tanssi, sirkus) yhteistyöprojekti, jossa Lumikki, Tähkäpää ja Tuhkimo ovat paenneet satumaailmasta ja nyt satuihin pitäisi löytää äkkiä uudet prinsessat!",
        "sv": "På scenen glänser Pukinmäki taidekoulus karismatiska unga uppträdare i olika åldrar.",
        "en": "The charismatic young performers from Pukinmäki art schools are set to take the stage."
      },
      "provider": null,
      "name": {
        "fi": "Kaunotar vai Hirviö – Pukinmäen taidekoulut",
        "sv": "Kaunotar vai Hirviö – Pukinmäen taidekoulut",
        "en": "Kaunotar vai Hirviö – Pukinmäen taidekoulut"
      },
      "location_extra_info": null,
      "@id": "https://api.hel.fi/linkedevents/v1/event/kulke:46574/?format=json",
      "@context": "http://schema.org",
      "@type": "Event/LinkedEvent",
      "images": [
        {
          "id": 48328,
          "license": "event_only",
          "created_time": "2018-11-07T13:18:18.794727Z",
          "last_modified_time": "2018-11-07T13:18:18.794747Z",
          "name": "",
          "url": "http://www.malmitalo.fi/instancedata/prime_product_resurssivaraus/kulke/embeds/EventPic_634760.jpg",
          "cropping": "",
          "photographer_name": null,
          "data_source": "kulke",
          "publisher": "ahjo:u4804001050",
          "@id": "https://api.hel.fi/linkedevents/v1/image/48328/?format=json",
          "@context": "http://schema.org",
          "@type": "ImageObject"
        }
      ]
    }
```

## Building the application
Lets start building our web app for searching events from Helsinki.

Our app will consist of the following pages

* Home  - Welcome to the site
* Event seach - A simple form to search for events
* Results - Show all the events that match the search query

We'll be fetching matching events on server-side and then passing that results to the webpage. To make it easier for us to generate the HTML-markup across the pages, we'll use a JavaScript templating language called EJS.

Install ejs from the terminal: `npm install ejs --save`

### Lets create our new pages
1. Create a new folder called 'public' and create a index.html page inside it. This will be our new home page
```html
<!DOCTYPE html>
<html lang="en">
<head>
   <title>Helsinki City</title>
</head>
<body>
  <h1>#HEL Events</h1>
  Exploring open APIs from city of Helsinki
  <br />
  <a href="/events">Search for events</a>
</body>
</html>
```
2. Create a folder called 'views' and inside it another folder called 'events'.
3. Create index.ejs inside the 'events'-folder. On this file we say we want a form that will post it's results to /events/post
```html
<!DOCTYPE html>
<html>
  <head>
    <title>Search in #HEL</title>
  </head>
  <body>
    <h1>Search for events in Helsinki</h1>

    <form method="post" action="/events/post">
      <label for="searchText">Event name</label>
      <input type="text" class="form-control" id="searchText" name="searchText" />
      <button type="submit">Search</button>
    </form>
    
  </body>
</html>
```

Now we'll start exploring more of the features that Express brings to us.

In your index.js file add/pdate the following lines

```javascript
// tell express to server our static files from the public folder
app.use(express.static('public'));
// tell express that we'll use ejs as our view engine
app.set('view engine', 'ejs');
```

```javascript
// update the root request to send the index.html file back as our home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});
```

Now if you run `node index.js` and open your browser at http://localhost:3000/ you should see the new index page :tada::tada:

However, you'll notice that if you click the link to search for events to try to submit your search query, it throws you an error. Lets look into this.

### Handling POST-requests and passing data :outbox_tray: :inbox_tray:

First we'll need to install a package to make it easier to parse data from our requests. Run
`npm install body-parser --save` to install body-parser

Then update your index.js to use body-parser when passing pages and data around. Add the following lines to your index.js

```javascript
// require the body-parser so we can easily read data that is passed from our form
var bodyParser = require('body-parser');

// tell express to use bodyparser and JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
```

So far we've only used one _route_ in our express confirguration. We've told Express that if someone navigates to the root directory, we should send them the public/index.html file.

Now lets introduce more routes, that will explain to Express what files to deliver on the pages.

1. To keep this a bit cleaner we'll create a new folder in our project called _routes_ and inside it add a new file _eventRouter.js_ and add the following lines:
```javascript
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

// export this EventRoute when require this file
module.exports = EventRouter;
```

2. Now go back to index.js and tell Express to get our new Router definition and use it in everything under localhost:3000/events/ by adding the following lines after the existing app.use definitions

```javascript
const EventRouter = require('./routes/eventRouter');
app.use('/events', EventRouter);
```

Test your app by running `node index.js` and following the link on http://localhost:3000/ to the events search page.

### Fetch the API data
Remember that in our HTML of _views/events/index.ejs_ we defined that our form submission should go to events/post. Lets now build the route for that and fetch for the API data

Go to your eventRounter.js and add a new route before module.exports

```javascript
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
```

Can you guess what's the next step? Yep. We need to create the events/results page to show our results.

Create a new file _results.ejs_ in views/events. Inside it create a title and a table in which we'll show the event results.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Event results for </title>
  </head>
  <body>

    <table>
      <thead>
        <td>Name</td>
        <td>Description</td>
        <td>Image</td>
      </thead>

    </table>

  </body>
</html>
```

Run your app again, navigate to the search form and submit a query to ensure the page is rendering correctly.

Of course this is just the skeleton for our page and doesn't contain any actual data. Now we'll get to add some EJS magic :sparkles:

>:exclamation::exclamation: Remember in our eventRouter.js we said we want to pass the **searchTerm** and **events** objects to the results page

First lets update the title of the page to show the searchTerm. We use a special ejs syntax for this:

`<title>Event results for <%=searchTerm%></h1>`

Using <%= and %> we tell ejs to render here a JavaScript property that we've passed

Next we need to go through the events object that contains all the JSON events we've gotten from the Linked Events API and render them on our table. In this case we'll render the name of the event and its short description.

```javascript
// For as long as i is smaller than the number of items in the events collection loop through this. For each item then show name and short_description
<% for(var i=0; i < events.length; i++) { %>
  <tr>
    <td><%= events[i].name.fi %></td>
    <td><%= events[i].short_description.fi %></td>
  </tr>
<% } %>
```

> The name and short_description events are defined by the API. Go back to look at the JSON you received from Linked Events to understand the structure of the JSON they provide.

The JSON data contains properties like description_short that are not mandatory fields, which means that sometimes there isn't a short_description available. So if you try to search for some terms (like currently 'punavuori') will result in an JavaScript error like the below:

![short_description missing](images/short_descriptionError.png)

Lets fix this with a simple if-statement
```javascript
<% if(events[i].short_description != null) { %>
  <td><%= events[i].short_description.fi %></td>
<%} 
else { %>
  <td>No description available</td> 
<%} %>
```

>:mag: Some of the events have an image attached to them. Try to add an image to the table.