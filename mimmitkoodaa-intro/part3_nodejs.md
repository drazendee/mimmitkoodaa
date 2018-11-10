# Running JavaScript in the backend with Node.js

In the previous part, we used HTML and JavaScript to create the base for our page. All of this code was in our .html page that we sent to the browser and the browser rendered it to a title, input field and a button. You could see all of your HTML-markup and JS-code when you right-clicked the page and selected "View Source".

Next well talk about the backend. In our case it's the part that will get the search query from the user and then in the background find the events in Helsinki that match that query.

## Que? What's this backend? :information_desk_person:
When you go to a website you interact with the front-end, the elements, the text, the buttons etc. But usually the data that is displayed here, for example the list of events in Helsinki, is stored in the database — which is a part of the backend.

Usually the backend consists of three parts:

1. The server which distributes content, like html pages, images, videos etc.
2. The application logic that might contain things like authentication, accessing databases to fetch information etc.
3. The database which contains.. you guessed it, data!

*There are different types of servers, databases (SQL, non-SQL and others) different architectures (the MVVMs, MVCs and others of the world). You'll stumble across these topics once you get deeper on your webdev journey but for now you just need to understand the most common three parts of the backend*

## Why would I run something in the backend?
So why are we talking about the backend? Why not just serve HTML pages with all the data and use JavaScript to filter the right events to show the user? ...I mean, technically you could create that but before you do that, maybe consider the below *(in addition to the fact that having everything part of that one page would be a unmaintainable horrible mess marinated in your tears and suffering)*

* You might be serving more than you need, causing the page size and load times to grow.
  * Would you rather send the browser a file with five events that contain the word "food" or a file with all the possible events in Helsinki?

* Often you don't want to share all the business logic back to the users browser but keep some keys, authorizations and logic in the backend.

* Doing data validation and authentication/authorization is safer on the backend, rather than doing it in the clients browser.
  * For example, you can tell your browser to disable JavaScript. Now all your data validation that is written in JavaScript doesn't work anymore.

* When you run code on the browser, you're dependent on it's resources (CPU, memory, network etc.). When running your logic in the server side, you get to use your servers and can then just send the browser the outcome.

## Node.js - a JavaScript runtime on the server-side
Node.js enables you to write and run JavaScript without the browser and do all of your logic on the server-side and tackle the issues we've listed above.

> :bulb: JavaScript hasn't always been popular in the backend, but we'll leave that history lesson for another time.

But that's not all. Node.js has a lot of modules that you can leverage to interact with files, networking, functions, data and more. One way to think about it is that Node.js has a lot of things built-in and makes it easier to use JavaScript in the backend.

Node.js is very extensible and has an active community writing packages that are distributed through the Node Package Manager (NPM) - which is the largest package repository in the world.

>Take a second to take this in...there is a collection of over 800,000 building blocks (=packages) that someone else has written to make JS development easier for the rest of us. These packages are developed and maintain by the community and you can leverage them for free :pray:


## Lets start using Node.js
So lets start creating our Node.js application. We'll first install Node.js on your machine and then create our Hello World on Node.js

> Install Node.js from project site https://nodejs.org/en/download/

Once you've installed NodeJS go back to VS Code from the toolbar select View->Terminal. This will open the integrated terminal inside the editor, so you don't have to jump between different windows.

Start by initializing the project and linking it to the node package manger (npm), by writing the following in the VS Code Terminal.

```javascript
npm init
```
You will be asked a series of questions, you can type in your answers or just hit enter to accept the default values. Your answers will be included in the package.json file where you will define properties, scripts and depencies for your app.

Now create a new file called index.js (File->New File) and call it index.js

Inside index.js add the following line, so we can ensure Node.js is installed and running properly.
```javascript
console.log("Hello World, from Node.js");
```

Now to run your new app, write the following in the Terminal `node run index.js`

:tada: magical, isn't it?

## Lets get a web app up and running
Earlier we talked about packages and how the node package manager gives you access to hundreds of thousands of ready made packages, well now it's time to get one of those great packages.

We will install [Express.js](https://expressjs.com/) that's a web framework for Node.js, containing a various tools to make it easy for you to create and run your web applications.

So, to install express (in Terminal)
```
npm install express --save
```
and let the magic begin :sparkles: npm will now fetch the required modules for you and get express setup for this project. You'll see a new folder appear called *node_modules* and under it you'll see the required modules installed. You'll also see that the *package.json* file was edited and it now contains a new dependency for express (=telling the app that we need to install express before we can run it)

> Sure this is great that a lot of people wrote ready made code and packaged it nicely so I can use it, but how can I be sure it's not packed with malicious code?
>
>Valid question, and here comes the magic of open-source communities. Check out the [Express package](https://www.npmjs.com/package/express) on the npm site. There you can also see how many time it's downloaded, who is contributing, open issues and you can click on the repository link to view the source code on GitHub. All transparent.

### Use express in our app
Now that we have express installed we can use it in our app. We'll tell it what to do when someone goes to our local website and what port we will use to listen for requests. 

Replace the contents of your index.js file with the code below:

```javascript
// lets require express, so we can use it here
var express = require('express');

// create a new instance of express
var app = express();

// tell Express that if someone navigates on the root of our website '/' we should send them a hello back
app.get('/', function (req, res) {
  res.send('Hello from Node.js!');
});

// tell express that we will use port 3000 for this webserver
app.listen(3000, function () {
  console.log('Express is ready and listetning at http://localhost:3000!');
});
```

Now again in your terminal run `node index.js` and then open your browser at http://localhost:3000/

Now your browser is navigating to the root ('/') of your server (localhost) at port 3000. Express responds with the response we defined above.

:bulb: Now look at the source of your page, you'll see  only the text and not the whole JavaScript. Node.js has executed all the code and Express has responded to the request by sending back the response text, but the browser never saw the rest of the code we wrote above.

> localhost is a hostname that means "this computer".
>
> To access a local web server we go to http://localhost/ from our browser
> 
> By default the browser will use port 80, which is the standard port for HTTP. In our sample above we use port 3000, in case you already have some service listening at the default port (80) - but you could put any available port there, it doesn't need to be 3000.

You know what time is it? It's time to take a breather and congratulate yourself.. and if you're the expressive type whaile your hands in the air :tada::tada::tada:

[Working with APIs](https://github.com/DrazenDodik/mimmitkoodaa/blob/master/mimmitkoodaa-intro/part4_APIs.md)
