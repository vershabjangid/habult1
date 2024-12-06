const industrymodel = require("../../model/admin/industrymodel")

exports.addindustry = async (req, res) => {
    let data = {
        Industry_Name: req.body.Industry_Name
    }


    let insertdata = await industrymodel(data)
    insertdata.save()
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Inserted Successfully"
            })
        })
        .catch((error) => {
            if (error.code === 11000) {
                res.send({
                    Status: 0,
                    Message: "Data Already Inserted"
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })

}

exports.viewindustry = async (req, res) => {
    let getdata = await industrymodel.find()
    res.send(getdata)
}


exports.updateindustry = async (req, res) => {

    let updatedata = await industrymodel.updateOne({ _id: req.body._id }, { Industry_Name: req.body.Industry_Name })
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
                    Message: "Data Already Inserted"
                })
            }
            else {
                res.send({
                    Status: 0,
                    Message: "Data Missing"
                })
            }
        })

}


exports.viewindustryweb = async (req, res) => {
    let getdata = await industrymodel.find()
    res.send(getdata)
}


exports.deleteindustry = async (req, res) => {

    let deleteone = await industrymodel.deleteOne({ _id: req.body._id })
        .then(() => {
            res.send({
                Status: 1,
                Message: "Data Deleted Successfully"
            })
        })
        .catch((error) => {
            res.send({
                Status: 0,
                Message: "Data Missing"
            })
        })

}