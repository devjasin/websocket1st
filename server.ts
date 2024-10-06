import app from "./src/app";
import {config } from "dotenv"
import { envConfig } from "./src/config/config";
import { connect } from "http2";
import connectToDb from "./src/config/db";


async function startServer(){
  await connectToDb()
  const port=envConfig.port || 4000
  app.listen(process.env.PORT,()=>{
    console.log(`Server is running on  at ${port}`);
  })
}
startServer()