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
    employe : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'        
    },
    debut : {
        type : Date
    },
    fin : {
        type : Date
    }
})

module.exports = mongoose.model('formation',Formation)