const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');

// const User=require("./model/userSchema");
const app=express();


dotenv.config({path:'./.env'})
app.use(express.json());
app.use(require("./Router/auth"));
const port=process.env.PORT;

const middleware=(req,res,next)=>{
    console.log("Middleware in between");
    next();
}


const url=process.env.DATABASE;

mongoose.connect(url)
.then(()=>{
    console.log("Connected Successfully");
})
.catch((err)=>{
    console.log(err);
})


app.get("/",(req,res)=>{
    res.send("Welcome to home page");
})

app.get("/about",middleware,(req,res)=>{
    res.send("Welcome to about page");
})

app.get("/contact",(req,res)=>{
    res.send("Welcome to contact page");
})

app.get("/signin",(req,res)=>{
    res.send("Welcome to signin page");
})

app.get("/signup",(req,res)=>{
    res.send("Welcome to signup page");
})



app.listen(port,()=>{
    console.log(`Server listen at ${port} port`);
})
