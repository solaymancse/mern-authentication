require('dotenv').config({path:'./.env'});
const express = require('express');
const mongoose = require('mongoose');
const app = express();

//Database connection
mongoose.connect(process.env.MONGO_URL).then(()=>{
    const server = app.listen(process.env.PORT || 8000);
    console.log("Database Is Connected Successfully");
    
})
// middleware

// Routes

