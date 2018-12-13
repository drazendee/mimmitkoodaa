// require express event
var express = require('express');

// create a new EventRouter from express
var VisionRouter = express.Router();

// require node-fetch so we can easily get the JSON from the Helsinki city APIs
var fetch = require('node-fetch');

// require formidable so that we can easily parse file input
var formidable = require('formidable');

// require fs to generate stream out of our file
var fs = require('fs');


VisionRouter.route('/post').post(function (req, res) {
  // get the file that was submitted to the form from the request body.
  // the name of the file submision on our form is imageFile

  var form = new formidable.IncomingForm();
  form.parse(req, function(err, fields, files) {
    let fileStream = fs.createReadStream(files.imageFile.path);
    uriBase = "https://westeurope.api.cognitive.microsoft.com/vision/v2.0/analyze?visualFeatures=Description,Tags&subscription-key=985a04bb1dae4bf7977afba340a4a995";
    
    fetch(uriBase, { method: 'POST', body: fileStream, headers: { 'Content-Type': 'application/octet-stream' } })
    .then(response => response.json())
    .then(imageData => { 
      console.log(imageData);
        res.render('vision/results', {tags: imageData.tags });
    })
    .catch(error => console.error(error)); // in case of error print it to our commandline
  });

});

// export this EventRoute when require this file
module.exports = VisionRouter;