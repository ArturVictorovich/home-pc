const getCardCompare = (
  guessChampAtribute,
  currentChampAtribute,
  currentName,
  guessName
) => {
  const guessChampArr = guessChampAtribute.split(' ');
  const currentChampArr = currentChampAtribute.split(' ');

  if (guessChampArr.length === 1 && currentChampArr.length === 1) {
    return guessChampAtribute === currentChampAtribute ? 'green' : 'red';
  }
  if (guessChampArr.length > 1 && currentChampArr.length === 1) {
    return guessChampArr.find((atr) => atr === currentChampAtribute)
      ? 'yellow'
      : 'red';
  }
  if (guessChampArr.length === 1 && currentChampArr.length > 1) {
    return currentChampArr.find((atr) => atr === guessChampAtribute)
      ? 'yellow'
      : 'red';
  }
  //Чемпионы с несколькими свойсвами
  if (guessChampArr.length > 1 && currentChampArr.length > 1) {
    if (currentName === guessName) {
      return 'green';
    } else if (currentName !== guessName) {
      for (let i = 0; i < guessChampArr.length; ) {
        if (
          !currentChampArr.includes(guessChampArr[i]) &&
          i !== guessChampArr.length - 1
        ) {
          i++;
        }
        if (
          !currentChampArr.includes(guessChampArr[i]) &&
          i == guessChampArr.length - 1
        ) {
          return 'red';
        } else if (currentChampArr.includes(guessChampArr[i])) {
          return 'yellow';
        }
      }
    }
  }
};

export default getCardCompare;
