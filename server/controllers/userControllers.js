const User = require("../models/userModel");
const sendMail = require("../helpers/sendMail");
const createToken = require("../helpers/createToken");
const validateEmail = require("../helpers/validateEmail");
const bcrypt = require("bcryptjs");


const userController = async (req,res) => {
 
       try{
           // get info
        const {name,email,password} = req.body;
        // check fields
        if(!name || !email || !password) return res.status(400).json({msg:"Please Fill in all Fields."})
        // check email
        if(!validateEmail(email)) return res.status(400).json({msg:"Please Enter Valid Email"})
        // check user
        const user = await User.findOne({email:email});
        if(user) return res.status(400).json({msg:"This email is already register."})
        // check password
        if(password.length < 6) return res.status(400).json({msg: "Password must be at least 6 Characters"});
        // hash password
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(password, salt);

        // create token
        const newUser = {name,email,password:hashPassword};
        const activation_token = createToken.activation(newUser);

        // send mail
        const url = `http://loaclhost:3000/api/auth/activate/${activation_token}`;
        sendMail.sendEmailRegister(email, url, "Verify Your Email");
        //register success
        res.status(200).json({msg:"Welcome! please check your email."})
       }catch(err){
           res.status(500).json({msg: err.message})
       }
   

};

exports.userController = userController;
