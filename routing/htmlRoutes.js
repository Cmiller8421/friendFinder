
//3. Your `htmlRoutes.js` file should include two routes:
//A GET Route to `/survey` which should display the survey page.
//A default, catch-all route that leads to `home.html` which displays the home page. 


  // Routes
// =============================================================
//When the page loads this will pop up
var express = require("express");
var app = express();
var path = require("path");
var bodyParser = require("body-parser");

// Basic route that sends the user first to the AJAX Page
module.exports = function(app){
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
  
  //add
  app.get("/survey", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));

  });
}