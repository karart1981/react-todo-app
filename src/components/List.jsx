import TodoItem from './TodoItem'

const List = ({todos, onAdd, onUpdate, onDel, currentFilter}) => {
    let filtered = todos
    if (currentFilter == 'active') {
        filtered = todos.filter(a => !a.completed)
    } else if (currentFilter == 'completed') {
        filtered = todos.filter(a => a.completed)
    }
  return (
    <div>
        <p className="mt-4 text-white fs-2">showing: <strong>{currentFilter}</strong></p>
        {
            filtered.map(todo => <TodoItem
                key={todo.id}
                todo={todo}
                onUpdate={onUpdate}
                onDel={onDel}
            />)
        }
    </div>
  )
}

export default List