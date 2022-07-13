require('dotenv').config({path:'./.env'});
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require("cookie-parser");
const userRoutes = require('./routes/userRoutes');
const uploadRoutes = require("./routes/uploadRoute")
const app = express();

//Database connection
mongoose.connect(process.env.MONGO_URL).then(()=> {
    app.listen(process.env.PORT || 5000);
    console.log("Database Is Connected Successfully");
})

// middleware
app.use(express.json());
express.urlencoded({extended: true});
app.use(cookieParser());
app.use("/uploads",express.static('uploads'))

// Routes
app.use("/api/auth",userRoutes);
app.use(uploadRoutes);

