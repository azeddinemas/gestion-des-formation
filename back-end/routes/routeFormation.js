const express = require('express')
const Router = express.Router()
const Formation = require('../controller/formationController')


Router.post('/add',Formation.addFormation)
Router.get('/getall',Formation.getFormation)
Router.get('/getone/:id',Formation.getOne)
Router.post('/edit/:id',Formation.editFormation)
Router.delete('/delete/:id',Formation.deleteFormation)


module.exports = Router