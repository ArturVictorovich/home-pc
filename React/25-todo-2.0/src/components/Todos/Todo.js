import {TfiHandPointRight} from "react-icons/tfi"
import {TiThumbsOk} from "react-icons/ti"
import {TiTrash} from "react-icons/ti"

import styles from "./Todo.module.css"

function Todo({text, deleteTodo, toggleTodo}) {
  return (
    <div
      className={`${styles.todo} ${
        text.isCompleted ? styles.completedTodo : ""
      }`}>
      <TfiHandPointRight className={styles.todoIcon} />

      <div className={styles.todoText}>{text.text}</div>
      <TiTrash
        onClick={() => deleteTodo(text.id)}
        name="remove"
        className={styles.deleteIcon}
      />

      <TiThumbsOk
        onClick={() => toggleTodo(text.id)}
        name="ok"
        className={styles.checkIcon}
      />
    </div>
  )
}

export default Todo
