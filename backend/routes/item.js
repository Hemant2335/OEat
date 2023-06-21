const express = require("express");
const Item = require("../models/Items");
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");


const router = express.Router();
// Route 1 : To fetch all the Items

router.get('/fetchallitems', fetchuser, async (req, res) => {
    try {
        const items = await Item.find({});
        res.json(items);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})


// Route 2 : To update the Quantity of Items 

router.post('/updateitem', fetchuser, async (req, res) => {
    try {
      let userID = req.user.id;
      const user = await User.findById(userID).select("-Password");
      if (user?.isadmin) {
        const { Quantity, ID, itemname } = req.body;
        let item = await Item.findById(ID);
    
        item?.MainName.forEach((pizzaItem) => {
          if (pizzaItem.Name === itemname) {
            console.log(pizzaItem.Name);
            pizzaItem.Quantity = Quantity; // Update the Quantity with the new value
            console.log(pizzaItem.Quantity);
          }
        });
    
        await item.save(); // Save the updated item
        res.send(item);
      }
    } catch (err) {
      console.log("Some error occurred:", err);
    }
  });

// Route 3 : For the User endpoint 


router.post('/updateuseritem', fetchuser, async (req, res) => {
    try {
        const {ID, itemname } = req.body;
        let item = await Item.findById(ID);
        item?.MainName.forEach((pizzaItem) => {
          if (pizzaItem.Name === itemname) {
            console.log(pizzaItem.Name);
            pizzaItem.Quantity = pizzaItem.Quantity - 1; // Update the Quantity with the new value
            console.log(pizzaItem.Quantity);
          }
        });
        await item.save(); // Save the updated item
        res.send(item);
    } catch (err) {
      console.log("Some error occurred:", err);
    }
  });

module.exports = router