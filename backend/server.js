const express = require('express');
const chats = require("./data/data.js"); 
const dotenv = require('dotenv')
dotenv.config()
const app = express()
app.get('/',(req, res)=>{
    res.send(chats)
})

app.get("/api/chat/:id",(req,res)=>{
    const SingleChat = chats.find((c)=>c._id === req.params.id) 
    console.log(SingleChat)
    res.send(SingleChat)
})
const Port = process.env.PORT || 5000;
app.listen(Port)