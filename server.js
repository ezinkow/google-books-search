const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
// const db = require('./models');
const environment = process.env.NODE_ENV || 'development';
const mongoose = require("mongoose");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
console.log(process.env.NODE_ENV);
if (environment === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

// Start the API server

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
