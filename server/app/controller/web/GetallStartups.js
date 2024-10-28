const websiteregistermodel = require("../../model/web/Webauthmodel")

exports.getstartups = async (req, res) => {
    let data = {
        Join_as: "startup"
    }
    let imgurl = "http://147.79.71.69:5000/uploads/"
    let getdata = await websiteregistermodel.find(data)
    res.send({
        getdata,
        imgurl
    })
}