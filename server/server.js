import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import foodRouter from "./routes/FoodRoutes.js";

// load env variables
dotenv.config();

//app config
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(bodyParser.json());

//db connection
connectDB();

//api endpoints

app.use("/api/food", foodRouter);

app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

//listener
app.listen(port, () => console.log(`Server is running on port ${port}`));
