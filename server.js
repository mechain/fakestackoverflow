const express =require('express')
const app = express()
const mongoose = require('mongoose')
const tasks = require('./routes/routes')
require('dotenv').config()

app.use(express.json())









mongoose.connect('mongodb://127.0.0.1:27017/seeder')
.then(()=>{console.log("Database connected succesfully")})




app.use('/',tasks);



app.listen(3000, ()=>{
    console.log(`Server Connected at port ${3000}`)
})