import app from "./src/app";
import {config } from "dotenv"
import { envConfig } from "./src/config/config";
import { connect } from "http2";
import connectToDb from "./src/config/db";
import { Server } from 'socket.io'
import { Socket } from "dgram";



let io:Server | undefined ;

 function startServer(){
  connectToDb()
  const port=envConfig.port || 4000
 const server= app.listen(port,()=>{
    console.log(`Server is running on  at ${port}`);
  });
   io=new Server(server)
}



function getSocketIo(){
  if(!io){
    throw new Error("socket not initialized")
  }
  return io;
}
startServer()
export{ getSocketIo }


//post=on data lida
//get=emit data pathauda
//request= socket
//api=event
//req.body=data