import { Router } from "express";
import cloudinary from "../config/cloudinary";




export const cloudinaryUpload = async (files: Express.Multer.File[]) => {
  const uploadPromises = files.map(file => {
    return new Promise<{ url: string; type: string }>((resolve, reject) => {
      const isPdf = file.mimetype === "application/pdf";

      const stream = cloudinary.uploader.upload_stream(
        {
          folder: "chat-app",
          resource_type: "image"
        },
        
        (error, result) => {
          if (error) return reject(error);

          resolve({
            url: result?.secure_url || "",
            type: isPdf ? "pdf" : "image",
          });
        }
      );

      stream.end(file.buffer);
    });
  });

  return await Promise.all(uploadPromises);
};