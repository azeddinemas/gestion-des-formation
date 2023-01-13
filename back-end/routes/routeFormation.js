const express = require('express')
const Router = express.Router()
const Formation = require('../controller/formationController')
const upload = require('../middleware/upload')


Router.post('/add',upload.single('image'),Formation.addFormation)
Router.get('/getall',Formation.getFormation)
Router.get('/getone/:id',Formation.getOne)
Router.post('/edit/:id',Formation.editFormation)
Router.delete('/delete/:id',Formation.deleteFormation)


module.exports = Router