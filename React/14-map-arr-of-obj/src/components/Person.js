function Person({id, first_name, last_name, email, img}) {
  return (
    <div className="card">
      <h1>карточка №{id}</h1>
      <h2>
        {first_name}
        {last_name}
      </h2>
      <h3>{email}</h3>
      <img alt="img" src={img} />
    </div>
  );
}
export default Person;
