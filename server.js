const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const routes = require("./routes");
const dbConnection = require('./models/dbConnection')
const MongoStore = require('connect-mongo')(session);
const passport = require("./config/passport");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Passport setup
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true, store: new MongoStore({ mongooseConnection: dbConnection }), }));
app.use(passport.initialize());
app.use(passport.session());

// Add routes, both API and view
app.use(routes);
// app.use("/user", require('./routes/user'));

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/ootitemtracker',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
