const websiteregistermodel = require("../../model/web/Webauthmodel")

exports.getstartups = async (req, res) => {
    let data = {
        Join_as: "startup"
    }
    let imgurl = "http://localhost:5000/uploads/"
    let getdata = await websiteregistermodel.find(data)
    res.send({
        getdata,
        imgurl
    })
}