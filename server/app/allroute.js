let express = require('express');
const webauthroutes = require('./route/web/webauthroutes');
let allroutes = express.Router();


allroutes.use(webauthroutes);


module.exports = allroutes;