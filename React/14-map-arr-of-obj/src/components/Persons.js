import persons from "../data/persons";
import Person from "./Person";

function Persons() {
  return (
    <div className="cards">
      {persons.map((pers) => {
        return <Person key={pers.id} {...pers} />;
      })}
    </div>
  );
}
export default Persons;
