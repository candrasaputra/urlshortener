const express = require('express')
const Router = express.Router()

const FrontPageController = require('../controllers/FrontPageController');

Router.get('/', FrontPageController.main)

module.exports = Router