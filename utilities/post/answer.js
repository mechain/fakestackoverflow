const Question = require('../../schema/questions')
const Answer = require('../../schema/answers')
const createAnswer = async(answer)=>{
    const a = new Answer(answer)
    return  a.save()
}




const postAnswer = async (req,res)=>{
    const answerObj = await createAnswer(req.body)
    const questionFound =  await Question.findOneAndUpdate({ _id: req.params.id},{$push:{answer:answerObj._id}}).populate('answer tag')
    res.send(questionFound)
}


module.exports = postAnswer






// console.log(questionFound)
// console.log(answerObj._id)
// console.log(answerObj)
// console.log(questionFound)
// const result = await Question.answer.push(answerObj._id)
// const createTag = async (tag)=>{
    //     const t = new Tag(tag)
    //     return  t.save()
    // }
    // const idFound  = await req.params.id
    // const createQuestion = async(question)=>{
        //     const q = new Question(question)
        //     return  q.save()
        // }
        // const data = require("../../seed/data");
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        // const Tag = require('../../schema/tags')