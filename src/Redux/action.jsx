export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const addToDo = (text) => ({
  type: ADD_TODO,
  payLoad: text,
});

export const toggleToDo = (id) => ({
  type: TOGGLE_TODO,
  payLoad: id,
});
