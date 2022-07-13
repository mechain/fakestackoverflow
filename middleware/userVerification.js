const { jwtDecrypt } = require("jose")
var validator = require('validator');



const userVerify = async (req,res,next)=>{
    const accessToken = req.headers['token']
    jwt.verify(accessToken , process.env.JWT_SECRET_KEY , (err, decoded)=>{
        const user = decoded
    })
    next()
} 