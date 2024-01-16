import express from 'express'
import cors from 'cors'
import mysql from 'mysql'

const port = 5010;
const app = express()
app.use(express.json());
app.use(cors())
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "India@2023",
    database: "FitIndia"
    
})
db.connect((err,result)=>{
    if(err)
    console.log("err occured ",err);
    else
    console.log("DB connected ");
})
app.post("/insertWorkout",(req,res)=>{
    const {type, duration, intensity, date, distance, create_at, updated_at} = req.body;
    let insertion = "insert into Workout(type, duration, intensity, date, distance, create_at, updated_at) value (?,?,?,?,?,?,?);";
    db.query(insertion,[type, duration, intensity, date, distance, create_at, updated_at],(err,result)=>{
        if(err)
        console.log("Hi error there",err);
        else
        res.send({status: "inserted"});
    })
})
app.post("/insertGoal",(req,res)=>{
    const {type,target,progress,deadline,description,status,created_at,updated_at} = req.body;
    let query = "insert into goal (type,target,progress,deadline,description,status,created_at,updated_at) value (?,?,?,?,?,?,?,?);";
    db.query(query,[type,target,progress,deadline,description,status,created_at,updated_at],(err,result)=>{
        if(err)
        console.log(err)
        else
        res.send({status:"inserted"})
    })
})
app.get("/view",(req,res)=>{
    let select = "select * from Workout";
    db.query(select,(err,result)=>{
        if(err)
        console.log("Error there",err)
    else
    console.log(result)
    res.send(result)
    })
})
app.get("/verify",(req,res)=>{
    let select = "select * from Admin_verify"
    db.query(select,(err,result)=>{
        if(err){
            console.log("error there",err)
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})
app.listen(port,()=>{
    console.log("Connected to the port",port);
});