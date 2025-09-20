import { compose } from "redux";
import { ADD_TODO, EDIT_TODO, TOGGLE_TODO, DELETE_TODO } from "./action";

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
          todo.id == action.payLoad
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case EDIT_TODO:
      return {
        ...state,
        toDos: state.toDos.map((todo) =>
          todo.id == action.payLoad.id
            ? { ...todo, text: action.payLoad.newText }
            : todo
        ),
      };

      case DELETE_TODO:
        return {
          ...state,
          toDos: state.toDos.filter((todo)=>
            todo.id !== action.payLoad
           )
        }

    default:
      return state;
  }
};

export default toDoReducer;
