import React from 'react'
import { useState} from 'react';
import { useDispatch } from "react-redux";
import { addToDo } from '../Redux/action';

const AddToDo = () => {

  const [text, setText] = useState("");
  const dispatch = useDispatch();
  // console.log(text)

const handelClick = ()=>{
  if(text){
    dispatch(addToDo(text));
    setText("");
  }
}


  return (
    <div>
      <input type="text" value={text} onChange={(e)=>setText(e.target.value)} placeholder='Enter Text' />
      <button onClick={handelClick}>Add</button>
    </div>
  )
}

export default AddToDo