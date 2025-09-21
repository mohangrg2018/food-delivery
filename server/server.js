import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

//app config
const app = express();
const port = process.env.PORT || 5000;

//middlewares
app.use(cors());
app.use(bodyParser.json());

//api endpoints
app.get("/", (req, res) => {
  res.status(200).send("Hello, World!");
});

//listener
app.listen(port, () => console.log(`Server is running on port ${port}`));
