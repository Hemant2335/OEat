const mongoose = require('mongoose');
const {Schema} = mongoose;

const ItemSchema = new Schema([
    {
        MainName : [{
            Name : {type: String , required : true},
            Quantity : {type : Number , required : true},
            imgurl : {type: String , required : true},
            Price : {type: String , required : true},
        }]
    }
]);

  const Item = mongoose.model('item',ItemSchema);

  module.exports = Item;