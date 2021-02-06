const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const passport = require("passport");
require("dotenv").config();

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

// pass the passport middleware
app.use(passport.initialize());

// load passport strategies
const localSignupStrategy = require("./passport/local-signup");
const localLoginStrategy = require("./passport/local-login");
passport.use("local-signup", localSignupStrategy);
passport.use("local-login", localLoginStrategy);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Established connection with MongoDB database.");
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
