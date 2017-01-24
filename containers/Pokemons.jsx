/**
 * Created by yann on 24/01/17.
 */

import React from 'react';

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemons: {
        [
          name:"Bulbizaree",
          thumbnail:"bulbizarre_by_rubidi-d6fjhl1"
        ]
      }
    }
  }
  render() {
    return (
      <div>There are no pokemon MF</div>
    );
  }
}

export default Pokemons;