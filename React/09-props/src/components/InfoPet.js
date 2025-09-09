function InfoPet(props) {
  const {animal, age} = props;
  return (
    <h1>
      My {animal} is {age} year old
    </h1>
  );
}

export default InfoPet;
