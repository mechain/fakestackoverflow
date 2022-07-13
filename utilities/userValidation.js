// const Users = require('../schema/userpassword')

const checkPassword = async (inputPassword,comparePassword)=>{
    const match = await bcrypt.compare(inputPassword , comparePassword)
    // console.log(match,'=================')
    if(match){
        return true
    }else{
        console.log("entered wrong password")
    }
}

module.exports = checkPassword