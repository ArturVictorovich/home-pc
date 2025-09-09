import {RxReload, RxEraser} from "react-icons/rx"
import Button from "../UI/Button"
import styles from "./TodosActions.module.css"

function TodosActions({resetTodoHandle, deleteComplitedTodohand, countTodo}) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button onClick={resetTodoHandle} title="Reset Todos">
        <RxReload />
      </Button>

      <Button
        //disabled  самостоятельно добавляет прозрачность свойсво
        disabled={!countTodo}
        onClick={deleteComplitedTodohand}
        title="Clear Completed Todos">
        <RxEraser />
      </Button>
    </div>
  )
}

export default TodosActions
