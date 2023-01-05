const mongoose = require('mongoose')

const Formation = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    image : {
        type : String
    },
    description : {
        type : String        
    },
    dateD : {
        type : Date,
        required : true
    },
    dateF : {
        type : Date
    }
})

module.exports = mongoose.model('formation',Formation)