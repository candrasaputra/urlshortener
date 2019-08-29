const express = require('express')
const router = express.Router()
const isLogin = require('../middleware/isLogin')

const appController = require('../controllers/appController')
const UrlController = require('../controllers/UrlController')
const TagController = require('../controllers/TagController')

router.get('/', isLogin, appController.index);
router.get('/testUserAgent', appController.testUserAgent);
router.get('/create', isLogin, UrlController.showCreate)
router.post('/create', UrlController.create)
router.get('/tags', TagController.showCreate)
router.post('/tags', TagController.create)
router.get('/tags/:id/edit', TagController.showEdit)
router.post('/tags/:id/edit', TagController.edit)
router.get('/tags/:id/delete', TagController.delete)

module.exports = router