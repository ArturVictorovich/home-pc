import {useState} from "react";
import "./App.css";
import Counter from "./components/Counter";
import Button from "./components/Button";

const textbtn = ["Click me", "Push me", "Dont touch", "ok", "popo"];

function App() {
  const [count, setCount] = useState(0);
  const changeCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      {textbtn.map((text, i) => {
        return <Button onClick={changeCount} textbtn={text} key={i} />;
      })}
    </div>
  );
}

export default App;
