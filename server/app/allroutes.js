let express = require('express')
const authroutes = require('./routes/web/Authroutes')
const investorroutes = require('./routes/web/investorroute')
const startupsroute = require('./routes/web/startuproute')
const Extrafunctionality = require('./routes/admin/Extrafunctionalityroutes')
const profileroutes = require('./routes/admin/ProfileRoutes')
const contactuUsroute = require('./routes/web/ContactUsRoute')
let allroutes = express.Router()

allroutes.use(authroutes)
allroutes.use(investorroutes)
allroutes.use(startupsroute)
allroutes.use(profileroutes)
allroutes.use(contactuUsroute)






allroutes.use(Extrafunctionality)


module.exports = allroutes;