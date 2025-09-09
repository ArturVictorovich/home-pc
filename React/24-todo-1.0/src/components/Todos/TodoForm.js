import {useState} from "react"
import styles from "./TodoForm.module.css"
console.log(styles)

function TodoForm({addTodo}) {
  const [text, setText] = useState("")
  const onSubmitHandler = (event) => {
    event.preventDefault()
    addTodo(text)
    setText("")
  }
  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="Enter new todo"
        />
        <button type="submit">submit</button>
      </form>
    </div>
  )
}

export default TodoForm
