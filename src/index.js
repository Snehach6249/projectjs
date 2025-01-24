import express from "express"
import'dotenv/config'
import  statusCodes  from "http-status-codes";
import userRouter from "./routes/user.routes.js";
import bodyParser from "body-parser";
const app=express()
const PORT=process.env.PORT;

// console.log(process.env.PORT);

app.get("/",(req,res)=>{
  res.status(statusCodes.OK).json({messsage:"welcomne to the code"})
})


app.get("/api/users",(req,res)=>
{res.status(statusCodes.OK).json({message:"from users route"})})

app.use("/api/users",userRouter)


app.listen(PORT,()=>
{
  console.log(`server running at port${PORT}`);
})