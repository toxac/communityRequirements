/*
  description: Entry point for  node server for commexchange
  stack : express, mongoDB
  @author: Amit Chanchal
  @date: 25-August-2020
  @version: 0.0.1
*/

const express = require('express');

const app = express();

app.listen(PORT, () => {
    `app is listening on port ${PORT}`
});