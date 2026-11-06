const {signup , login , update , deleteUser , findUser} = require("./users.service")

async function addUser(req , res , next){
    try {
    const newUser =  await signup(req.body)
    res.json({
        message:"User added successfully",
        data:newUser
    })
    } catch (error) {
        next(error)
    }
}
async function userLogin(req , res , next){
    try {
    const user =  await login(req.body)
    res.json({
        message:"LogIn successfully",
        data:user
    })
    } catch (error) {
        next(error)
    }
}
async function updatedUser(req , res , next){
    try {
        const user = await update(req.params.id , req.body)
        res.json({
            message:"User Updated",
            data:user
        })
    } catch (error) {
        next(error)
    }
}
async function userDeleted(req , res , next){
    try {
        const user = await deleteUser(req.query.id)
        res.json({
            message:"User Deleted",
            data:user
        })
    } catch (error) {
        next(error)
    }
}
async function findUserById(req , res , next){
    try {
        const user = await findUser(req.query.id)
        res.json({
            message:"User Data",
            data:user
        })
    } catch (error) {
        next(error)
    }
}

module.exports = {addUser , userLogin , updatedUser , userDeleted ,findUserById} ; 