import { Router } from "express";
import { uploadImage } from "../../controllers/image";


export const imageRouter:Router=Router();
imageRouter.post("/upload",uploadImage)

