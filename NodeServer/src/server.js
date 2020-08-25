/*
  description: Entry point for  node server for commexchange
  stack : express, mongoDB
  @author: Amit Chanchal
  @date: 25-August-2020
  @version: 0.0.1
*/

// Getting environmental variables
require('dotenv').config();
const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');

console.log("ok");

const port = process.env.PORT || 3000;
const app = express();

/*
  ------ MIDDLEWARE -----
*/
app.use(cors());
app.use(express.json())

/* 
  ------- ROUTES --------
*/

app.use('/user', require('./Routes/UserRoutes'));
app.use('/listing', require('./Routes/ListingRoutes'));
app.use('/shop', require('./Routes/ShopRoutes'));
app.use('/orders', require('./Routes/OrderRoutes'));
app.use('/usersessions', require('./Routes/SessionRoutes'))
app.use('/auth', require('./Routes/AuthRoutes'));

app.listen(port, () => {
    console.log(`app is listening on port ${port}`)
});