let mongoose = require('mongoose')


let adminmeetfounderschema = mongoose.Schema({
    MeetFounderName: {
        type: String,
        required: true
    },
    MeetFounderIcon: {
        type: String,
        required: true
    },
    MeetFounderDesignation: {
        type: String,
        required: true
    },
    MeetFounderParagraph: {
        type: String,
        required: true
    }
})



let adminMeetFounderModel = mongoose.model('meet-founder', adminmeetfounderschema)
module.exports = adminMeetFounderModel;
