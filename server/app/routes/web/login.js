let express = require('express');
const { loginfind, forgotpassword, newpassword } = require('../../controller/web/login');
let loginroutes = express.Router();


loginroutes.post('/login', loginfind)
loginroutes.post('/verify-email',forgotpassword)
loginroutes.put('/newpassowrd',newpassword)

module.exports = loginroutes