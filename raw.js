const jwt  = require('jsonwebtoken')

const key = "SSBDOASDIMOASMOCSMPCMSAPOMCA"
const name = {name: "shikhar"}
const token = jwt.sign(name , key)

jwt.verify(token , key , (err , decoded )=>{
    console.log(decoded.name)
})
