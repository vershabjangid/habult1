let express = require('express');
const ratelimit  = require('express-rate-limit')
const { registerdata, registerotp } = require('../../controller/web/register');
let routes = express.Router();

let limiter = ratelimit({
    max : 10,
    windowMs : 60*60*1000,
    message : "we are receiving too many requests from this address try after an hour"
})

routes.use("/add-register",limiter);


routes.post('/add-register',registerdata)
routes.post('/add-register-otp',registerotp)


module.exports = routes;