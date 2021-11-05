import { useEffect } from "react";

export const Start = ({ setIsVisible}) => {
  /* useEffect(() => () => setCount(count + 1)); */
  return (
    <div>
      <h1>Torneio Tribuxo</h1>
      <p>Clique no botão para encontrar os feiticeiros</p>
      <button onClick={() => setIsVisible(false)}>Começar</button>
    </div>
  );
};
