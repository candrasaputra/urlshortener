const express = require('express')
const Router = express.Router()

const { UserController } = require('../controllers')

Router.get('/register', UserController.register)
Router.post('/register', UserController.create)
Router.get('/successRegister', UserController.registerStatus)
Router.get('/sign-in', UserController.loginPage)
Router.post('/sign-in', UserController.login)

module.exports = Router