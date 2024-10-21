let express = require('express');
const { payementgatewaycontroller } = require('../../controller/web/PaymentGateway');
let paymentgateway = express.Router()

// paymentgateway.get('/payment', payementgatewaycontroller)

// paymentgateway.post('/verify-payment', paymentgateway)

module.exports = paymentgateway;
