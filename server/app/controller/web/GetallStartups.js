const websiteregistermodel = require("../../model/web/Webauthmodel")

exports.getstartups = async (req, res) => {
    let data = {
        Join_as: "startup"
    }
    let imgurl = "https://api.hivexv.com/uploads/"
    let getdata = await websiteregistermodel.find(data)
    res.send({
        getdata,
        imgurl
    })
}