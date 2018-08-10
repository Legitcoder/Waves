require('dotenv').config();
const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const app = express();

//MiddleWare
app.use(express.json());

//Mongodb Mongoose Connection
if(process.env.NODE_ENV === 'development') {
   mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017/admin`);
}

app.get('/yo', (req, res, next) => {
    res.send({first: "whatever" });
});

app.listen(8080, console.log(
    "Listening on port 8080"
));