import { Request, Response } from "express";
import { cloudinaryUpload } from "../../utils/cloudinaryUpload";

export const cloudinaryUploadController = async (req: Request, res: Response) => {
  try {
    console.log("start");
    
    const files = req.files as Express.Multer.File[];
    console.log("done");

    const result = await cloudinaryUpload(files);

    res.json({ files: result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Upload failed" });
  }
};