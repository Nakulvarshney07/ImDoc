import { Router } from "express";
import { uploadData } from "../../controllers/uploadInfo";
import { sendMessages } from "../../controllers/sendMessages";


export const DataRouter:Router=Router();
DataRouter.post("/upload",uploadData)//will upload or add data to database and send reponse to frontend
DataRouter.get("/chat/:conversationId",sendMessages)// will give back all the conversation messages based on conversation id to frontend when user opens the chat

