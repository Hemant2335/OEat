const express = require('express');
const router = express.Router();
const Razorpay = require('razorpay');
const fetchuser = require('../middleware/fetchuser');

// Create an instance of Razorpay
const razorpay = new Razorpay({
  key_id: 'rzp_test_dqAiGJZnvCIklf',
  key_secret: 'eLrAqetcU2cHBO1Ade6KC8Rq'
});

// Payment route
router.post('/create-payment',fetchuser ,async (req, res) => {
  try {
    const options = {
      amount: req.body.amount, // Payment amount in paise or cents
      currency: 'INR', // Currency code
      receipt: 'order_receipt', // Your unique order ID or receipt
      payment_capture: 1 // Auto-capture payments
    };

    const response = await razorpay.orders.create(options);

    res.json({
      id: response.id,
      amount: response.amount,
      currency: response.currency
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Payment failed' });
  }
});

module.exports = router;
