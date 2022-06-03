import allPokemon from './pokemon';

export const getPokemonByName = (pokemonName) => {
  for (let index = 0; index < allPokemon.length; index++) {
    if (pokemonName.toLowerCase() === allPokemon[index].name.toLowerCase()) {
      return {
        id: index,
        nickname:"",
        ...allPokemon[index],
      };
    }
  }
};
