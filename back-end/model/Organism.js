const mongoose = require('mongoose')

const organism = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    ville : {
        type : String,
        required : true
    },
    addresse : {
        type : String,
        required : true
    },
    phone : {
    type : String,
    required : true        
    }
})

module.exports = mongoose.model('organism',organism)