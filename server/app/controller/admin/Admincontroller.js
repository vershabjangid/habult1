const investorregistermodel = require("../../model/web/InvestorAuth")
const websiteregistermodel = require("../../model/web/Webauthmodel")

exports.getmembers = async (req, res) => {
    let getdata = await investorregistermodel.find()
    let imgurl = "http://147.79.71.69:5000/uploads/"
    res.send({
        getdata,
        imgurl
    }
    )
}



exports.getstartups = async (req, res) => {
    let getdata = await websiteregistermodel.find()
    let imgurl = "http://147.79.71.69:5000/uploads/"
    res.send({
        getdata,
        imgurl
    }
    )
}