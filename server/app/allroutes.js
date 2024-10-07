let express = require('express');
const routes = require('./routes/web/register');
const loginroutes = require('./routes/web/login');
const faqroutes = require('./routes/admin/faq');
const contactroute = require('./routes/admin/contact');
const categoryroutes = require('./routes/admin/Category');
const Adminroute = require('./routes/admin/AdminLogin');
let allroutes = express.Router();

allroutes.use(loginroutes)
allroutes.use(routes)
allroutes.use(faqroutes)
allroutes.use(contactroute)
allroutes.use(categoryroutes)
allroutes.use(Adminroute)

module.exports = allroutes