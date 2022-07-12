const { Schema,model } = require('mongoose');

const userSchema = new Schema(
    {
        name:{
            type:String,
            required:[true,"Please Enter Your Name"],
            trim: true,
        },
        email:{
            type:String,
            required:[true,"Please Enter Your Email"],
            trim: true,
            unique: true,
        },
        password:{
            type:String,
            required:[true,"Please Enter Your Password"],
            min: 6,
        },
        avatar:{
            type:String,
            default:"",

        },
    }, {timestamp:true} 
);

const User = model("User",userSchema);
module.exports = User;