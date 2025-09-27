const express = require("express")
const  app =  express()
require("dotenv").config()
const database = require("./config/db")

const port = process.env.port

database()
app.listen(port,()=>{
console.log(`server is start at port ${port}`);

})