const Question = require('../../schema/questions')
const Tag = require('../../schema/tags')
const Users = require('../../schema/userpassword')
const createQuestion = async(question)=>{
    const q = new Question(question)
    return  q.save()
}

const  createTag = async (tag)=>{
    const t = new Tag(tag)
    return  t.save()
}

const postQuestion = async(req,res)=>{
    const tagg = await Tag.find({tagName: req.body.tagName})
    if(tagg.length){
        console.log("tag exists")
    }else {
        var tagAdd = await createTag(req.body)
    }
    const questionCreate = await createQuestion(req.body)
    const result = await Question.findOneAndUpdate({_id:questionCreate._id},{$push:{tag:tagAdd._id}},{$set:{user:req.headers.id }})
    res.send(result)
}
module.exports = postQuestion
















// const user = await Users.find({_id:req.headers.id})