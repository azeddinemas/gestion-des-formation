const mongoose = require('mongoose')

mongoose.set('strictQuery',true)

mongoose.connect(process.env.DB)
.then(()=>{
    console.log('db is connected')
}).catch(()=>{
    console.log('not connected')
})