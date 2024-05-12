import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

// using asyn wait syntax to connect DB as DB can be somewhere very far and may take time to respond.
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      `\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MONODB connection failed ", error);
    process.exit(1);
  }
};

export default connectDB;
