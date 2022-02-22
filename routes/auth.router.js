const express = require('express');

const authController = require('../controllers/auth.controller');

const router = express.Router();

router.get('/signedin', authController.getSignedin);
router.post('/signin', authController.postSignin);

module.exports = router;