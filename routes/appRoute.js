const express = require('express')
const router = express.Router()
const isLogin = require('../middleware/isLogin')

const appController = require('../controllers/appController')

router.get('/', isLogin, appController.index);
router.get('/testUserAgent', appController.testUserAgent);

module.exports = router