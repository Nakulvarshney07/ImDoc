import express from "express";
import cors from "cors"
import { appRouter } from "./app";
import dotenv from "dotenv";
import path from "path";


const app=express();


dotenv.config({
     path: path.join(process.cwd(), ".env"),
});

console.log("ENV DEBUG:", {
  name: process.env.CLOUD_NAME,
  key: process.env.CLOUD_API_KEY,
  secret: process.env.CLOUD_API_SECRET,
});

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
app.use("/app/v1",appRouter)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})

