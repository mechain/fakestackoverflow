const userpassword = require("../../schema/userpassword")

const logOut = async (req,res)=>{
    const userInfo = await userpassword.find({username})

}