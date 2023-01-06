const express = require('express')
const Router = express.Router()
const Organism = require('../controller/organismController')

Router.post('/add',Organism.addOrganism)
Router.get('/getall',Organism.getOrganism)
Router.get('/getone/:id',Organism.getOne)
Router.post('/edit/:id',Organism.editOrganism)
Router.delete('/delete/:id',Organism.deleteOrganism)




module.exports = Router