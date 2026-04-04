import { Router } from "express";
import { upload } from "../../middleware/multer";

import { cloudinaryUploadController } from "../../controllers/cloudinary";




export const CloudinaryRouter:Router=Router();
CloudinaryRouter.post("/upload",upload.array("files"),cloudinaryUploadController)

