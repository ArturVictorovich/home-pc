import {useState} from "react";
import generateRandomNum from "../utils/generateRandomNum";
// Сам компонент
function RandomNumber() {
  //Сосстоянике компонента
  const [randomNum, setRandomNum] = useState(generateRandomNum());
  //метод UseState который вызвается после клика
  const changeRandomNum = () => {
    setRandomNum(generateRandomNum());
  };
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate new random number</button>
    </div>
  );
}
export default RandomNumber;
