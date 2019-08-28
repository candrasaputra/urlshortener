const express = require('express')
const Router = express.Router()

const { UserController } = require('../controllers')

// Router.get('/sign-in', UserController.register)
// Router.post('/sign-in', UserController.store)
Router.get('/register', UserController.register)
Router.post('/register', UserController.create)

module.exports = Router