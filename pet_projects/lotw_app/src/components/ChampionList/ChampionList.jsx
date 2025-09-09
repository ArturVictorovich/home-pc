import ChampionCard from './ChampionCard';
import { useSelector } from 'react-redux';
import './ChampionList.css';
const ChampionList = () => {
  const championList = useSelector((state) => state.champion.championList);

  return (
    <div className="championList">
      {championList.map((champion) => {
        return <ChampionCard key={champion.id} champion={champion} />;
      })}
    </div>
  );
};

export default ChampionList;
