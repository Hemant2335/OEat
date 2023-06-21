const express = require("express");
const Order = require("../models/Orders");
const User = require("../models/User");
const fetchuser = require("../middleware/fetchuser");


const router = express.Router();

// Route 1 : To create a order entry in user data

router.post('/addorder', fetchuser, async (req, res) => {
    try {

    const { Name, Price , desc , type , img_url , Quantity , Status} = req.body;


      const order = new Order ({
        Name, Price , desc , type , img_url , Quantity,Status , user : req.user.id 
      })
      const savedorder = await order.save()
      res.json(savedorder) ;
      
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");  
    }
  })


// Route 2 : TO fetch the user specific data 

router.get('/fetchallorders', fetchuser, async (req, res) => {
    try {
        const orders = await Order.find({ user: req.user.id });
        res.json(orders);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
})

// Route 3 : TO Update the order

router.post('/updateuserorder', fetchuser, async (req, res) => {
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

// Route 4 : To fetch all the data

router.get('/fetchadminorders', fetchuser, async (req, res) => {
  try {
    let userID = req.user.id;
    const user = await User.findById(userID).select("-Password");
    if (user?.isadmin) {
      const orders = await Order.find();
      res.json(orders);
    }
  } catch (err) {
    console.log("Some error occurred:", err);
  }
})



module.exports = router