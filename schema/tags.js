const mongoose  = require('mongoose')

const tagsSchema = new mongoose.Schema({
    // serialNo : Number ,
    tagName : String ,     
    // question : {
    //     type : mongoose.Schema.Types.ObjectId ,
    //     ref :  "question",
    //     // required : true
    // }
})

module.exports =  mongoose.model('tag',tagsSchema)

