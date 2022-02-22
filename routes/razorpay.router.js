const express = require('express');

const razorpayController = require('../controllers/razorpay.controller');

const router = express.Router();

router.post('/create', razorpayController.postCreateOrder);

module.exports = router;