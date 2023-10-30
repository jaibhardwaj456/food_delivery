import mongoose from "mongoose";
const mongoURI =
  "mongodb+srv://jaibhardwaj456:D1BF3S77r7pGbJAO@cluster0.2z8jxqw.mongodb.net/foodpoint?retryWrites=true&w=majority";
const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("Connected to MongoDB");

    const fetch_data = await mongoose.connection.db.collection("food_items");
    const data = await fetch_data.find().toArray();
    const food_category = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const cat_data = await food_category.find().toArray();
    global.food_items = data;
    global.food_category = cat_data;
    console.log();
  } catch (err) {
    console.error(err);
  }
};

export default mongoDB;
