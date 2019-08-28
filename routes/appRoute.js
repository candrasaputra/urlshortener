const express = require('express')
const router = express.Router()

const appController = require('../controllers/appController')

router.get('/', appController.index);

module.exports = router