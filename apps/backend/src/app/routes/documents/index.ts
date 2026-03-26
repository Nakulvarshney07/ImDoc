import { Router } from "express";
import { uploadDocument } from "../../controllers/documents";

export const documentRouter:Router=Router();

documentRouter.put("/upload",uploadDocument)