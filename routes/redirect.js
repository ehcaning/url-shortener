const express = require('express');
const router = express.Router();
const controller = require('../controllers/redirect');
const inputValidator = require('../middlewares/inputValidator');

router.get('/:slug', inputValidator.redirect, controller.redirect);

module.exports = router;
