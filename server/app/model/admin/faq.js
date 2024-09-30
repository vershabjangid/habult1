let mongoose = require('mongoose')

let faqschema = mongoose.Schema({
    Faqquestion: {
        type: String,
        required: true,
        unique : true
    },
    Faqanswer: {
        type: String,
        required: true,
        unique : true
    }
})

let newfaqsection = mongoose.model('Hubalt_faq',faqschema);
module.exports = newfaqsection;