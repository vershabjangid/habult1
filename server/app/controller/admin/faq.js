const newfaqsection = require("../../model/admin/faq")

exports.faqdata = async (req, res) => {
    let data = {
        Faqquestion: req.body.Faqquestion,
        Faqanswer: req.body.Faqanswer
    }


    let insertfaq = await newfaqsection(data)

    insertfaq.save().then((inserting) => {
        res.send({
            "Status": 1,
            "message": "data inserted successfully"
        })
    })
        .catch((error) => {
            if (error._message == "hubalt_users validation failed") {
                res.send({
                    "Status": 0,
                    "Message": "Data Missing"
                })
            }
            else {
                res.send({
                    "Status": 0,
                    "Message": "Data Already Exists"
                })
            }
        })
}

exports.getfaq = async (req, res) => {
    let getfaq = await newfaqsection.find()
    res.send(getfaq)
}