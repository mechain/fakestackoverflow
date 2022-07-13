const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required : true,
        unique: true
    },
    email:{
        type: String , 
        required: true
    },
    password : {
        type: String,
        required : true
    },
    token: [{
        type: String ,
        required : true
    }]
})

module.exports = mongoose.model("userInfo",userSchema)