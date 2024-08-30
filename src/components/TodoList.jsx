import {useState} from 'react';
import AddTodo from './AddTodo';
import List from './List'
import FilterTodo from './FilterTodo';
const TodoList = () => {
    const [todos, setTodos] = useState([
        { id: 101, text: "Go for walk", completed: false },
        { id: 102, text: "Have a coffe", completed: true },
        { id: 103, text: "Do workout", completed: false }
    ])

    const[currentFilter,setCurrentFilter] = useState("all")

    const handleAdd = text => {
        setTodos([...todos,{text, completed:false,id:Date.now()} ])
    }

    const handleUpdate = id =>{
        setTodos(todos.map(todo=>
            todo.id != id ? todo :{...todo,completed: !todo.completed}
        ))
    }

    const handleDelete = (id)=>{
        const filtered = todos.filter(todo=> todo.id != id);
        setTodos(filtered);
    }

  return (
    <> 
      <h2 className="text-white">Todo App</h2>
      <AddTodo 
        onAdd={handleAdd}
      />
      <FilterTodo 
        currentFilter = {currentFilter}
        onSet = {setCurrentFilter}
      />
      <List 
        todos={todos}
        onUpdate={handleUpdate}
        onDel={handleDelete}
        currentFilter = {currentFilter}
      />
    </>
  )
}

export default TodoList