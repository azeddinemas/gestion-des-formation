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
    active : {
        type : Boolean,
        default : true
    },
    organism : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'organism'
    }
})



module.exports = mongoose.model('user',user)

