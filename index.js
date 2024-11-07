const express = require('express');
const mongoose = require('mongoose');


const app = express();


app.use(express.json())

const CON_STRING="mongodb+srv://fredy:fredy.csa2125@cluster0todo.f7lz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0Todo"


mongoose.connect(CON_STRING,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Connected to MongoDB")
}).catch((err)=>{
    console.log(err)
})



app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.get("/hi",(req,res)=>{
    res.send("Hi Saintgits")
})


app.listen(3000,()=>{   
    console.log("Server is running on port 3000")
})

