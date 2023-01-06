const mongoose = require('mongoose')

const user =  mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    role : {
        type : String,
        // required : true
    },
    phone : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmed : {
        Boolean : false
    },
    organism : {
        type : String
    },
    formation : {
        type : String
    }
})



module.exports = mongoose.model('user',user)

