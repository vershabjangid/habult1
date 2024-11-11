let mongoose = require('mongoose')

let Industryschema = mongoose.Schema({
    Industry: {
        type: String,
        required: true,
        unique: true
    }
})

let IndustryModel = mongoose.model('industry', Industryschema)
module.exports = IndustryModel;