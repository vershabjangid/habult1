let express = require('express');
const webauthroutes = require('./route/web/webauthroutes');
const paymentgateway = require('./route/web/paymentgatewayroute');
let allroutes = express.Router();


allroutes.use(webauthroutes);
allroutes.use(paymentgateway)


module.exports = allroutes;