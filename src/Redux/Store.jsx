import { createStore } from "redux";
import toDoReducer from "./Reducer"


const store = createStore(toDoReducer);

export default store