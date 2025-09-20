import React from "react";
import AddToDo from "./components/addToDo";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import AddToDoList from "./components/AddToDoList";

function App() {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gray-300 flex flex-col items-center py-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">To-Do List</h1>
        <div className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-lg">
          <AddToDo />
          <AddToDoList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
