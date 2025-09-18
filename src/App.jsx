import React from "react"
import AddToDo from "./components/addToDo"
import { Provider } from "react-redux"
import store from "./Redux/Store"
import AddToDoList from "./components/AddToDoList"



function App() {

  return (
    <Provider store={store}>
      <div>
        <AddToDo />
        <AddToDoList />
      </div>
    </Provider>
  )
}

export default App
