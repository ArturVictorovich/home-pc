const Login = () => {
  function handleFormSubmit(e) {
    e.preventDefault();

    const userDate = {
      username: e.target.uesername.value,
      pasword: e.target.pasword.value,
    };
    alert(JSON.stringify(userDate));
  }

  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          Username:
          <input type="text" name="uesername" />
        </label>
        <label>
          pasword:
          <input type="pasword" name="pasword" />
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
};

export default Login;
