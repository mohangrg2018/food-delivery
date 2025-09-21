import foodModel from "../models/FoodModel.js";
import fs from "fs";

//add food item
const addFoodItem = async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const image = req.file ? req.file.path : null;
    const newFoodItem = new foodModel({
      name,
      description,
      price,
      image,
      category,
    });
    const savedFoodItem = await newFoodItem.save();
    res.status(201).json(savedFoodItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// list all food items
const listFoodItems = async (req, res) => {
  try {
    const foodItems = await foodModel.find();
    res.status(200).json(foodItems);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// remove food item
const removeFoodItem = async (req, res) => {
  try {
    const { id } = req.body;
    const foodItem = await foodModel.findById(id);
    if (!foodItem) {
      return res.status(404).json({ message: "Food item not found" });
    }

    // delete image file if it exists
    if (foodItem.image) {
      try {
        fs.unlinkSync(foodItem.image);
      } catch (err) {
        console.error("Error deleting file:", err.message);
      }
    }

    // delete the document
    await foodModel.findByIdAndDelete(id);

    res.status(200).json({ message: "Food item removed successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
};

export { addFoodItem, listFoodItems, removeFoodItem };
