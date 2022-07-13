const mongoose  = require('mongoose')

const Question = require('../schema/questions')
const Tag = require('../schema/tags')
const Answer = require('../schema/answers')

mongoose.connect('mongodb://127.0.0.1:27017/seeder1').then(console.log("===="))

const createQuestion = async(question)=>{
    const q = new Question(question)
    return  q.save()
}

const createAnswer = async(answer)=>{
    const a = new Answer(answer)
    return  a.save()
}

const createTag = async (tag)=>{
    const t = new Tag(tag)
    return  t.save()
}

const populate= async()=>{
    let t1= await createTag({tagName:"java"})
    let t2 =await createAnswer({tagname:"mongo"})
    console.log(t1)
    const q1 = await createQuestion({textTitle: "this is java",tag: t1._id})
    console.log(q1)
}


populate()