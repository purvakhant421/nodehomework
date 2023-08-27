const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const { connectDB } = require('./db/dbconnection.js');
const router = require('./routes');
// const mongoose = require('mongoose');
require('./helpers/crons');
const config = require('./config/config.js');
const eCommerceRoutes = require('./routes/eCommerce.route');

const app = express();

// Connect to MongoDB
// mongoose.connect('mongodb://localhost/eCommerceDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.use(bodyParser.urlencoded({ extended: false }));

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/v1', eCommerceRoutes);

/** whenever route not created and you try to use that route then throw error. */
app.use((req, res, next) => {
  next(new Error("Route not found!"));
});

/** Database connection */
connectDB()

/** create server using http */
const server = http.createServer(app);

server.listen(config.port, () => {
  console.log("Port number "+ config.port + " is active");
});



app.use(express.static('public'));

