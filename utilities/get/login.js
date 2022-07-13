const Users = require("../../schema/userpassword")
const jwt = require('jsonwebtoken')
const checkPassword = require('../userValidation')
const bcrypt = require('bcrypt')

const logInUser = async (req,res)=>{
    const userInfo = await Users.find({username:req.body.username})
    const userDetails = userInfo[0]
    console.log(userDetails)
    if(userDetails.username === req.body.username){
        bcrypt.compare(req.body.password , userDetails.password, async (err,result)=>{
            if(result){
                    const key = process.env.JWT_SECRET_KEY
                    var  generatedToken  = jwt.sign({username: req.body.username}, key)
                    const result  = await Users.findOneAndUpdate({username:userDetails.username},{$push:{token:generatedToken}})
                    res.send("user login sccessfully")
            }else{
                res.send('entered incorrect password')
            }
        })
    }
    else{
        console.log('enter correct username ')
        res.send('you are not authorised')
    }
}
    
module.exports = logInUser
        
        
        
    
    
// if(checkPassword(req.body.password ,userDetails.password )== true){
//     console.log("you are authorised")
//     const key = process.env.JWT_SECRET_KEY
//     var  generatedToken  = jwt.sign({name: req.body.username}, key)
//     const result  = await Users.findOneAndUpdate({username:userDetails.username},{$push:{token:generatedToken}})
//     res.send(result[0])
// }
// else{
//     console.log('entered wrong password ')
//     res.send('entered incorrect password')
// }
    
    
    
    
    
    
    
    // if( req.body.email == userDetails.email && bcrypt.compare() ) {
    //     console.log("you are authorised")
    //     const key = process.env.JWT_SECRET_KEY
    //     var  generatedToken  = jwt.sign({name: username}, key)
    //     const result  = await Users.findOneAndUpdate({username:userDetails.username},{$set:{token:generatedToken}})
                
    // }