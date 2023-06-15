const mongoose  = require("mongoose");

const mongoURI = 'mongodb://0.0.0.0:27017/oeat' ;


// Connecting to the mongodb server

const Connecttomongo = async()=>{

    mongoose.connect(mongoURI)
    {
        console.log("The database has been connected");
    }
}

module.exports = Connecttomongo;