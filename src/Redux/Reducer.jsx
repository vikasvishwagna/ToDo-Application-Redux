import { compose } from "redux";
import { ADD_TODO, TOGGLE_TODO } from "./action";

const initialState = {
  toDos: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        toDos: [
          ...state.toDos,
          { id: state.toDos.length, text: action.payLoad, completed: false },
        ],
      };

    case TOGGLE_TODO:
      return {
        ...state,
        toDos: state.toDos.map((todo) =>
          todo.id == action.payLoad ? { ...todo, completed: !todo.completed } : todo
        ),
      };

    default:
      return state;
  }
};

export default toDoReducer;
