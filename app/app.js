
const express = require("express");
const bodyParser = require('body-parser');
// Create express app
var app = express();

// Add static files location
app.use(express.static("static"));

// Use the Pug templating engine
app.set("view engine", "pug");
app.set("views", "./app/views");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Get the functions in the db.js file to use
const db = require("./services/db");

// Get the models
const {  Listener } = require("../app/models.js/listeners");
const { Podcaster } = require("../app/models.js/podcasters");
const { Show } = require("../app/models.js/shows");


// Create a route for root - /
app.get("/index", function (req, res) {
  res.render("home");
});
// Create a route for home - /
app.get("/home", function (req, res) {
    var sql = "SELECT * FROM Shows";
    db.query(sql).then((results) => {
     //res.json(results);
      res.render('home', {data:results});
    });
  });

//  Create a route for Single show
app.get("/show-single/:id", async function (req, res) {
    var shId = req.params.id;
    var show = new Show(shId);
    await show.getShowDetails();
    console.log(show);
    res.render("");
  
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
app.get("/shows", function (req, res) {
    var sql = "SELECT * FROM Shows";
    db.query(sql).then((results) => {
     //res.json(results);
      res.render('shows', {data:results});
    });
  });



  //Create a route for all podcasters
  app.get("/hosts", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
        res.render('hosts', {data:results});
    });
});



app.get("/login", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
        res.render('login', {data:results});
    });
});

app.get("/about", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
        res.render('about', {data:results});
    });
});

app.get("/contact", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
        res.render('contact', {data:results});
    });
});
app.get("/signup-listener", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
        res.render('signup-listener', {data:results});
    });
});
app.get("/signup-host", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
        res.render('signup-host', {data:results});
    });
});
app.get("/host-addShow", function (req, res) {
    var sql = "SELECT * FROM Podcasters";
    db.query(sql).then((results) => {
        res.render('host-addShow', {data:results});
    });
});


app.post('/submit-listener', async (req, res) => {
    try {
        const { name, email, password } = req.body;
  

    
        res.redirect('/');
      
    }
  });
  
  app.post('/submit-podcaster', async (req, res) => {
    try {

        }

     catch (error) {
       
    }
  });
  
// POST route to add a new show
app.post('/add-show', async (req, res) => {
    try {
     
    } catch (error) {

    }
  });
  
  
// Authentication route
app.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
  
    try {
  
     
  
    } catch (error) {
  }
  });
  
  // Logout
  app.get('/logout', function (req, res) {
    req.session.destroy();
    res.redirect('/login');
  });
  
// Start server on port 3000
app.listen(3000, function () {
  console.log(`Server running at http://127.0.0.1:3000/`);
});