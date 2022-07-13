const Question = require('../../schema/questions')
const Answer = require('../../schema/answers')
const Users = require('../../schema/userpassword')
const jwt = require('jsonwebtoken')
const modifyQuestion = async (req,res)=>{
    const question  = await Question.find({_id: req.params.qid})
    if(req.headers.id === question[0][userId]){
        const questionUpdate = await Question.findOneAndUpdate({_id: req.params.qid},{$set: { textTitle : req.body.textTitle}},{$set : {descriprtion}})
        res.send("question modified")
    }else{
        res.send("you are not authorized ")
    }
}

module.exports = modifyQuestion