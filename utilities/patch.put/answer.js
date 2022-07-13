const jwt  = require('jsonwebtoken')
const Answer = require('../../schema/answers')

const answerModify = async(req,res) =>{
    const answer = await Answer.find({_id: req.headers.token})
    
    jwt.verify(req.headers.token , process.env.JWT_SECRET_KEY , (err, decoded)=>{
        if(answer[0].user.username  === decoded.username){
            const deleteAnswer = await Answer.findOneAndUpdate({_id : req.params.aid},{$set: {answerTitle: req.body.textTitle}},
                {$set: {answerText: req.body.answerText}},
                {$set: {answerBy : req.body.answerBy }},
                {$set: {answerWhen: req.body.answerWhen}}
                )
            res.send("answer updated")
        }
    })
}
module.exports = answerModify








