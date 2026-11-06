const {checkUserExists ,saveUserInDB , ubdateUser , deletedUser , serchUser} = require("./users.repository")

async function signup(userData) {
    const userExist =  await checkUserExists(userData.email) ;
    if(userExist){
        throw new Error("Email already exists");
    }
    const user =  await saveUserInDB(userData)
    return user
}
async function login(userData) {
    const user =  await checkUserExists({email:userData.email , password:userData.password})
    if(!user){
        throw new Error("Invalid email or password")
    }
    return user;
}
async function update(id , newData) {
    const user = await ubdateUser(id , newData)
    if(!user){
        throw new Error("User Not Found")
    }
    return user ;
}
async function deleteUser(id) {
    const user = await deletedUser(id)
    if(!user){
        throw new Error("User Not Found")
    }
    return user
}
async function findUser(id) {
    const user = await serchUser(id)    
        if(!user){
        throw new Error("User Not Found")
    }
    return user    
}
module.exports = {signup , login , update , deleteUser , findUser} ;