const investorregistermodel = require("../../model/web/InvestorAuth")

exports.getmembers = async (req, res) => {
    let getdata = await investorregistermodel.find()
    let imgurl = "http://147.79.71.69:5000/uploads/"
    res.send({
        getdata,
        imgurl
    }
    )
}