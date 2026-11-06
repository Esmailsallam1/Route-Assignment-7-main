const User = require("./users.moduel")

async function checkUserExists(userData) {
    const user = await User.findOne({email:userData.email , password:userData.password })
    return user ;
}
async function saveUserInDB(userData) {
    const user = await User.create(userData)
    return user
}
async function ubdateUser(id , newData) {
    const user = await User.findByIdAndUpdate(id , newData , {returnDocument:"after"})
    return user ;
}
async function deletedUser(id) {
    const user = await User.findByIdAndDelete(id , {returnDocument:"after"})
    return user
}
async function serchUser(id) {
    const user = await User.findById(id)
    return user;
}
module.exports= {checkUserExists , saveUserInDB , ubdateUser , deletedUser , serchUser} ;