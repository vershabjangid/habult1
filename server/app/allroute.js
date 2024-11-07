let express = require('express');
const webauthroutes = require('./route/web/webauthroutes');
const admin = require('./route/admin/Adminauthroutes');
let allroutes = express.Router();


allroutes.use(webauthroutes);
allroutes.use(admin);


module.exports = allroutes;