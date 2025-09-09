import FormList from './components/FormList/FormList';
import ChampionList from './components/ChampionList/ChampionList';
import letStartGame from './functions/letStartGame';

import { useDispatch, useSelector } from 'react-redux';
import { startGame, reStartGame } from './Redux/slice/championListSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const guessChampion = useSelector((state) => state.champion.guessChampion);
  console.log(guessChampion);
  const win = useSelector((state) => state.champion.endGame);
  return (
    <div className={win ? 'App dark-green' : 'App'}>
      <header>
        {win ? <h1>Ты победил!</h1> : <h1>League of Twist Fist</h1>}

        {!guessChampion && (
          <button
            onClick={() => dispatch(startGame(letStartGame()))}
            title="Начни игру"
            type="button"
            className="button"
          >
            Начать игру
          </button>
        )}
      </header>
      <main>
        {win ? (
          <button
            onClick={() => dispatch(reStartGame())}
            title="Начать игру заного"
            type="button"
          >
            Пробовть Снова ?
          </button>
        ) : (
          <FormList />
        )}
        <ChampionList />
      </main>
    </div>
  );
}

export default App;
