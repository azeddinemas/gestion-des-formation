const mongoose = require('mongoose')

const user =  mongoose.Schema({
    name : {
        type : String
    },
    role : {
        type : String
    },
    phone : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    confirmed : {
        type : Boolean,
        default : false
    },
    organism : {
        type : String
    },
    formation : {
        type : String
    }
})



module.exports = mongoose.model('user',user)

