import express from 'express';
import { addFood, listFood, removeFood } from '../controllers/foodControllers.js'; 
import multer from 'multer';
import path from 'path';

const foodRouter = express.Router();

// Image storage engine
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../uploads')); 
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 }, 
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);

    if (extName && mimeType) {
      cb(null, true);
    } else {
      cb(new Error('Only .jpeg, .jpg, or .png files are allowed!'));
    }
  },
});

// Route to add a food item
foodRouter.post('/add', upload.single('image'), (req, res, next) => {
  // Error handling for file upload
  if (!req.file) {
    return res.status(400).json({ success: false, message: 'Image is required' });
  }
  next();
}, addFood);


foodRouter.get("/list", listFood)

foodRouter.post("/remove", removeFood )

export default foodRouter;