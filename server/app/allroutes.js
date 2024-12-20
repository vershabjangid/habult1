let express = require('express')
const authroutes = require('./routes/web/Authroutes')
const investorroutes = require('./routes/web/investorroute')
const startupsroute = require('./routes/web/startuproute')
const Extrafunctionality = require('./routes/admin/Extrafunctionalityroutes')
const profileroutes = require('./routes/admin/ProfileRoutes')
const contactuUsroute = require('./routes/web/ContactUsRoute')
const adminauth = require('./routes/admin/AdminAuth')
const AdminTeamroute = require('./routes/admin/AdminTeam')
const AdminHome = require('./routes/admin/AdminHome')
const adminaboutroutes = require('./routes/admin/AdminAbout')
const AdminContact = require('./routes/admin/AdminContact')
let allroutes = express.Router()

allroutes.use(authroutes)
allroutes.use(investorroutes)
allroutes.use(startupsroute)
allroutes.use(profileroutes)
allroutes.use(contactuUsroute)
allroutes.use(adminauth)
allroutes.use(AdminHome)
allroutes.use(AdminTeamroute)
allroutes.use(adminaboutroutes)
allroutes.use(AdminContact)






allroutes.use(Extrafunctionality)


module.exports = allroutes;