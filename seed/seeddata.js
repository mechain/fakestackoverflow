const mongoose = require('mongoose')
const data = require('./data')
const Question = require('../schema/questions')
const Answer  = require('../schema/answers')
const Tags = require('../schema/tags')

mongoose.connect('mongodb://127.0.0.1:27017/seeder')
.then(()=> console.log("succesfully connected to database "))

const creatingTag = async (tagData)=>{
    tagData.forEach(async element => {
        const findingTag = await Tags.find({tagName : element.length})
        if(Object.keys(findingTag).length === 0 ){
            const tagAdded = await Tags.insertMany(element)
            console.log("tag successfully created ")
        }else {
            console.log("tag already existed")
        }
    })
}

const creatingQuestion = async (questionData)=>{
    questionData.forEach(async element=>{
        const insertIntoTag = await Tags.find({ tagName : element.tagName})
        const presentTagId = insertIntoTag[0]._id
        element.tag = presentTagId
        // console.log(presentTagId)
        // const questionInserted  = await Question.create(questionData)
        // console.log(questionInserted)
    })
    const result = await Question.find()
    console.log(result)
}




// creatingTag(data)
creatingQuestion(data).then(()=>console.log('question created succesfully'))