import { useEffect } from "react";
import { useState } from "react/cjs/react.development";

export const Gamer = ({ house }) => {
/*   const [student, setStudent] = useState({}); */

/*   useEffect(() => {
    fetch(`http://hp-api.herokuapp.com/api/characters/house/${house}`)
      .then((res) => res.json)
      .then((res) => randomStudent(res))
      .then((res) => setStudent(res));
  }, []); */

  return <h1>gamer{house}</h1>;
};
