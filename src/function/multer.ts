import uniqid from 'uniqid';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, res, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        const uid = uniqid();
        cb(null, "Img:" + uid + ";" + file.originalname);
    }
});
export const upload = multer({ storage: storage });