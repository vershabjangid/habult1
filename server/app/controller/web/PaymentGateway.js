let { Cashfree } = require('cashfree-pg')
let crypto = require('crypto')
require('dotenv').config()
let webkey = process.env.KEY
let emailpass = process.env.EMAILPASS
Cashfree.XClientId = process.env.PAYMENTID;
Cashfree.XClientSecret = process.env.PAYMENTTOKEN;
Cashfree.XEnvironment = Cashfree.Environment.SANDBOX;

// console.log(Cashfree.XClientId)
function generateorderID() {
    const uniqueId = crypto.randomBytes(16).toString('hex')
    const hash = crypto.createHash('sha256')
    hash.update(uniqueId)

    const orderid = hash.digest('hex')
    return orderid.substr(0, 12);

}


exports.payementgatewaycontroller = async (req, res) => {
    try {
        let request = {
            Order_amount: 1.00,
            Order_currency: "INR",
            Order_Id: await generateorderID(),
            CustomerDetails: {
                Customer_id: "9ertert9999",
                Customer_phone: "99999999999",
                Customer_name: "vershab jangid",
                Customer_email: "jangidvershab23@gmail.com"
            }
        }

        Cashfree.PGCreateOrder("2023-08-01", request).then((response) => {
            console.log(response.data)
            res.send(response.data)
        }).catch((error) => {
            console.log(error)
            res.send(error)
        })
    }
    catch (error) {
        console.log(error)
    }
}