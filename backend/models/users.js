const mongoose = require("mongoose");
const validator =require("validator");
const userschema  = new mongoose.Schema({
    name : {
        type:String,
        required:true,
        minlength:3
    },
    email:{
        required:true,
        type:String,
        unique:[true,"email id is already present"],
        validate(value){
            if(!validator.isEmail()){
                throw new Error("Invalid email");
            }
        }
    },
    phone:{
        type:Number,
        min:10,
        required:true,
        unique:true
    }
})
//new collection(table)
const User = new mongoose.model('User',userschema);
module.exports = User;
