/**
 * Created by yann on 24/01/17.
 */
import React from 'react';
import { Router, Route, Link } from 'react-router';
import PokemonThumbnail from '../components/PokemonThumbnail';

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [{name:'Raichu',thumbnail:'http://vignette2.wikia.nocookie.net/pokemon/images/6/62/026Raichu_AG_anime.png/revision/latest?cb=20140126095131'}]};
  }

  render(){
    return (
      <div>
        {this.state.pokemons.map(p => <PokemonThumbnail name={p.name} thumbnail={p.thumbnail} />)}
        <Link to="Pokemon">
          Add pokemon
        </Link>
      </div>

    );
  }

}

export default Pokemons;