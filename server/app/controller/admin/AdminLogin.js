let dotenv = require('dotenv')
let process = dotenv.config

exports.AdminLoginController = (req, res) => {
    let data = {
        Email: req.body.Email,
        Password: req.body.Password
    }

    if (data.Email == process.env.ADMIN_EMAIL && data.Password == process.env.ADMIN_PASSWORD) {
       res.send(data)
    }
}