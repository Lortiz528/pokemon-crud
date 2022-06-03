import React from 'react';
import { getPokemonByName } from './utils/helper';
import New from './component/New';
import { Routes, Route, Link } from 'react-router-dom';
import Pokedex from './component/Pokedex';
import Show from './component/Show';

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
      alert('Please enter a valid Pokemon');
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
          <Route
            path="/pokemon/:id"
            element={<Show myPokemon={this.state.myPokemon} />}
          />
        </Routes>
      </div>
    );
  }
}

export default App;
