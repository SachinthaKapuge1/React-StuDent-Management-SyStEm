const express = require("express")
const mysql = require("mysql")
const cors = require("cors")


const app = express();

app.listen(3000,()=>{
    console.log("Backend!")
});