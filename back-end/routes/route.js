const express = require('express')
const router = express.Router()
const user = require('../controller/userController')
const Organism = require('../controller/organismController')
// const Formation = require('../controller/formationController')
const mailer = require('../controller/mailerController')

router.post('/addemploye',user.addUser)
router.post('/login',user.login)
router.get('/confirmation/:token',mailer.confirm)

router.post('/addorganism',Organism.addOrganism)
router.get('/allorganism',Organism.getOrganism)



module.exports = router