const Pokedex = (props) => {
  return (
    <div className="pokedex">
      {props.myPokemon.map(({ id, name, image }) => {
        return (
          <div key={id} className="pokemon">
            <h3>{name}</h3>
            <img src={image} alt={name} />
          </div>
        );
      })}
    </div>
  );
};

export default Pokedex;
