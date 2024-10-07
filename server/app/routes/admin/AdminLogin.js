let express = require('express');
const { AdminLoginController } = require('../../controller/admin/AdminLogin');
let Adminroute = express.Router();


Adminroute.post('/adminlogin', AdminLoginController)

module.exports = Adminroute;