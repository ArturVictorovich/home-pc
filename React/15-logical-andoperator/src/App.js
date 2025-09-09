import {useState} from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";
import ResetButton from "./components/ResetButton";

function App() {
  console.log("app rendered");
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };
  const resetCount = () => {
    return setCount(0);
  };
  const btnStyle = {backgroundColor: "lightblue"};
  return (
    <div className="App">
      <Counter count={count} />
      <Button count={count} onClick={changeCount} />
      <Button count={count} onClick={changeCount} />
      <Button count={count} onClick={changeCount} />
      <Button count={count} onClick={changeCount} />
      {!!count && <ResetButton onClick={resetCount} style={btnStyle} />}
    </div>
  );
}

export default App;
