import React from 'react';
import { getPokemonByName } from '../utils/helper';

class New extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  updatePoke = (e) => {
    const name = e.target.value;
    this.setState({ pokemonName: name });
  };

  render() {
    return (
      <div>
        <input
          onChange={this.updatePoke}
          value={this.state.pokemonName}
          type="text"
        ></input>
        <button onClick={() => this.props.addPokemon(this.state.pokemonName)}>
          Add Pokemon
        </button>
      </div>
    );
  }
}

export default New;
