const express = require('express')
const Router = express.Router()
const user = require('../controller/userController')
const mailer = require('../controller/mailerController')
const statistique = require('../controller/statistique')

Router.post('/add',user.addUser)
Router.post('/login',user.login)
Router.get('/confirmation/:token',mailer.confirm)
Router.get('/getall',user.getAll)

Router.get('/statistique',statistique.statistique)

module.exports = Router