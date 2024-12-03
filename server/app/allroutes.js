let express = require('express')
const authroutes = require('./routes/web/Authroutes')
const investorroutes = require('./routes/web/investorroute')
let allroutes = express.Router()

allroutes.use(authroutes)
allroutes.use(investorroutes)


module.exports = allroutes;