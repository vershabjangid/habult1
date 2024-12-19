const faqmodals = require("../../model/admin/faqmodal")

exports.addfaq = async (req, res) => {
    let data = {
        Question: req.body.Question,
        Answer: req.body.Answer
    }

    let insertfaq = await faqmodals(data)
    insertfaq.save()
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


exports.viewfaq = async (req, res) => {
    let viewdata = await faqmodals.find()
    res.send(viewdata)
}



exports.updatefaq = async (req, res) => {

    let updatefaq = await faqmodals.updateOne({ _id: req.body._id }, { Question: req.body.Question, Answer: req.body.Answer })
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


exports.deletefaq = async (req, res) => {

    let deleteone = await faqmodals.deleteOne({ _id: req.body._id })
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