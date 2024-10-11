let express = require('express');
const { Registerweb } = require('../../controller/web/authController');
let webauthrouts = express.Router();

webauthrouts.post("/get-user", Registerweb)

module.exports = webauthrouts; 