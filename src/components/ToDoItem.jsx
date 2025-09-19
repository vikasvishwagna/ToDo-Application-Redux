import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleToDo } from '../Redux/action';

const ToDoItem = ({toDo}) => {
  const dispatch = useDispatch();

  return (
    <ol>
      <span onClick={()=>dispatch(toggleToDo(toDo.id))}>{toDo.text}</span>
    </ol>
  )
}

export default ToDoItem