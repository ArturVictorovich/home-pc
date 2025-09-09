import "./App.css";
import InfoPet from "./components/InfoPet";

function App() {
  return (
    <div className="App">
      <InfoPet animal="cat" age="11" hasPet />
      <InfoPet animal="cow" age="2" hasPet={false} />
    </div>
  );
}

export default App;
