import express from "express";
import {
  addFoodItem,
  listFoodItems,
  removeFoodItem,
} from "../controllers/FoodController.js";
import multer from "multer";

const foodRouter = express.Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

// attach upload middleware
foodRouter.post("/add", upload.single("image"), addFoodItem);
foodRouter.get("/list", listFoodItems);
foodRouter.post("/remove", removeFoodItem);

export default foodRouter;
