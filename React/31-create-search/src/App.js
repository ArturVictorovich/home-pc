import InputList from './components/InputList';
import ListSearchResult from './components/ListSearchResult';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Поиск персонажа по имени</h1>
      <InputList />
      {'' && <ListSearchResult />}
    </div>
  );
}

export default App;
