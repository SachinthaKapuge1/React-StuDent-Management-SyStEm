const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
// const axios = require("axios")


const app = express();
app.use(express.json())
app.use(cors())


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

app.post('/api/student',(req,res)=>{
    
    const q = "INSERT INTO students(`name`,`class`,`district`) VALUES (?)"
    const values = [
        req.body.name,
        req.body.grade,
        req.body.district
    ]
    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Sudent added successfully");
    })
})

app.delete('/api/student/:id',(req,res)=>{
    const q="DELETE FROM students WHERE id=?";
    const id=req.params.id;
    db.query(q,[id],(err,data)=>{
        if(err) {return res.json(err)}
        return res.json("Student successfully deleted!")
    })
})

app.put('/api/student/:id',(req,res)=>{
    const id =req.params.id;
    const q = "UPDATE students SET `name`=? ,`class`=?,`district`=? WHERE id=?"
    const values = [
        req.body.name,
        req.body.grade,
        req.body.district
    ]
    console.log(id)
    db.query(q,[...values,id],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Student updated successfully!");
    })
})




app.listen(3000,()=>{
    console.log("Backend!")
});