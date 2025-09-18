export const ADD_TODO = "ADD_TODO";

export const  addToDo = (text)=>(
  {
    type : ADD_TODO,
    payLoad : text
  }
)