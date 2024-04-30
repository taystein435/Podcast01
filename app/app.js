const express = require("express");
const Listener  = require("../app/models/listeners");
const Podcaster  = require("../app/models/podcasters");
const Show  = require("../app/models/shows");
const bcrypt = require("bcryptjs");
const bodyParser = require('body-parser');
const app = express();
// Set the sessions
var session = require('express-session');
app.use(session({
  secret: 'secretkeysdfjsflyoifasd',
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

<<<<<<< HEAD
app.use(express.static("static"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "pug");
app.set("views", "./app/views");

// Get the functions in the db.js file to use
const db = require("./services/db");


app.get("/", function (req, res) {
  // Check if user is logged in
  if (req.session.loggedIn) {
      var sql = "SELECT * FROM Shows";
      db.query(sql).then((results) => {
          res.render("home", { data: results, message: `Welcome, ${req.session.uid}!` });
      });
  } else {
      // If not logged in, render the home page without a welcome message
      var sql = "SELECT * FROM Shows";
      db.query(sql).then((results) => {
          res.render("home", { data: results, message: null }); // Passing null as the message
      });
  }
});
=======
app.get("/", function (req, res) {
    // Check if user is logged in
    if (req.session.loggedIn) {
        var sql = "SELECT * FROM Shows";
        db.query(sql).then((results) => {
            res.render("home", { data: results, message: Welcome, ${req.session.uid}! });
        });
    } else {
        // If not logged in, render the home page without a welcome message
        var sql = "SELECT * FROM Shows";
        db.query(sql).then((results) => {
            res.render("home", { data: results, message: null }); // Passing null as the message
        });
    }
  });
v  
>>>>>>> b7a1ffe338fa41d980698ef8c1da48098ed3cbc0


// Create a route for Single show
app.get("/show-single/:id", async function (req, res) {
  var shId = req.params.id;
  var show = new Show(shId);
  await show.getShowDetails();
  console.log(show);
  res.render("show-single", { show: show });
});

// Create a route for Single Podcasters
app.get("/podcaster-single/:id", async function (req, res) {
  var poId = req.params.id;
  var podcaster = new Podcaster(poId);
  await podcaster.getPodcasterDetails();
  console.log(podcaster);
  res.render("podcaster-single", { podcaster: podcaster });
});

// Create a route for Single Listener
app.get("/listener-single/:id", async function (req, res) {
  var liId = req.params.id;
  var listener = new Listener(liId);
  await listener.getListenerDetails();
  console.log(listener);
  res.render("listener-single", { listener: listener }); 
});

// Create a route for all shows
app.get("/shows", function (req, res) {
  var sql = "SELECT * FROM Shows";
  db.query(sql).then((results) => {
    res.render("shows", { data: results });
  });
});

// Create a route for all podcasters
app.get("/hosts", function (req, res) {
  var sql = "SELECT * FROM Podcasters";
  db.query(sql).then((results) => {
    res.render("hosts", { data: results });
  });
});

// Register
app.get('/register', function (req, res) {
  res.render('register');
});

// Login
app.get('/login', function (req, res) {
  res.render('login');
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

<<<<<<< HEAD
// Route to handle form submission
app.post('/submit-listener', async (req, res) => {
  try {
      const { name, email, password } = req.body;

      // Check if the email already exists in the database
      const existingUser = await db.query("SELECT * FROM Listeners WHERE Email = ?", [email]);
      if (existingUser.length > 0) {
          return res.status(400).json({ message: "Email already exists" });
      }

      // Create a new Listener instance
      const newListener = new Listener(name, email, password);

      // Add the user to the database
      await newListener.addUser();

      res.redirect('/'); // Redirect to login page after successful signup
  } catch (error) {
      console.error("Error in signup:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

app.post('/submit-podcaster', async (req, res) => {
  try {
      const { name, email, password, bio, gender ,show} = req.body;

      // Check if the email already exists in the database
      const existingUser = await db.query("SELECT * FROM Podcasters WHERE Email = ?", [email]);
      if (existingUser.length > 0) {
          return res.status(400).json({ message: "Email already exists" });
      }

      // Create a new Podcaster instance
      const newPodcaster = new Podcaster(name, email, password, bio, gender,show);

      // Add the user to the database
      await newPodcaster.addUser();

      res.redirect('/'); // Redirect to login page after successful signup
  } catch (error) {
      console.error("Error in podcaster signup:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

// POST route to add a new show
app.post('/add-show', async (req, res) => {
  try {
      const { title, description, category, coverImageUrl, releaseDate, podcasterId } = req.body;

      // Create a new Show instance
      const newShow = new Show(title, description, category, coverImageUrl, releaseDate, podcasterId);

      // Add the show to the database
      await newShow.addShow();

      res.status(201).json({ message: "Show added successfully" });
  } catch (error) {
      console.error("Error adding show:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

// GET route to get a show by ID
app.get('/:id', async (req, res) => {
  try {
      const { id } = req.params;

      // Get the show from the database
      const show = await Show.getShowById(id);

      if (!show) {
          return res.status(404).json({ message: "Show not found" });
      }

      res.json(show);
  } catch (error) {
      console.error("Error getting show:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});

// Authentication route
app.post('/authenticate', async (req, res) => {
  const { email, password } = req.body;

  try {

      // Fetch user by email
      const user = await Listener.getUserByEmail(email);
      uId = await user.getIdFromEmail();
      if (!user) {
          return res.status(404).json({ message: "User not found" });
      }

      // Authenticate user
      const isAuthenticated = await user.authenticate(password);

      if (!isAuthenticated) {
          return res.status(401).json({ message: "Invalid email or password" });
      }
 // Set session variables
      req.session.uid = uId;// Assuming Listener model has an 'id' property
      req.session.loggedIn = true;
            // Authentication successful
      return res.redirect('/'); 
  } catch (error) {
      console.error("Error authenticating user:", error);
      return res.status(500).json({ message: "Internal server error" });
  }
});

// Logout
app.get('/logout', function (req, res) {
  req.session.destroy();
  res.redirect('/login');
});
=======

// Route to handle form submission
app.post('/submit-listener', async (req, res) => {
    try {
        const { name, email, password } = req.body;
  
        // Check if the email already exists in the database
        const existingUser = await db.query("SELECT * FROM Listeners WHERE Email = ?", [email]);
        if (existingUser.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        }
  
        // Create a new Listener instance
        const newListener = new Listener(name, email, password);
  
        // Add the user to the database
        await newListener.addUser();
  
        res.redirect('/'); // Redirect to login page after successful signup
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  });
  
  app.post('/submit-podcaster', async (req, res) => {
    try {

        }
>>>>>>> b7a1ffe338fa41d980698ef8c1da48098ed3cbc0

     catch (error) {
       
    }
  });
// POST route to add a new show
app.post('/add-show', async (req, res) => {
    try {
        const { title, description, category, coverImageUrl, releaseDate, podcasterId } = req.body;
  
        // Create a new Show instance
        const newShow = new Show(title, description, category, coverImageUrl, releaseDate, podcasterId);
  
        // Add the show to the database
        await newShow.addShow();
  
        res.status(201).json({ message: "Show added successfully" });
    } catch (error) {
        console.error("Error adding show:", error);
        res.status(500).json({ message: "Internal server error" });
    }
  });
  
  
// Authentication route
app.post('/authenticate', async (req, res) => {
    const { email, password } = req.body;
  
    try {
  
        // Fetch user by email
        const user = await Listener.getUserByEmail(email);
        uId = await user.getIdFromEmail();
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
  
        // Authenticate user
        const isAuthenticated = await user.authenticate(password);
  
        if (!isAuthenticated) {
            return res.status(401).json({ message: "Invalid email or password" });
        }
   // Set session variables
        req.session.uid = uId;// Assuming Listener model has an 'id' property
        req.session.loggedIn = true;
              // Authentication successful
        return res.redirect('/'); 
    } catch (error) {
        console.error("Error authenticating user:", error);
        return res.status(500).json({ message: "Internal server error" });
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
