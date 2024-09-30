let express = require('express');
const routes = require('./routes/web/register');
const loginroutes = require('./routes/web/login');
const faqroutes = require('./routes/admin/faq');
const contactroute = require('./routes/admin/contact');
const categoryroutes = require('./routes/admin/Category');
let allroutes = express.Router();

allroutes.use(loginroutes)
allroutes.use(routes)
allroutes.use(faqroutes)
allroutes.use(contactroute)
allroutes.use(categoryroutes)

module.exports = allroutes