import mongoose from "mongoose";
import dotenv from "dotenv";

import { DB_NAME } from "../constant.js";

const connectDB = async () => {
  dotenv.config();
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connceted !! DB HOST: ${connectionInstance.connection.host} \n`
    );
  } catch (error) {
    console.log("Error while connecting to MongoDB", error);
    process.exit(1);
  }
};
export default connectDB;
