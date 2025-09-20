export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addToDo = (text) => ({
  type: ADD_TODO,
  payLoad: text,
});

export const toggleToDo = (id) => ({
  type: TOGGLE_TODO,
  payLoad: id,
});

export const editToDo = (id,newText) => ({
  type : EDIT_TODO,
  payLoad : {id, newText}
})

export const deleteToDo = (id)=>({
  type : DELETE_TODO,
  payLoad : id
})