const express = require('express');
const router = express.Router();
const controller = require('../controllers/api');
const inputValidator = require('../middlewares/inputValidator');

router.post('/short-link', inputValidator.getShortUrl, controller.getShortUrl);

module.exports = router;
