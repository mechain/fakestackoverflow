const { decodeProtectedHeader } = require('jose')
const Answer = require('../../schema/answers')
const Question = require('../../schema/questions')

const answerDelete = async(req,res) =>{
    
    jwt.verify(req.headers['token'], process.env.JWT_SECRET_KEY , async (err , decoded)=>  {  
        const answer = await Answer.find({_id: req.params.aid})
        if(decoded.username  === answer[0].user.username){
        const questionAnswerTagRemove = await Question.findOneAndUpdate({_id : req.params.aid }, {$pull : { answer : req.params.aid}})
        const deleteAnswer = await Answer.deleteOne({_id : req.params.aid})
        res.send("answer deleted")}
    })
}
module.exports = answerDelete