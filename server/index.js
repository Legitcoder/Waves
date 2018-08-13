require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const app = express();

//Mongodb Mongoose Connection
if(process.env.NODE_ENV === 'development') {
    mongoose.connect(`mongodb://${process.env.DB_USER}:${process.env.DB_PASSWORD}@mongo:27017/admin`, { useNewUrlParser: true });
 }


 mongoose.connection.on('connected', () => {    
    console.log('Mongoose is connected'); 
 });

 mongoose.connection.on('error', (err) => {    
    console.log(`mongoose connection err: `, err); 
  });

//MiddleWare
app.use(express.json());

routes(app);


app.listen(8080, console.log(
    "Listening on port 8080"
));