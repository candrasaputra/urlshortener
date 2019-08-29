const express = require('express')
const Router = express.Router()

const { UserController } = require('../controllers')

Router.get('/register', UserController.register)
Router.post('/register', UserController.create)
Router.get('/successRegister', UserController.registerStatus)
Router.get('/sign-in', UserController.login)
Router.post('/sign-in', UserController.doLogin)

module.exports = Router