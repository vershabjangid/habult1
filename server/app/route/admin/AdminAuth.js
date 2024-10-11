let express = require('express');
const { Adminlogin } = require('../../controller/admin/AdmLogcontroller');
let adminauth = express.Router();

adminauth.post("/get-auth",Adminlogin)

module.exports = adminauth; 