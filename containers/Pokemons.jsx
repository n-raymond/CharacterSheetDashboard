/**
 * Created by yann on 24/01/17.
 */
import React from 'react';
import Pokemon from '../components/PokemonThumbnail';

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pokemons: [{name:'Raichu',thumbnail:'http://vignette2.wikia.nocookie.net/pokemon/images/6/62/026Raichu_AG_anime.png/revision/latest?cb=20140126095131'}]};
  }

  render(){
    return (
      <div>
        {this.state.pokemons.map(p => <Pokemon name={p.name} thumbnail={p.thumbnail} />)}
      </div>
    );
  }

}

export default Pokemons;