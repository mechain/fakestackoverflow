const mongoose = require('mongoose')
const data = require('./data')
const Answer = require('../schema/answers')
const Tag = require('../schema/tags')
const Question = require('../schema/questions')
mongoose.connect('mongodb://127.0.0.1:27017/seed')
.then(()=>{console.log("Database connected succesfully")})
// var tags = []

const questionCreate = (data)=>{
    data.forEach(
        async element => {
            // const name = element.tagName
            // console.log(name)
            const found  = await Tag.find({tagName:element.tagName})
            console.log('======',found)
            const id = found[0]._id
            // console.log(id)
            element.tag = id
            console.log(id,'=======')
            const result = await Question.create(element)
            // const mana = await Question.find().populate()
            console.log(result)
            // console.log(mana)
        }
    )
}
const createTag =(data)=>{
    var tags = []
    console.log('===')
    data.forEach(async element =>{
        const name  = element.tagName
        console.log(name)
        const found  = await Tag.find({tagName: name})
        console.log('===',found,'===')
        console.log(Object.keys(found).length)
        if(Object.keys(found).length===0){
            const result = await Tag.insertMany(element)
            console.log("new tag created successfully")
            // console.log('===')
        }else {
            console.log("tag already exist ")
        }
        
    } )
    
}



// createTag(data)

questionCreate(data)










































// // const seed= async (data)=>{
//     data.forEach(async element => {
//         const nameTo = element.tagName
//         const name = await Tag.findOne({tagName :nameTo})
//         console.log(name)
//         console.log("=============================",name,"=========================")
//         if(null){
//         //    tags.push(element)
//            const result  = await Tag.insertOne(element)
//             // console.log(tags)
//             console.log('diusfdihsa')
                        
//         }
//         else{
//             const found  = await Tag.findOne({})
//             // console.log(name["_id"])
//             questions.push(element)
//             // console.log(element)
//             console.log('==========================')
//         }
//     });
// // }
// seed(data)

// console.log(questions)
// const feed = ()=>{
//     const 
// }