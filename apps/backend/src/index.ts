import express from "express";
import cors from "cors"
import { appRouter } from "./app";
const app=express();
import dotenv from "dotenv";
dotenv.config();

const port=process.env.PORT || 3001

app.use(express.json());

app.use(cors({
    origin: process.env.ORIGIN
    ,credentials:true
}))

app.post("/test",(req,res)=>{
    res.json({
        message:"Hello World"
    })
})
app.use("/app",appRouter)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

