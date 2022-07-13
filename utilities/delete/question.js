const Question = require('../../schema/questions')
const Answer = require('../../schema/answers')
const Users = require('../../schema/userpassword')
const jwt = require('jsonwebtoken')
const deleteQuestion = async (req,res)=>{
    const question  = await Question.find({_id: req.params.qid})
    
    jwt.verify(req.headers['token'] , process.env.JWT_SECRET_KEY  , async(err , decoded)=>{
        if(decoded.username === question[0]['user']['username']){
            const questionDelete = await Question.deleteOne({_id : req.params.qid})
            const deleteAnswer = await Answer.deleteOne({_id: req.params.qid})
            res.send("question deleted")
        }else{
            res.send("you are not authorized ")
        }

    })
    
}

module.exports = deleteQuestion