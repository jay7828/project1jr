const express = require("express");
const app =express();

const Note = require('./model/Notes');

const mongoose =require("mongoose");

const mongoDBpath="mongodb+srv://jayesh:jayeshsharma@cluster0.8bukqbm.mongodb.net/notedb"
mongoose.connect(mongoDBpath).then(function(){
    const bodyParser =require('body-parser');
    app.use(bodyParser.urlencoded({extended : false}));
    app.use(bodyParser.json());
    //Note Router

    app.get("/",function(req,res){
        const response ={message : "API Works"  };
        res.json(response);
    })
    const noteRouter =require('./routes/Note');
    app.use("/notes",noteRouter);


})

const PORT =process.env.PORT ||5000;

app.listen(PORT,function()
{
    console.log("server is Running at Port No." + PORT);
});