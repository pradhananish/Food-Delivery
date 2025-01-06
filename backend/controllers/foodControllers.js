import foodModel from "../models/foodModels.js";
import fs from 'fs';

// Add a food item
const addFood = async (req, res) => {
  if (!req.file) {
    return res.status(400).json({ success: false, message: "Image file is required" });
  }

  const image_filename = req.file.filename;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_filename,
  });

  try {
    const savedFood = await food.save();
    res.status(201).json({
      success: true,
      message: "Food item added successfully",
      data: savedFood,
    });
  } catch (error) {
    console.error("Error adding food item:", error);

    if (fs.existsSync(`uploads/${image_filename}`)) {
      fs.unlinkSync(`uploads/${image_filename}`);
    }

    res.status(500).json({
      success: false,
      message: "Failed to add food item",
      error: error.message,
    });
  }
};

//all food list
const listFood = async (req, res)=>{
        try {
            const foods= await foodModel.find({});
            res.json({success:true, data:foods})
        } catch (error) {
            console.log(error)
            res.json({success:false, message:"error"})
        }
}

//remove food item
const removeFood = async (req, res) => {
    try {
        const food=await foodModel.findById9(req.body.id)
        fs.unlink( `uploads/${food.image}`,()=>{})

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"food item removed successfully"})
        
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"error"})
        
    }
}


export { addFood, listFood, removeFood};