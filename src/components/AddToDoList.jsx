import React from 'react'
import { useSelector } from 'react-redux'

const AddToDoList = () => {
  const toDos = useSelector((state)=>state.toDo)
  console.log(toDos)
  return (
    <div>
      {toDos.map((toDo)=>
        <li>{toDo.text}</li>
      )}
    </div>
  )
}

export default AddToDoList