import {
  GoogleGenAI,
  createUserContent,
  createPartFromUri,
} from "@google/genai";
import path from "path";
import { Request, Response } from "express";
export async function uploadImage(req: Request, res: Response) {
  try {
    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
    });

    const imageUrl = "https://res.cloudinary.com/demo/image/upload/sample.jpg";

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: createUserContent([
        createPartFromUri(imageUrl, "image/jpeg"),
        "Explain the image.",
      ]),
    });

    if (response.text) {
      return res.json({
        success: true,
        response: response.text,
      });
    } else {
      return res.status(400).json({
        success: false,
      });
    }
  } catch (e: any) {
    console.error(e);
    return res.status(500).json({
      error: e.message,
    });
  }
}
