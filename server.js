const express = require('express');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;
// const db = require('./models');
// const environment = process.env.NODE_ENV || 'development';
const mongoose = require("mongoose");
require('dotenv').config()

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}
// Add routes, both API and view
app.use(routes);

// if (process.env.NODE_ENV === "production") {
//   mongoose.connect(process.env.MONGODB_URI,  {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   });
// } else {
//   mongoose.connect("mongodb+srv://admin:Password1@cluster0.zrvnu.mongodb.net/googlebooks?retryWrites=true&w=majority",  {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useCreateIndex: true,
//     useFindAndModify: false
//   });
// }

mongoose.connect(
  process.env.MONGODB_URI,
  // || 'mongodb://localhost/googlebooks',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

// Start the API server

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
