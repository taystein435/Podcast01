// Import express.js
const express = require("express");

// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Use the Pug templating engine
app.set("view engine", "pug");
app.set("views", "./app/views");

// Get the functions in the db.js file to use
const db = require("./services/db");

// Get the models
const {  Listener } = require("../app/models.js/listeners");
const { Podcaster } = require("../app/models.js/podcasters");
const { Show } = require("../app/models.js/shows");


// Create a route for root - /
app.get("/", function (req, res) {
  res.render("index");
});

//  Create a route for Single show
app.get("/show-single/:id", async function (req, res) {
    var shId = req.params.id;
    var show = new Show(shId);
    await show.getShowDetails();
    console.log(show);
    res.send(show)
  
});

// Create a route for Single Podcasters
app.get("/podcaster-single/:id", async function (req, res) {
    var poId = req.params.id;
    var podcaster= new Podcaster(poId);
    await podcaster.getPodcasterDetails();
    console.log(podcaster);
    res.send(podcaster)

});

// Create a route for Single Listener
app.get("/listener-single/:id", async function (req, res) {
    var liId = req.params.id;
    var listener= new Listener(liId);
    await listener.getListenerDetails();
    console.log(listener);
    res.send(listener)

});



//Create a route for all shows 
app.get("/all-shows", function (req, res) {
    var sql = "SELECT * FROM Shows";
    db.query(sql).then((results) => {
     //res.json(results);
      res.render('all-shows', {data:results});
    });
  });



  //Create a route for all podcasters
  app.get("/all-podcasters", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
      res.json(results);
    });
  });
  //Create a route for all listeners
  app.get("/all-listeners", function(req, res) {
      var sql = 'SELECT * FROM Listeners';
      db.query(sql).then(results => {
          res.json(results);
      });
  });
  //Create a route for all reviews
  app.get("/all-reviews", function(req, res) {
      var sql = 'SELECT * FROM Reviews';
      db.query(sql).then(results => {
          res.json(results);
      });
  });
  //Create a route for all subsriptions
  app.get("/all-subscriptions", function(req, res) {
      var sql = 'SELECT * FROM Subscriptions';
      db.query(sql).then(results => {
          res.json(results);
      });
  });
  



// Start server on port 3000
app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
});
