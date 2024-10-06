
export enum Status{
  Completed="complete",
  Pending="pending"
}



export interface ITodo{
  task:string,
  deadline:string,
  status: Status
}