import { FileFilterCallback } from "multer";

export const uploader = {
    filePrefix : string,
    folderName? : string,
    fileLimit?: number, 
}

const fileFilter = (
    req : Request,
    res : Response,
    cb : FileFilterCallback
) => {};