const express = require('express')
const Router = express.Router()
const user = require('../controller/userController')
const mailer = require('../controller/mailerController')

Router.post('/add',user.addUser)
Router.post('/login',user.login)
Router.get('/confirmation/:token',mailer.confirm)
Router.get('/getall',user.getAll)

module.exports = Router