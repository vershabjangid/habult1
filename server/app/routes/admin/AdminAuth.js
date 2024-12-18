let express = require('express')
const { dashlogin } = require('../../controller/admin/Login')
let adminauth = express.Router()

adminauth.post('/admin-login',dashlogin)

module.exports = adminauth