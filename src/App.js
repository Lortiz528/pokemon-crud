import React from 'react';
import { getPokemonByName } from './utils/helper';
import New from './component/New';
import { Routes, Route, Link } from 'react-router-dom';
import Pokedex from './component/Pokedex';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      myPokemon: [
        getPokemonByName('chansey'),
        getPokemonByName('jigglypuff'),
        getPokemonByName('ekans'),
      ],
    };
  }

  addPokemon = (chosenPokemon) => {
    let foundPokemon = getPokemonByName(chosenPokemon);
    let newPokemon = [...this.state.myPokemon, foundPokemon];
    if (foundPokemon === undefined) {
      alert('WRONG pokemon');
    } else {
      this.setState({
        myPokemon: newPokemon,
      });
    }
  };

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <header>My Pokedex</header>
        <div className="navbar">
          <Link to="/">Home</Link>
          <br></br>
          <Link to="/new">New</Link>
        </div>
        <Routes>
          <Route
            path="/"
            element={<Pokedex myPokemon={this.state.myPokemon} />}
          />
          <Route path="/new" element={<New addPokemon={this.addPokemon} />} />
        </Routes>
      </div>
    );
  }
}

export default App;
