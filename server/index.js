let express = require('express');
let cors = require('cors');
const helmet = require('helmet')
const mongosanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const { mongoose } = require('mongoose');


const allroutes = require('./app/allroutes');
let app = express();
app.use(mongosanitize());
app.use(xss());
app.use(helmet())
app.disable('x-powered-by');
app.use(cors())
app.use(express.json())
app.use(allroutes)

mongoose.connect('mongodb://127.0.0.1:27017/hubalt')
.then(()=>{
    app.listen('5000')
})