import {TfiHandPointRight} from "react-icons/tfi"
import styles from "./Todo.module.css"

function Todo({text, index, deleteTodo}) {
  return (
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <TfiHandPointRight className={styles.todoIcon} />
      <div className={styles.todoText}>{text}</div>
    </div>
  )
}

export default Todo
