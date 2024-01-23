import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    // project 1 database
    // const res = await mongoose.connect(
    //   process.env.MONGODB_URI + "/project-1-piyush"
    // );
    // short url database
    const res = await mongoose.connect(
      process.env.MONGODB_URI + "/project-2__ShortUrl"
    );
    console.log("Mongodb connection established", res.connection.host);
  } catch (error) {
    console.log(error.message);
  }
};

export { connectDB };
