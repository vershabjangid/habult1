const investorformmodel = require("../../model/web/Investorformmodel");

exports.viewadmininvestor = async (req, res) => {
    let viewdata = await investorformmodel.find();
    let imgurl = "https://api.hivexv.com/uploads/"
    res.send({
        viewdata,
        imgurl
    })
}



exports.updateadmininvestors = async (req, res) => {
    let data = {
        Email: req.body.Email,
        Status: req.body.Status
    }


    let update = await investorformmodel.updateOne({ Email: req.body.Email }, { Status: req.body.Status })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Updated Successfully"
            })
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "User Alredy Exists"
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