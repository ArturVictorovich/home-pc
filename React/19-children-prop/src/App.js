import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div className="App">
      <Wrapper color="lightblue">
        <h2>I love Wrapper from App</h2>
        <button>Click me!</button>
      </Wrapper>
      <Wrapper color="lightgreen">
        <h2>Another text</h2>
        <p>Some text</p>
        <input type="text" placeholder="kek" />
      </Wrapper>
    </div>
  );
}

export default App;
