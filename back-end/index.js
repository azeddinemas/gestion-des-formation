const express = require('express');
const app = express();
require('dotenv').config()
require('./config/DB')
const routerOrganism = require('./routes/routeOrganism')
const routerUser = require('./routes/routeUser')
const routerFormation = require('./routes/routeFormation');
const ErrorHandler = require('./middleware/ErrorHandler');
const cors = require('cors')
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cors())

app.use('/organism',routerOrganism)
app.use('/user',routerUser)
app.use('/formation',routerFormation)
app.use(ErrorHandler)





app.listen(port,console.log(`server is running on port ${port}`))