const {Schema , Model, model} = require("mongoose");

const userSchema = new Schema({
    name:{type:String , required:true},
    email:{type:String ,  required:true , lowercase:true , trim:true},
    password:{type:String , required:true, minlength:5 , maxlength:20},
    phone:{type:String , required:true},
    age:{type:Number , min:18 , max:60}
});
const User = model("User" , userSchema)
module.exports = User ;