import connectDB from "./db/index.js";
import dotenv from "dotenv"; // professional way of loading environment variables to maintain the consistency of code
dotenv.config({ path: "./.env" }); //one way to load environment variable using dotenv
/*dotenv.config({
  path: "./env",
});*/
// we would add experimental commands in package.json in scripts to make it work

connectDB();
/*
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", () => {
      console.log("error: ", error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listening on PORT ${process.env.PORT}`);
    });
  } catch (error) {
    console.log("error: ", error);
    throw error;
  }
})();
*/
