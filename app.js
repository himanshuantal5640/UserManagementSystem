const express = require('express');
const app = express();
const userRouter = require("./routes/users.routes.js");

// app level middleware

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("User Management API is Running");
})

app.use("/api/users",userRouter);
module.exports = app;