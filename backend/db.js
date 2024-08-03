// const mongoose = require("mongoose");

// const mongoURI =
//   "mongodb+srv://neofood:gZrLDrAHVobQ4Isg@neofoodcluster0.nq3kzmi.mongodb.net/neofoodmern?retryWrites=true&w=majority";

// const mongoDB = async () => {
//   try {
//     mongoose.set("strictQuery", false);
//     await mongoose.connect(mongoURI);// Added "await" to ensure the connection is established before proceeding
//     console.log("Connected to MongoDB Successfully!");

//     const foodDataCollection = mongoose.connection.db.collection("food_items");
//     const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

//     const foodData = await foodDataCollection.find({}).toArray();
//     const foodCategory = await foodCategoryCollection.find({}).toArray();

//     global.food_items = foodData;
//     global.foodCategory = foodCategory;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to connect to MongoDB");
//   }
// };

// module.exports = mongoDB;

const mongoose = require("mongoose");
require('dotenv').config();

const mongoURI = process.env.MONGO_URI;
console.log("MongoURI: ", mongoURI); 

const mongoDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB Successfully!");

    const foodDataCollection = mongoose.connection.db.collection("food_items");
    const foodCategoryCollection = mongoose.connection.db.collection("foodCategory");

    const foodData = await foodDataCollection.find({}).toArray();
    const foodCategory = await foodCategoryCollection.find({}).toArray();

    global.food_items = foodData;
    global.foodCategory = foodCategory;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to connect to MongoDB");
  }
};

module.exports = mongoDB;
