const startupformmodel = require("../../model/web/Startupformmodel");

exports.viewadminstartup = async (req, res) => {
    let viewdata = await startupformmodel.find();
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}

exports.updateadminstartups = async (req, res) => {


    let updatedata = await startupformmodel.updateOne({ Email: req.body.Email }, { Status: req.body.Status })
        .then(() => {
            if (updatedata.acknowledgement === 1) {
                res.send({
                    Status: 1,
                    Message: "Data Updated Successfully",
                    // updatedata
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Doesn,t Updated",
                    updatedata
                })
            }
        })
        .catch((error) => {
            res.send(
                error
            )
        })
}