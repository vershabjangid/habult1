let nodemailer = require('nodemailer')

const webregistermodel = require("../../model/web/Authwebmodel")

exports.Registerweb = async (req, res) => {
    let data = {
        Join_as: req.body.Join_as,
        Email: req.body.Email,
        Phone: req.body.Phone,
        Legal_Name: req.body.Legal_Name,
        Business_Category: req.body.Business_Category,
        Short_Bio: req.body.Short_Bio,
        Password: req.body.Password,
        Goal: req.body.Goal,
        Raised: req.body.Raised,
        Money_Valuation: req.body.Money_Valuation,
        Equity: req.body.Equity,
        Minimum_Investment: req.body.Minimum_Investment,
        AuthVerification: "Pending",
        // Logo: req.body.Logo,
        // Pancard: req.body.Pancard
    }


    let insertdata = await webregistermodel(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Request Submitted Successfully"
            })
        })
        .catch((error) => {

            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "Data Already Exists"
                })
            }
            else {
                res.send(error)
            }
        })
}

const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: "maddison53@ethereal.email",
        pass: "jn7jnAPss4f63QBp6D",
    },
});


exports.Registerverify = async () => {
    const info = await transporter.sendMail({
        from: '', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });
}