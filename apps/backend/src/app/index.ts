import { Router } from "express";
import { DataRouter } from "./routes/Data";
import { CloudinaryRouter } from "./routes/cloudinary";


export const appRouter:Router = Router();
//for all data
appRouter.use("/data",DataRouter)
//for images through cloudinary
appRouter.use("/files",CloudinaryRouter)
