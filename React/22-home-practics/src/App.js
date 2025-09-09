import "./App.css"
import Cards from "./components/Cards"
import Button from "./components/Button.js"
import {useState} from "react"

function App() {
  const [click, setClick] = useState(0)
  const clickBtn = () => setClick(click + 1)
  return (
    <div className="App">
      <Button onClick={clickBtn} />
      <Cards click={click} />
    </div>
  )
}

export default App
