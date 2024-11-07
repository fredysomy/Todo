const express = require('express');

const app = express();


app.use(express.json())


app.get("/",(req,res)=>{
    res.send("Hello World")
})


app.get("/hi",(req,res)=>{
    res.send("Hi Saintgits")
})


app.listen(3000,()=>{   
    console.log("Server is running on port 3000")
})

