import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToDo } from "../Redux/action";

const AddToDo = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // console.log(text)

  const handelClick = () => {
    if (text) {
      dispatch(addToDo(text));
      setText("");
    }
  };

  return (
    <div className="flex justify-end items-center gap-3 mb-6">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter Text"
        className="w-2/3 border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 outline-none"
      />
      <button 
      className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg shadow transition"
      onClick={handelClick}>
        
        Add</button>
    </div>
  );
};

export default AddToDo;
