let express = require('express');
const webauthroutes = require('./route/web/webauthroutes');
const paymentrouter = require('./route/web/Payment');
let allroutes = express.Router();


allroutes.use(webauthroutes);
// allroutes.use(paymentrouter);


module.exports = allroutes;