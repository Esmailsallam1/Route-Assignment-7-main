const {Router} = require("express")
const userRouter = Router()
const {addUser , userLogin , updatedUser , userDeleted ,findUserById} = require("./users.controller")
userRouter.post("/signup" , addUser )
userRouter.post("/login" , userLogin )
userRouter.patch("/:id" , updatedUser )
userRouter.delete("/" , userDeleted)
userRouter.get("/" ,findUserById )

module.exports = userRouter ;