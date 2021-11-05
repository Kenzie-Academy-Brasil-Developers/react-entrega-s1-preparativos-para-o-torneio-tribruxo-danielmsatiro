import { useEffect, useState } from "react";
import { Gamer } from "./Gamer/Index";

export const Game = () => {
  const [count, setCount] = useState(0);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/students`)
      .then((res) => res.json())
      .then((res) => setStudents(res));
  }, [count]);

  console.log(students); /* [] -> [objetos] */

  /* Monta um array de houses únicas: */
  const buildArrayHouses = (students) =>
    students
      .filter(
        (item, idx, arr) => arr.findIndex((e) => e.house === item.house) === idx
      )
      .map((item) => item.house);

  console.log(buildArrayHouses(students)); /* [] -> [houses] */

  /* Sorteia uma house entre um array de houses */
  const randomHouse = (arrayHouses) =>
    arrayHouses[Math.floor(Math.random() * arrayHouses.length)];

  /* Retira uma house já sorteada de um array */
  const removeHouse = (house, arrayHouses) =>
    arrayHouses.filter((item) => item !== house);

  /* Sorteia um estudante tendo uma house definida  */
  const randomStudent = (house, students) => {
    const filter = students.filter((item) => item.house === house);
    return filter[Math.floor(Math.random() * filter.length)];
  };

  return (
    <>
      <h1>Game</h1>
      {/* Fazer o map para cada gamer */}
      {/* <Gamer house={randomHouse()} /> */}
      <button onClick={() => setCount(count + 1)}>Tentar Novamente</button>
    </>
  );
};
