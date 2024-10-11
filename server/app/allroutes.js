const express = require("express");
const adminauth = require("./route/admin/AdminAuth");
const webauthrouts = require("./route/web/Authwebroute");
let allroutes = express.Router();


allroutes.use(adminauth)
allroutes.use(webauthrouts)

module.exports = allroutes