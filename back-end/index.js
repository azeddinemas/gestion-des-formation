const express = require('express');
const app = express();
require('dotenv').config()
const db = require('./config/DB')
const router = require('./routes/route')
const port = process.env.PORT

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',router)




app.listen(port,()=>{console.log(`server is running on port ${port}`)})