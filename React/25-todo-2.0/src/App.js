import {useState} from "react"
import {v4 as uuidv4} from "uuid"

import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"
import TodosActions from "./components/Todos/TodosActions"
import "./App.css"

function App() {
  // начальный тип хранения информации - массив,
  const [todos, setTodos] = useState([])
  const addTodoHandler = (text) => {
    // далее переделываем его в массив обьектов и лобавляем по мимо текста еще свойво isComlited и сторонний хук для геренации ключей внутри массива id
    const newTodo = {
      text,
      isCompleted: false,
      id: uuidv4(),
    }
    //переводем через двойной !! в логиеское значеня и через оператор && проводим валидацию для того что бы не допускать пустую строку в todoList
    //[...todos, newTodo] - быстрый споособ разобрать масив обьектов, и добавить новый обьект
    !!newTodo.text && setTodos([...todos, newTodo])
  }
  //мы через фукцнию хотим перебрать массив искать одиноковые id, внутри обьекта с текущим id изменить свойсво isCopleted на противоположное от текущего.
  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? //нужный id меняет свое значение свойсвтва isCompleted, все остальные переписываются без изменений
            {...todo, isCompleted: !todo.isCompleted}
          : {...todo}
      })
    )
  }
  const resetTodoHandler = () => {
    setTodos([])
  }
  //функция возврашет все обьекты, кроме того который совпадает с выбранным id
  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id))

  const deleteComplitedTodohandler = () =>
    setTodos(todos.filter((todo) => !todo.isCompleted))
  // фильтруем масив и оставляем только те что со isCompleted = true, после получаем длинну полученого массива
  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {!!todos.length && (
        <TodosActions
          deleteComplitedTodohand={deleteComplitedTodohandler}
          resetTodoHandle={resetTodoHandler}
          //передаем логиеское значение в свойстве через !!
          countTodo={!!completedTodosCount}
        />
      )}
      <TodoList
        toggleTodo={toggleTodoHandler}
        deleteTodo={deleteTodoHandler}
        todos={todos}
      />
      {!!completedTodosCount && <h2>Comleted Todo {completedTodosCount}</h2>}
    </div>
  )
}

export default App
