import express from "express"
import connection from "./config/db.js";
const app=express()
connection()
app.listen(2000,()=>{
    console.log("server started at port 2000");
})