import {useState} from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
function App() {
  console.log("app rendered");
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <Button count={count} onClick={changeCount} />
      <Button count={count} onClick={changeCount} />
      <Button count={count} onClick={changeCount} />
      <Button count={count} onClick={changeCount} />
    </div>
  );
}

export default App;
