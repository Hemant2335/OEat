const mongoose = require('mongoose');
const { Schema }  =  mongoose;

const Userschema = new Schema({
    Name : {type: String , required : true},
    Email : {type: String , required : true , unique : true},
    Password : {type: String , required : true},
    isadmin : {type : Boolean , required : true}
}) ;

const User = mongoose.model('User' , Userschema ) ;

module.exports = User ; 