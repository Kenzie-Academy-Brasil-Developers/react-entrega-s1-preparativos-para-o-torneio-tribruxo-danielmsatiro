export const Gamer = ({ gamer }) => {
  return (
    <div className="card_gamer">
      <h1>{gamer?.name}</h1>
      <h2>{gamer?.house}</h2>
      <h3>{gamer?.species}</h3>
    </div>
  );
};
