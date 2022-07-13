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
            default:"https://res.cloudinary.com/dabhwcdyv/image/upload/v1657729482/avatar/blank_avatar_nyh5gq.png",

        },
    }, {timestamp:true} 
);

const User = model("User",userSchema);
module.exports = User;