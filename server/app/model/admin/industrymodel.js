let mongoose = require('mongoose')


let industryschema = mongoose.Schema({
    Industry_Name: {
        type: String,
        required: true,
        unique: true
    }
})

let industrymodel = mongoose.model('industry', industryschema)
module.exports = industrymodel