import {useState} from "react";

const Login = () => {
  const [date, setDate] = useState({username: "", pasword: ""});

  function handleFormSubmit(e) {
    e.preventDefault();
    alert(JSON.stringify(date));
  }
  const makeChangeInput = (text, name) => {
    //name  берем в квадратные скобки для динамического изменения
    // ...date, + новое свойсво - это один из способов добавления нового свойсва внутрь массива путем его деструктуризиции с помощью оператора "..."
    setDate({...date, [name]: text});
  };
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={date.username}
            onChange={(e) => {
              makeChangeInput(e.target.value, "username");
            }}
          />
        </label>
        <label>
          pasword:
          <input
            type="pasword"
            value={date.pasword}
            onChange={(e) => {
              makeChangeInput(e.target.value, "pasword");
            }}
          />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
