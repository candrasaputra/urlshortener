const express = require('express')
const router = express.Router()
const isLogin = require('../middleware/isLogin')
const HistoryController = require('../controllers/HistoryController')

router.get('/:shortened', HistoryController.getHistory)

module.exports = router