const Connecttomongo  = require('./db')
var cors = require('cors')



// Connecting to server
Connecttomongo();



// Setting up the Server
const express = require('express')
const app  = express();
const port  = 5000;

//Middlewares

app.use(cors());
app.use(express.json()); // To use the json file as req and res ;

// Creating the routes
app.use("/api/auth" , require('./routes/auth'));
// app.use("/api/buy" , require('./routes/food'));

app.listen(port, ()=>{
    console.log(`The Server is Running on port : ${port}`) ; 
})