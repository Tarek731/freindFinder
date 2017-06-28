// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var characters = require("./app/data/friends");
// var apiRouting = require("./app/routing/apiRoutes.js")
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.NODE_PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));






// routing
// compile database
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});
// routes for api via api routing
// apiRouting(app);

// / Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  Var bestMatch = {

  	name:""
  	frriendDifference
  };

  var newcharacter = req.body;
  var userScore = newcharacter.scores;

var totalDifference = 0;

 for (var i = 0; i < characters.length; i++){

 	console.log(freinds[i].name);
	totalDifference = 0; 	
 } 
  // newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});




app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});