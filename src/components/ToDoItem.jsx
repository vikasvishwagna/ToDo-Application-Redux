import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleToDo, editToDo, deleteToDo } from "../Redux/action";

const ToDoItem = ({ toDo }) => {
  const [isEdditing, setIsEdditing] = useState(false);
  const [val, setVal] = useState(toDo.text);
  
  const dispatch = useDispatch();

  // console.log(newText);

  const handleClick = () => {
    dispatch(toggleToDo(toDo.id));
  };

  const handleEditBtn = () => {
    setIsEdditing(!isEdditing);
    if (isEdditing && val !== toDo.text) {
      dispatch(editToDo(toDo.id, val));
    }
  };

  const handleDeleteBtn = () => {
    dispatch(deleteToDo(toDo.id));
  };

  return (
    <li
      style={{
        textDecoration: toDo.completed ? "line-through" : "none",
        fontSize: "22px",
        cursor: "pointer",
      }}
    >
      {isEdditing ? (
        <input
          type="text"
          value={val}
          onChange={(e) => setVal(e.target.value)}
        />
      ) : (
        <span onClick={handleClick}>{toDo.text}</span>
      )}

      <button onClick={handleEditBtn}>{isEdditing ? "save" : "Edit"}</button>

      <button onClick={handleDeleteBtn}>Del</button>
    </li>
  );
};

export default ToDoItem;
