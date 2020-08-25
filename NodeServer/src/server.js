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

const app = express();

/*
  ------ MIDDLEWARE -----
*/
app.use(cors());
app.use(express.json())

/* 
  ------- ROUTES --------
*/

app.listen(process.env.PORT || 3000, () => {
    `app is listening on port ${PORT}`
});