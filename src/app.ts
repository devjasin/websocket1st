import express, { Request, Response } from "express"
import path, { join } from "path"
const app=express()
import("../src/todo/todoController")


app.set("views",path.join(__dirname,'views'))//views folder kahaxa vanera dekhako where last ko views vani chai folder name ho
app.set("view engine","ejs")
app.get("/",(req:Request,res:Response)=>{
  res.render("home.ejs")
})

export default app