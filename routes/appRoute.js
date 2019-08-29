const express = require('express')
const router = express.Router()
const isLogin = require('../middleware/isLogin')

const appController = require('../controllers/appController')
const UrlController = require('../controllers/UrlController')

router.get('/', isLogin, appController.index);
router.get('/testUserAgent', appController.testUserAgent);
router.get('/create', isLogin, UrlController.showCreate)
router.post('/create', UrlController.create)

module.exports = router