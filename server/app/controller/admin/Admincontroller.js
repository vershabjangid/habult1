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



exports.updatestartups = async (req, res) => {
    console.log(req.body)
    let update = await websiteregistermodel.updateOne({ _id: req.body._id }, { Activestatus: req.body.Activestatus })
    .then(() => {
        res.send({
            Status: 1,
            Message: "Data Updated Successfully",
        })
    })
    .catch((error) => {
        if (error.code == 11000) {
            res.send({
                Status: 0,
                Message: "Data Already Exists"
            })
        }
        else {
            res.status(400).send({
                Status: 0,
                Message: "Data Missing"
            })
        }
    })
}