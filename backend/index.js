require('dotenv').config();


const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const url = process.env.MONGO_URL;

const mongoose = require('mongoose');




app.listen(PORT,(req,res)=>{
    console.log("Server is running on port 3002");
    mongoose.connect(url);
    console.log("database connection sucessfull");
});