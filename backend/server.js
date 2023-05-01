const express = require("express")
const mysql = require("mysql")
const cors = require("cors")


const app = express();
app.use(express.json())
// app.use(cors())


const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'student_db'
})

db.connect()

app.get('/api/student',(req,res)=>{
    const q = "SELECT * FROM students"
    db.query(q,(err,data)=>{
        if(err){return(res.json(err))} 
        return res.json(data)
    })
})



app.listen(3000,()=>{
    console.log("Backend!")
});