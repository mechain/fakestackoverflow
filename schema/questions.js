const mongoose = require('mongoose')
const questionSchema = new mongoose.Schema({
    // serialNo : Number , 
    textTitle :  String,
    description : String ,
    askedBy : String ,
    askedWhen : String ,
    questions : String,
    tag :[ {
        type: mongoose.Schema.Types.ObjectId,
        ref: "tag",
        // required : true
    } ],
    answer : [{
        type: mongoose.Schema.Types.ObjectId,
        ref : "answer",
        // required: true
    }],
    user: {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        unique : true
    }
})

// "description":"question description",












// questionSchema.virtual("Tag",{
//     ref:"Tag",
//     localField:"_id",
//     foreignField : "question",
// })
// questionSchema.virtual("Answer",{
//     ref: "Answer ",
//     localField : "_id",
//     foreignField : "question"
// })
questionSchema.index({unique: true})

const Question = mongoose.model('question',questionSchema)


module.exports=  Question
