import express from "express"
import'dotenv/config'
import  StatusCodes  from "http-status-codes";
import userRouter from "./routes/user.routes.js";
import bodyParser from "body-parser";
const app=express()
const PORT=process.env.PORT;

// console.log(process.env.PORT);
app.use(bodyParser.json())
console.log(PORT)
app.get("/",(req,res)=>{
  res.status(200).json({messsage:"welcomne to homepage"})
})


// app.get("/api/users",(req,res)=>
// {res.status(StatusCodes.OK).json({message:"from users route"})})
// 
app.use("/api/users",userRouter)


app.listen(PORT,(req,res)=>
{
  console.log(`server running at port${PORT}`);
})