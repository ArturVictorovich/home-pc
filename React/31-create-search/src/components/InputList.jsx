import ListSearch from './ListSearch';
import { useState } from 'react';
const InputList = () => {
  const [text, setText] = useState('');
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setText('');
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler} className="form">
        <input
          type="search"
          autoFocus
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter champion"
          className={`inputSearch ${text ? 'border-radius' : ''}`}
        />
        <button type="submit" title="Submit" className="btn-submit">
          Submit
        </button>
        {text && <ListSearch />}
      </form>
    </div>
  );
};

export default InputList;
