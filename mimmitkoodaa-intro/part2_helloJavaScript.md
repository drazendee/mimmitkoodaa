# Helsinki Events App
In this Mimmit Koodaa -workshop we'll be creating an web app that allows us to search for events in Helsinki using a search term.

Before we go creating that app, lets briefly discuss the role of HTML, CSS and JavaScript by creating a simple search page.

## So, which language should we choose?
The list of languages keeps growing and the existing languages are constantly being developed and updated. Everyone has their own opinion on what's the best language for what purpose but in this excersise we'll focus on HTML and JavaScript.

> :bulb: According to [StackOverflow Developer Study 2018](https://insights.stackoverflow.com/survey/2018/#most-popular-technologies), JavaScript is still the most popular technology amongst their survey respondands.

### In this workshop we will use

* **HTML** to build the base for our website. The text, buttons, inputs and other elements.
  * The outcome will be a working website but it won't have functionality and it won't have any styling.
* **CSS** will allow us to define the look and styling of our page by defining rules based on element types, names and classes.
  * For example all the buttons should be extra wide. The table should have different colored odd rows. Or maybe everything that is a "quote" should have italic text and in gray color.
* **JavaScript** will allow us to add more functionality to the page, update content and react to the users actions.
  * Use this for example to update the news on the site every 15 seconds or to change the background image when the user clicks at button.
  * Or to change the background to be animated in the colors of the rainbow on a click of a buttom.

![Animation of a page with HTML, CSS and JS](images/htmlcssjs.gif)

As you learn more about web development you'll notice that there are different languages: programming, scripting and markup languages. In addition, there are frameworks, engines and so much more.

When you start off, don't spend too much time worrying about what language to choose. JavaScript is a great way to get started, and to build a career with. It's powerful, runs in many different environments and it's very popular (=has a great community).

## Creating the Search-page
So let's get working on creating our page. First, we will create a new HTML page with a search field and a button.

1. Open up your editor (VS Code) and create a new file.
2. Write the base for your html page (sample below)
3. Save the page as index.html on your computer in a new folder on your desktop called "HelsinkiEvents"
4. Open the file with your browser

```html
<!doctype html>

<html>
  <head>
    <title>Helsinki events</title>
  </head>

  <body>
    Hello world!
  </body>
</html>
```

Now there's not much there, so lets create a search box and a button on the page. We'll add a heading, define the html elements (input), give each element a type (text/button). We'll also give both inputs an unique ID, so we can easily find them from our JavaScript code.

Replace the contents of the body with the markup below:
```html
<h1>Find events in Helsinki</h1>

<input type="text" id="searchQuery" />
<input type="button" id="searchBtn" value="Search" />
```

Now if you open the page again in the browser, you should see the updated UI.

Right now our button doesn't really do anything. It doesn't search for events and doesn't really react to our click. So lets see how we can use JavaScript to react to an `onclick` event on the button.

### Using JavaScript to react to the button click
Before we start searching for events, we need to get the value that the user wrote into the search box. So in the next step we will do the following:
1. Add some JavaScript to our page
1. Create a function
    * **Woah woah, hold up there. What's a function?** Well essentially a function encapsulates a task, like "show a alert", in a single line of code. So instead of writing the same lines of code over and over again, every time you want to alert what the user wrote in their search box, you place this into a function and you can then call that function by it's name from different parts of your program (=reuse the same code).
1. Inside our newly created function we tell JavaScript to show an alert with the value the user wrote in the search box on the page.
    * JavaScript can access the HTML document and find elements by their name, ID, class and tag.
1. Tell our button to call our new function when it's clicked

*We don't necessarily need JavaScript to have the button do submit a form for example, but we'll use this as an opportunity to introduce JavaScript. You'll se an example of a form later in this workshop*

Add this JavaScript code to your HTML-page after the button and before you close the body tag.
```javascript
<script>
  function sayHello() {
    alert(document.getElementById('searchQuery').value);
  }
</script>
```
And then update your button to call for that function when it's clicked
```html
<input type="button" id="searchBtn" value="Search" onclick="sayHello()" />
```

Now go to your browser and refresh the page. Write something into the search field and click the button.. and BOOM! You have alert popping up with the text! :boom:

### :mag: 'View source' to see what the browser reads
If you right-click on the page in our browser and select "View Source" you'll see the all the code you wrote.

This is because both HTML and JS are running on the client-side and the client (=browser, in this case) interprets the code and renders it to elements and actions.

Each browser has it's own way of interepting these but thanks to [web standards](https://www.w3.org/standards/), we have a common set of rules that all major browser follow.

### :bulb: Validate the input with simple if/else statements

What if we want to check what the search query is, before we show the alert? Maybe we want to tell the user it doesn't really make sense to search for 'Helsinki' when searching for events in Helsinki, as that's pretty much all of them.

Lets explore vaiable 

* We will create a variable where we store the value of our `searchQuery` input field. We store it in a variable, so we don't have to search for it every time from the document and can have a "copy" of the value in the variable `text`
* Check if the user is searching for "Helsinki" and if so, advise them to search for something else.
* If the search query isn't that, we will show them what they searched for.

```javascript
<script>
  function sayHello() {
    var text = document.getElementById('searchQuery').value;

    if(text == "Helsinki") {
      alert("Hmm.. maybe you want to try a different search word for better results?");
    }
    else {
      alert("You searched for " + text);
    }
  }
</script>
```

Save your changes and head to the browser, refresh your page and test that the validation works properly.

You'll notice that the text comparison is case sensitive, so "helsinki" is not the same as "Helsinki".*

**:mag: Got some extra time?** Use your favorite search engine to find away to ignore case sensitivity when comparing text in JavaScript.

At this point, take a breather and congratulate yourself.. and if you're the expressive type whaile your hands in the air :tada::tada::tada:

**Next :arrow_right: [Running JavaScript on a server with Nodej.js](https://github.com/DrazenDodik/mimmitkoodaa/blob/master/mimmitkoodaa-intro/part3_helloNodeJS.md)**