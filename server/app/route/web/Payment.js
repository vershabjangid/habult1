let express = require('express')
const { getpayment } = require('../../controller/web/Payment')
let paymentrouter = express.Router()

paymentrouter.get('/payment', getpayment)


module.exports = paymentrouter