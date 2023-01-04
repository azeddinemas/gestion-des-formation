const mongoose = require('mongoose')

const user =  mongoose.Schema({
    nom : {
        type : String
        // required : true
    },
    prenom : {
        type : String
        // required : true
    }
})



module.exports = mongoose.model('user',user)

