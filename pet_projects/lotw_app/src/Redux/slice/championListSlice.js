import { createSlice } from '@reduxjs/toolkit';
import championsData from '../../data/championsData';
const initialState = {
  championList: [],
  guessChampion: null,
  championsData,
  endGame: false,
};

const championListSlice = createSlice({
  name: 'champion',
  initialState,
  reducers: {
    selectChampion: (state, action) => {
      return {
        ...state,
        championList: [...state.championList, action.payload],
        championsData: state.championsData.filter(
          (champ) => champ.name !== action.payload.name
        ),
      };
    },
    startGame: (state, action) => {
      return {
        ...state,
        guessChampion: action.payload,
        championList: [],
        championsData,
      };
    },
    setWin: (state, action) => {
      if (state.guessChampion.name === action.payload.name) {
        return { ...state, endGame: !state.endGame };
      }
    },
    reStartGame: (state) => {
      return {
        ...state,
        championList: [],
        guessChampion: null,
        championsData,
        endGame: false,
      };
    },
  },
});
export const { selectChampion, startGame, setWin, reStartGame } =
  championListSlice.actions;
export default championListSlice.reducer;
