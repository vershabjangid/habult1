let express = require('express');
const { register, verifyotp, resendotp, viewregister } = require('../../controller/web/Auth');
let authroutes = express.Router()


authroutes.post('/register', register);
authroutes.post('/verify-register', verifyotp);
authroutes.put('/resend-otp', resendotp);


authroutes.get('/view-register', viewregister)




module.exports = authroutes;