const {Schema , model} = require("mongoose");

const notesSchema = new Schema({
title:{type:String ,
    required:true,
    trim: true ,
},
content:{type:String ,
    required:true
},
userId:{type:Schema.Types.ObjectId,
    ref:"User",
    required:true}
},{
    timestamps:true
})
const Note = model("Note", notesSchema)
module.exports = Note;