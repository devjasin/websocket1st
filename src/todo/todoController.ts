import { Socket } from "socket.io";
import { getSocketIo } from "../../server";
import todoModel from "./todoModel";






class Todo{
  private io=getSocketIo()
  constructor(){
    this.io.on('connection',(socket:Socket)=>{
      console.log("new client connected")
      socket.on("addTodo",(data)=>{
        this.handleAddTodo(socket,data)
      })
    })
  }
  private async handleAddTodo(socket:Socket,data:any){
  try {
      const{task,deadline,status}=data
   const todo= await todoModel.create({
        task,
        deadline,
        status
      })
     const todos=await todoModel.find()
     socket.emit("todos_updated",{
      status:"success",
      data:todos
     })
  } catch (error) {
    socket.emit("todo_response",{
      status:"error",
      error
    })
  }
  }
}


export default new Todo()