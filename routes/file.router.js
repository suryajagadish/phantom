const express = require('express');

const fileController = require('../controllers/file.controller');

const router = express.Router();

router.get('/read', fileController.getFileRead);
router.post('/write', fileController.postFileWrite);

module.exports = router;