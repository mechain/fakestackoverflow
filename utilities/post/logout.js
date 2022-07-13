const Users = require('../../schema/userpassword')

const logout = async (req,res)=>{
    const token = req.headers['token']
    jwt.verify(token , process.env.JWT_SECRET_KEY , async(err , decoded)=>{
        const userInfo = await Users.findOneAndUpdate({username:decoded.username},{$pull:{token:token}})
        res.send('logout')
    })
}

module.exports = logout