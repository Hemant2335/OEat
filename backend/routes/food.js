// All the required imports

const express = require("express");
const Pizza = require("../models/Pizza");
const fetchuser = require("../middleware/fetchuser");

// Creating a Router using Express
const router = express.Router();

// Route 1 : To fetch the all the pizza PORT : api/store/fetchpizza

router.get(
  "/fetchpizza", fetchuser ,
  async (req, res) => {
    
    // This endpoint is goona show all the pizza 
    try {
        const pizza = await Pizza.find({});
        res.json(pizza);
    } catch (error) {
        console.log("Internal Error Occured" + error);
        res.status(500).send("Internal Server Error");
    }
  }
);

module.exports = router;
