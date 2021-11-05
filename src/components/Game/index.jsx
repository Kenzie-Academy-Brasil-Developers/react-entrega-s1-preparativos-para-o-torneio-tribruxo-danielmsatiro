import { useEffect, useState } from "react";
import { Gamer } from "./Gamer/Index";

export const Game = () => {
  const [count, setCount] = useState(0);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students`)
      .then((res) => res.json())
      .then((res) => setStudents(res));
  }, []);

  /* Build an array of unique houses: */
  const buildArrayHouses = (students) =>
    students
      .filter(
        (item, idx, arr) => arr.findIndex((e) => e.house === item.house) === idx
      )
      .map((item) => item.house);

  /* Draw a house among an array of houses */
  const randomHouse = (arrayHouses) =>
    arrayHouses[Math.floor(Math.random() * arrayHouses.length)];

  /* Remove an already drawn house from an array */
  const removeHouse = (house, arrayHouses) =>
    arrayHouses.filter((item) => item !== house);

  /* Draw a student with a defined house */
  const randomStudent = (house, students) => {
    const filter = students.filter((item) => item.house === house);
    return filter[Math.floor(Math.random() * filter.length)];
  };

  /* Integrates functions and draws 3 students from different houses */
  const game = (students) => {
    let arrayHouses = buildArrayHouses(students);
    let selectedStudents = [];
    for (let i = 1; i <= 3; i++) {
      let house = randomHouse(arrayHouses);
      arrayHouses = removeHouse(house, arrayHouses);
      let student = randomStudent(house, students);
      selectedStudents = [...selectedStudents, student];
    }
    return selectedStudents;
  };

  return (
    <>
      <div className="card">
        {game(students).map((item, idx) => (
          <Gamer key={idx} gamer={item} />
        ))}
      </div>
      <button onClick={() => setCount(count + 1)}>Tentar Novamente</button>
    </>
  );
};
