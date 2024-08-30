import React from 'react'

const TodoItem = ({todo,onUpdate,onDel}) => {
  return (
    <div className={"todo " + (todo.completed ? "done" : "")}>
       <p>{todo.text}</p>
       <button onClick={() => onUpdate(todo.id)}>{todo.completed ? "CANCEL" : "COMPLETED"}</button>
       <button onClick={()=> onDel(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem