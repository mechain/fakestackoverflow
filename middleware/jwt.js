const jwt = require('jsonwebtoken')


const jwtVerify = (req,res,next)=>{
    const accessToken = req.headers['tokens']
    if(accessToken){
        jwt.verify(accessToken , process.env.JWT_SECRET_KEY , (err,decoded)=>{
            if(err){
                // res.send(decoder)
                return res.sendStatus(401)
            }
            // console.log('*******************************8')
            res.send(decoded)
            next()
        })
    }else{
        console.log('no access token')
        res.sendStatus(401)
    }
}
module.exports = jwtVerify

