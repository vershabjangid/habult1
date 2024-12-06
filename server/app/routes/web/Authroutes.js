let express = require('express');
const { register, verifyotp, resendotp, viewregister, loginform } = require('../../controller/web/Auth');
let authroutes = express.Router()


authroutes.post('/register', register);
authroutes.post('/login', loginform)
authroutes.post('/verify-register', verifyotp);
authroutes.put('/resend-otp', resendotp);


authroutes.get('/view-register', viewregister)




module.exports = authroutes;