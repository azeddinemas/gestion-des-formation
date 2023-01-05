const express = require('express')
const router = express.Router()
const user = require('../controller/userController')
const Organism = require('../controller/organismController')
const Formation = require('../controller/formationController')

router.post('/addemploye',user.addUser)

router.post('/addorganism',Organism.addOrganism)
router.get('/allorganism',Organism.getOrganism)



module.exports = router