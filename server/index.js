let express = require('express')
let mongoose = require('mongoose')
let cors = require('cors');
const allroutes = require('./app/allroutes');
let app = express();

app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json())
app.use(allroutes)


mongoose.connect('mongodb://127.0.0.1:27017/hubalt')
    .then(() => {
        app.listen('5000')
    })