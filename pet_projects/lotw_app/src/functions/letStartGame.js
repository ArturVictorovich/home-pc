import championsData from '../data/championsData';

const letStartGame = () => {
  const randomIndex = Math.floor(Math.random() * championsData.length);
  const randomChampion = championsData[randomIndex];
  //randomChamp - является обьектом
  return randomChampion;
};
export default letStartGame;
