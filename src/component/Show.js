import { useParams } from 'react-router-dom';

const Show = (props) => {
  let params = useParams();
  let foundPokemon = props.myPokemon.find((val, ind, obj) => {
    return val.id === Number(params.id);
  });

//   console.log(foundPokemon);
 

  return (
    <div>
      Just one Pokemon
      <div>{foundPokemon.name}</div>
      <img src={foundPokemon.image} alt={foundPokemon.name} />
    </div>
  );
};

export default Show;
