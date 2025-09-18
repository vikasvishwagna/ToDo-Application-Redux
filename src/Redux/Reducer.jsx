import { ADD_TODO } from "./action";

const initialState = {
  toDo: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDo: [
          ...state.toDo,
          { id: state.toDo.length, text: action.payLoad, completed: false },
        ],
      };
    default:
      return state;
  }
};

export default toDoReducer;