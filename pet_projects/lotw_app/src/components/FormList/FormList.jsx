import { useState } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import FormatResult from './FormatResult';
import { selectChampion, setWin } from '../../Redux/slice/championListSlice';

import './FormList.css';

const FormList = () => {
  const [text, setText] = useState('');
  const championData = useSelector((state) => state.champion.championsData);
  const guessChampionName = useSelector(
    (state) => state.champion.guessChampion
  );
  const dispatch = useDispatch();

  //Значение поиска, меняет начальное состояние инпута ""
  const handleOnSearch = (string) => {
    setText(string);
  };

  //Добавление обьекта с персножем в лист по нажатию на карточку в списке
  const handleOnSelect = (item) => {
    //item - обьект с персонажем
    dispatch(selectChampion(item));
    dispatch(setWin(item));
    //Очищает строку поиска
    setText('');
  };
  const style = {
    height: '50px',
    fontSize: '30px',
  };
  return (
    <div className="formList">
      <div className="containerApi">
        {guessChampionName && (
          <ReactSearchAutocomplete
            inputSearchString={text}
            items={championData}
            formatResult={FormatResult}
            placeholder="Введи имя чемпиона"
            type="text"
            styling={style}
            onSelect={handleOnSelect}
            onSearch={handleOnSearch}
          />
        )}
      </div>
    </div>
  );
};

export default FormList;
