import React from "react";
import { useSelector } from "react-redux";
import ToDoItem from "./ToDoItem";

const AddToDoList = () => {
  const toDos = useSelector((state) => state.toDos);
  console.log(toDos)
  return (
    <ol  className="space-y-3">
      {toDos.map((toDo) => (
        <ToDoItem key={toDo.id} toDo={toDo} />
      ))}
    </ol>

  );
};

export default AddToDoList;
