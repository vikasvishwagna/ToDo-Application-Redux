import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleToDo, editToDo, deleteToDo } from "../Redux/action";
import { Check, Edit, Trash2 } from "lucide-react";

const ToDoItem = ({ toDo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [val, setVal] = useState(toDo.text);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleToDo(toDo.id));
  };

  const handleEdit = () => {
    setIsEditing(!isEditing);
    if (isEditing && val !== toDo.text) {
      dispatch(editToDo(toDo.id, val));
    }
  };

  const handleDelete = () => {
    dispatch(deleteToDo(toDo.id));
  };

  return (
    <li className="flex items-center justify-between bg-gray-50 border border-gray-200 rounded-xl px-4 py-2 shadow-sm">
      <div className="flex items-center gap-3">
        {/* Circle button */}
        <button
          onClick={handleToggle}
          className={`w-6 h-6 rounded-full flex items-center justify-center border transition ${
            toDo.completed
              ? "bg-green-500 border-green-500 text-white"
              : "border-gray-400"
          }`}
        >
          {toDo.completed && <Check size={16} />}
        </button>

        {/* Task text / edit input */}
        {isEditing ? (
          <input
            type="text"
            value={val}
            onChange={(e) => setVal(e.target.value)}
            className="border px-2 py-1 rounded-md outline-none"
          />
        ) : (
          <span
            className={`text-lg ${
              toDo.completed ? "line-through text-gray-500" : "text-gray-800"
            }`}
          >
            {toDo.text}
          </span>
        )}
      </div>

      {/* Action buttons */}
      <div className="flex items-center gap-2">
        <button
          onClick={handleEdit}
          className="p-2 rounded-lg hover:bg-blue-100 text-blue-600 transition"
        >
          <Edit size={18} />
        </button>
        <button
          onClick={handleDelete}
          className="p-2 rounded-lg hover:bg-red-100 text-red-600 transition"
        >
          <Trash2 size={18} />
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
