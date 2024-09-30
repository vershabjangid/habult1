let express = require('express')
const { contactus } = require('../../controller/admin/Contact_us')
let contactroute = express.Router()

contactroute.post('/contact',contactus)

module.exports = contactroute;