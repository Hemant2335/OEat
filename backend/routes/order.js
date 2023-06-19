const express = require("express");
const Order = require("../models/Orders");
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


module.exports = router