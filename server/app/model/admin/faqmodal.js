let mongoose = require('mongoose')

let faqschema = mongoose.Schema({
    Question: {
        type: String,
        required: true,
        unique: true
    },
    Answer: {
        type: String,
        required: true,
        unique: true
    }
})

let faqmodals = mongoose.model('faqs', faqschema)
module.exports = faqmodals