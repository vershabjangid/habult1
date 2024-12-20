let express = require('express');
const { Addaboutbannercontroller } = require('../../controller/admin/AdminAbout');
let adminaboutroutes = express.Router();


adminaboutroutes.post('/add-about-banner', Addaboutbannercontroller)



module.exports = adminaboutroutes;