const express = require('express');
const router = express.Router();
const User = require('../model/userSchema')
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');

router.get("/", (req, res) => {
    res.send("Welcome to home router");
});

//register route
router.post("/register", async (req, res) => {
    const { name, email, phone,  password, cpassword } = req.body;
    if (!name || !email || !phone  || !password || !cpassword) {
        return res.status(422).json({ message: "Please fill all the details" });
    }

    try {
        const userExist = await User.findOne({ email: email })
        if (userExist) {
             return res.status(422).json({ message: "Email already registered" });
        }
        else if(password!=cpassword)
        {
            return res.status(422).json({ message: "Password and confirm password not matched" });
        }
        else{
        const user = new User({ name, email, phone, password, cpassword });
        await user.save(); 
        res.status(201).json({ message: "Successfully saved" });
        }
    }
    catch(err) {
        console.log(err)
        res.status(500).json({ error: "Error while registering" });
    }
})


//login route

router.post("/signup",async(req,res)=>{
    const {email,password}=req.body;
    if(!email||!password)
    {
        return res.status(400).json({ message: "Please fill all the details" });
    }
    try{
        const userLogin=await User.findOne({email:email});
        if(userLogin)
        {
            const isMatched=await bcrypt.compare(password,userLogin.password);
            const token=await userLogin.genAuthToken();
            res.cookie("jwtoken",token);
            console.log(token);
            if(!isMatched)
            {
                res.status(400).json({message:"Invalid Credentials"});
            }
            else
            {
                res.status(202).json({message:"Login sucessfully"});
            }
        }
        else
        {
            res.status(404).json({message:"Invalid Credentials"});
        }
    }
    catch(err)
    {
        console.log("Error");
    }
})

module.exports = router;
