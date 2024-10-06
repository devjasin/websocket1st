



import mongoose from "mongoose";
import { envConfig } from "./config";
import exp from "constants";


async function connectToDb(){
  try {
    mongoose.connection.on("connected",()=>{
      console.log("Connected to MongoDB");
    })
    await mongoose.connect(envConfig.mongoConnectionString as string)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}


export default connectToDb
