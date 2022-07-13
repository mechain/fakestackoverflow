const Question = require("../../schema/questions")
const fetchQuestions = async (req,res)=>{
    const result = await Question.find()
   
    res.send(result)
    console.log("the output")
}

module.exports = fetchQuestions 