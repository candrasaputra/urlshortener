const express = require('express')
const router = express.Router()

const appController = require('../controllers/appController')

router.get('/', appController.index);
router.get('/testUserAgent', appController.testUserAgent);

module.exports = router