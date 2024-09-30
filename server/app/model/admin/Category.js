let mongoose = require('mongoose')

let categoryschema = mongoose.Schema({
    
    CategoryName : {
        type : String,
        required : true,
        unique : true
    }
})

let categorymodel = mongoose.model('categorymodel',categoryschema)
module.exports = categorymodel;