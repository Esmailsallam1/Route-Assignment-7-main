const express = require("express")
const connectDB =require("./common/db/mongoose")
const notesRoture = require("./app/notes/notes.route")
const usersRoture = require("./app/users/users.route")
connectDB()
const app = express() ; 
app.use(express.json())
app.use("/notes",notesRoture)
app.use("/users",usersRoture)


app.use((error , req , res , next)=>{
    if(error.code === 11000){
        res.status(400).json({
            message: "Email already exists"
        })
    }else{
        res.json({
            message: error.message ,
            sucsses:false,
            stack:error.stack
        })
    }
})

app.listen(3000 , ()=>{
    console.log("App Listen In Port 3000");
})