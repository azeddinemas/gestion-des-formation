const express = require('express')
const router = express.Router()
const user = require('../controller/userController')

router.post('/add',user.addUser)





module.exports = router