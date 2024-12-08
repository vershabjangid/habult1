let express = require('express');
const { conactUs, viewcontactus } = require('../../controller/web/ContactUs');
let contactuUsroute = express.Router();


contactuUsroute.post('/Contact-Us', conactUs)
contactuUsroute.get('/view-Contact-Us', viewcontactus)



module.exports = contactuUsroute;