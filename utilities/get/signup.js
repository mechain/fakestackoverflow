const Users= require('../../schema/userpassword')
const bcrypt = require('bcrypt')

const createUser = async(user)=>{
    const newUser = new Users(user)
    return newUser.save()
}

const signUpUser= async(req,res)=>{
    const pass = req.body.password 
    bcrypt.hash(pass  , 10 , async (err ,hash )=>{
        const userInfo = await req.body
        userInfo.password = hash
        const result = await createUser(userInfo)
        res.send('/login')
    })
}

module.exports = signUpUser














// const signUp = await createUser(req.body)
// const password  = req.body.password


// const password  = await req.body.password 
// bcrypt.hash(req.body.password , 10 , async(err,hash)=> {
    //     const user = await Users.findOneAndUpdate({username:req.body.username},{$set:{password:hash}})
    // })
    // res.send('/login')