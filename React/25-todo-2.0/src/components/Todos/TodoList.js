import styles from "./TodoList.module.css"
import Todo from "./Todo"

function TodoList({todos, deleteTodo, toggleTodo}) {
  return (
    <div className={styles.todoList}>
      {!todos.length && <h2>Todo list is empty</h2>}

      {todos.map((text) => (
        <Todo
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          key={text.id}
          text={text}
        />
      ))}
    </div>
  )
}

export default TodoList
