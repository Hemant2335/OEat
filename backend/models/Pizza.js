const mongoose = require('mongoose');
const { Schema }  =  mongoose;

const Pizzaschema = new Schema({
    Name : {type: String , required : true, unique : true},
    Price : {type: Number , required : true },
    desc : {type: String , required : true},
    type : {type: String , required : true},
    img_url : {type: String , required : true},
    Quantity : {type : Number , required : true}
}) ;

const Pizza = mongoose.model('Pizza' , Pizzaschema ) ;

module.exports = Pizza ; 

