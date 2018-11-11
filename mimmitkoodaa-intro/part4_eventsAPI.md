# It's all about APIs :metal:
You might have hear about APIs before, as it seems that they're popping up in all kinds of conversations.

>In computer programming, an application programming interface (API) is a set of subroutine definitions, communication protocols, and tools for building software. - Wikipedia

Essentially, an API is something that you expose either internally between your apps(s) or expose to external apps allow them to access certain functionality or data that you haveö

The APIs we'll be using come from the city of Helsinki (https://api.hel.fi/). They have different types of data available about the city, transportation, where they snowplows are and also, what events are happening in Helsinki through the [Linked Events API](https://api.hel.fi/linkedevents/v1/).

> APIs can be completely open and free, like the ones from the city of Helsinki but they can also behind authentication (like Yle Areena) and of course some APIs having pricing.
>
> Sometimes we'll use APIs to access data, like information about the upcoming events in Helsinki. And sometimes we use APIs like Computer Vision service on Microsoft Azure to send a photo to the machine learning algorithm and ask it to analyze it.

## In what format to APIs provide data?
There are several different formants in which APIs can provide you with data, but one of the most common ones is **JSON** (JavaScript Object Notation). It's basically a commonly agreed format to share data, that's easy for both humans and machines to read and process.

JSON Object example from [W3C](https://www.w3schools.com/js/js_json_objects.asp), where we have an object called "myObj" that has a three properties: name (text), age (number) and cars (array). In addition each car has just one property (the name).
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

When you navigate to the Linked Events API you'll be able to request JSON as the format, so we can use the data in our application.

JSON Response sample for [search query "malmi" from Linked Events API](https://api.hel.fi/linkedevents/v1/event/?format=json&text=malmi).

* There ar two arrays at the first level: meta and data
* Under data we can find an array that contains events
* Each event contains properties like event_status and start_time. Events also have arrays like description, which contains fi, sv and en version.
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

## Building our #HEL events search application
Lets start building our web app for searching events from Helsinki, using the Linked Events API described above.

Our app will consist of the following pages

* Home  - A simple welcome page and a link to search for events
* Event seach - A simple form to search for events
* Results - To show the events that match the search query

We'll be fetching matching events on server-side and then passing those results to the results page. To make it easier for us to generate the HTML-markup across the pages, we'll use a JavaScript templating language called EJS.

Example of using EJS inside of HTML (this would show the value of the JavaScript variable searchQuery)
```html
You searched for <%=searchQuery%>
```

Install ejs from the terminal: `npm install ejs --save`

### Lets create our new pages
1. Create a new folder called 'public' and create a `index.html` page inside it. This will be our new home page
```html
<!DOCTYPE html>
<html>
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
3. Create `index.ejs` inside the 'events'-folder. In this file we'll use the EJS templating language and display a form that will POST the submission to /events/post
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
      <input type="text" id="searchText" name="searchText" />
      <button type="submit">Search</button>
    </form>
    
  </body>
</html>
```

Now we'll start exploring more of the features that Express brings to us.

In your index.js file add the following lines, after creating a new instance of Express.

```javascript
// tell express to server our static files from the public folder
app.use(express.static('public'));
// tell express that we'll use ejs as our view engine
app.set('view engine', 'ejs');
```

Then update our GET of '/' to send the new index.html file we created under the public folder

```javascript
// update the root request to send the index.html file back as our home page
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname,'public', 'index.html'));
});
```

Now if you run `node index.js` and open your browser at http://localhost:3000/ you should see the new index page :tada::tada:

However, you'll notice that if you click the link to search for events it'll say that it can't get that page. For this we'll need to setup a router.

### Routing GET- and POST-requests and passing data between pages :outbox_tray: :inbox_tray:

First we'll need to install a package to make it easier to parse data from our requests, like the form submission. Run
`npm install body-parser --save` to install body-parser

Then update your index.js to use body-parser when passing pages and data around. Add the following lines to your index.js

```javascript
// require the body-parser so we can easily read data that is passed from our form
var bodyParser = require('body-parser');

// tell express to use bodyparser and JSON
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
```

So far we've only used one _route_ in our express confirguration to define that on requests to '/' Express should send back /public/index.html.

Now lets introduce more routes, that will define what to deliver on different requests we're getting (/events, /events/post)

1. To keep this a bit cleaner we'll create a new folder in our project called _routes_ and inside it add a new file _eventRouter.js_. This will manage all the requests under http://localhost:3000/events/. Add the following lines to eventRouter.js

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

2. You might have noticed that we're requiring node-fetch inside that page. We didn't install it yet, so lets install it with `npm install node-fetch --save`

3. Now go back to index.js and tell Express to get our new Router definition and use it in everything under localhost:3000/events/ by adding the following lines after the existing app.use definitions

```javascript
const EventRouter = require('./routes/eventRouter');
app.use('/events', EventRouter);
```

Test your app by running `node index.js` and following the link on http://localhost:3000/ to the events search page, ensuring that your router is working properly.

### Fetch the API data on button click
Remember that in our HTML of `views/events/index.ejs` we defined that when the form is submitted it should submit to events/post. Lets now build the route for that.

Go to your eventRounter.js and add a new route before module.exports

```javascript
EventRouter.route('/post').post(function (req, res) {
  // get the text that was submitted to the form from the request body.
  // the name of the text-field on our form is searchText
  var searchTerm = req.body.searchText;
});
```
Now when the form is posted (events/post), we'll get to this route and we will be able to use the requests body to get the value of the searchbox (that we named searchText in our HTML).

Now lets fetch data from the Linked Events API by passing it our search parameter

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

Create a new file `results.ejs` in views/events. Inside it create a title and a table in which we'll show the event results.

```html
<!DOCTYPE html>
<html>
  <head>
    <title>#HEL Event results</title>
  </head>
  <body>

    <h1>Results for </h1>
    <table id="resultsTable">
      <thead>
        <td>Name</td>
        <td>Description</td>
        <td>Image</td>
      </thead>

    </table>

  </body>
</html>
```

Run your app again, navigate to the search form and submit a query to ensure the page is rendering correctly. You should see an empty table with Name, Description and Image.

Of course this is just the skeleton for our page and doesn't contain any actual data. Now we'll get to add some EJS magic :sparkles:

:exclamation: Remember in our eventRouter.js we said we want to pass the **searchTerm** and **events** objects to the results page :exclamation:

First lets update the title of the page to show the searchTerm. We use a special ejs syntax for this:

`<h1>Results for <%=searchTerm%></h1>`

Using <%= and %> we tell ejs to render the value of a JavaScript variable.

Next we need to go through the events object that contains all the JSON events we've gotten from the Linked Events API and render them on our table. In this case we'll render the name of the event and its short description.

Please the following code in `results.ejs` after `</thead>`

```javascript
/*For as long as i is smaller than the number of items in the events collection loop through this. For each item then show name and short_description*/
<% for(var i=0; i < events.length; i++) { %>
  <tr>
    <td><%= events[i].name.fi %></td>
    <td><%= events[i].short_description.fi %></td>
  </tr>
<% } %>
```

The `name` and `short_description` properties are defined by the API. Go back and have a look at the JSON you received from Linked Events to understand the structure of the JSON they provide.

The JSON data contains properties like description_short that are not mandatory fields, which means that sometimes there isn't a short_description available. So if you try to search for some terms (like currently 'punavuori') that contains events without a short_description, you will see a JavaScript error like the one below:

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

:mag: Some of the events have an image attached to them. Try to add an image to the table.

*:tada::tada: You have now completed the workshop! :tada::tada::tada:* Pat yourself on the back, ask a friend to pat you on the back, celebrate and look at the glory that is your Helsinki Events app.

**Next :arrow_right: Explore the JSON to include other relevant fields in our table.**