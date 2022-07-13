const mongoose  = require('mongoose')

const answerSchema = new mongoose.Schema({
    // serialNo : Number,
    answerTitle : String ,
    answerText : String ,
    answerBy : String ,
    answerWhen : String,
    question : {
    
        type : mongoose.Schema.Types.ObjectId ,
        ref : "question",
        // require : trues
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "user",
        unique: true
    }
})


const Answer = mongoose.model('answer',answerSchema)

module.exports =  Answer 