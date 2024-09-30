const categorymodel = require("../../model/admin/Category")

exports.categories = async (req, res) => {
    let data = {
        CategoryName: req.body.CategoryName
    }

    let insertcategory = await categorymodel(data)
    insertcategory.save().then((inserting) => {
        res.send({
            "Status": "1",
            "Message": "Message Sended Successfully"
        })
    })
        .catch((error) => {
            res.send({
                "Status": "0",
                "Message": "Data Missing"
            })
        })
}


exports.viewcategory = async (req, res) => {
    let viewcategory = await categorymodel.find()
    console.log(viewcategory)
    res.send(viewcategory)
}


exports.updatecategory = async (req, res) => {
    console.log(req.body._id)
    let data = {
        _id: req.body._id,
        CategoryName: req.body.CategoryName
    }
    let updatecategory = await categorymodel.updateOne({ _id: data._id }, { CategoryName: data.CategoryName })
    console.log(updatecategory)
    res.send(updatecategory)
}


exports.deletecategory = async (req, res) => {
    let data = {
        _id: req.body._id,
    }
    let deletecategory = await categorymodel.deleteOne({ _id: data._id })
    console.log(deletecategory)
    res.send(deletecategory)
}