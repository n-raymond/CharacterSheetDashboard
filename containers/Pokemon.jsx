/**
 * Created by yann on 24/01/17.
 */
import React from 'react';
import Characteristics from '../components/pokemon/Characteristics';
import Stats from '../components/pokemon/Stats';

class Pokemon extends React.Component {


  render() {
    return (
      <div>
        <form action="#">
          <Characteristics characs={this.props.characteristics}/>
          <Stats stats={this.props.stats}/>
          <input type="submit"/>
        </form>
      </div>
    );
  }

}

// TODO retrieve from json instead
Pokemon.defaultProps = {
  characteristics: {
    pokemon: 'Pickachu',
    name: 'Pickabite',
    type: '6',
    nature: 'Sadomaso'
  },
  stats: {
    pvBase: 28,
    pvAdd: 2,
    attackBase: 25,
    attackAdd: 0,
    defenseBase: 25,
    defenseAdd: 1,
    attackSpecialBase: 45,
    attackSpecialAdd: 2,
    defenseSpecialBase: 35,
    defenseSpecialAdd: 1,
    vitesseBase: 40,
    vitesseAdd: 2
  }
}

export default Pokemon;