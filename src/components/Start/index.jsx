import { useEffect } from "react";
import "./index.css"

export const Start = ({ setIsVisible}) => {
  /* useEffect(() => () => setCount(count + 1)); */
  return (
    <div className="card--start">
      <h1>Torneio Tribruxo</h1>
      <p>Clique no botão para encontrar os feiticeiros</p>
      <button onClick={() => setIsVisible(false)}>Começar</button>
    </div>
  );
};
