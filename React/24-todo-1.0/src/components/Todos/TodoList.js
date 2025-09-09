import Todo from "./Todo"

function TodoList({todos, deleteTodo}) {
  return (
    <div>
      {!todos.length && <h2>Todo is empty</h2>}

      {todos.map((text, i) => (
        <Todo index={i} deleteTodo={deleteTodo} key={i} text={text} />
      ))}
    </div>
  )
}

export default TodoList
