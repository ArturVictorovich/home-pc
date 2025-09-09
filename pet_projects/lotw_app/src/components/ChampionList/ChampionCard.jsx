import './ChampionCard.css';
import getCardCompare from '../../functions/getCardCompare';
import { useSelector } from 'react-redux';

const ChampionCard = (prop) => {
  const { champion } = prop;
  const guessChamp = useSelector((state) => state.champion.guessChampion);
  return (
    <div className="championCard">
      <div title="Имя чемпиона" className="card card-name">
        <span className="card-text text-name">{champion.name}</span>
      </div>
      <div
        title="Пол"
        className={`card ${getCardCompare(
          guessChamp.gender,
          champion.gender,
          champion.name,
          guessChamp.name
        )}`}
      >
        <span className="card-text">{champion.gender}</span>
      </div>
      <div
        title="Регион"
        className={`card ${getCardCompare(
          guessChamp.from,
          champion.from,
          champion.name,
          guessChamp.name
        )}`}
      >
        <span className="card-text">{champion.from}</span>
      </div>
      <div
        title="Тип атаки"
        className={`card ${getCardCompare(
          guessChamp.kindAtack,
          champion.kindAtack,
          champion.name,
          guessChamp.name
        )}`}
      >
        <span className="card-text">{champion.kindAtack}</span>
      </div>
      <div
        title="Ресурс"
        className={`card ${getCardCompare(
          guessChamp.resource,
          champion.resource,
          champion.name,
          guessChamp.name
        )}`}
      >
        <span className="card-text">{champion.resource}</span>
      </div>
      <div
        title="Год выхода"
        className={`card ${getCardCompare(
          guessChamp.release,
          champion.release,
          champion.name,
          guessChamp.name
        )}`}
      >
        <span className="card-text">{champion.release}</span>
      </div>
    </div>
  );
};

export default ChampionCard;
