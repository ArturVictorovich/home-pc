"use strict";

const App = ({initionBtnText}, {greenText}) => {
  const [btnText, setButtonText] = React.useState(initionBtnText);
  const [classesList, setClassesList] = React.useState(greenText);

  const onBtnClick = () => {
    setButtonText("hello from react");
    setClassesList("green-btn");
  };

  return (
    <div className="app">
      <button className={classesList} onClick={onBtnClick}>
        {btnText}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<App initionBtnText="Click Me" greenText="" />);
