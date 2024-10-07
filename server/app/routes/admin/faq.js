let express = require('express');
const { faqdata, getfaq } = require('../../controller/admin/faq');
let faqroutes = express.Router();


faqroutes.post('/faq',faqdata)
faqroutes.get('/getfaq',getfaq)

module.exports = faqroutes