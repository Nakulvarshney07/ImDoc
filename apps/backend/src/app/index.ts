import { Router } from "express";
import { imageRouter } from "./routes/image";
import { documentRouter } from "./routes/documents";

export const appRouter:Router = Router();

appRouter.use("/image",imageRouter)
appRouter.use("/document",documentRouter)