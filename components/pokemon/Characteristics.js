/**
 * Created by yann on 24/01/17.
 */
import React from 'react';

class Characteristics extends React.Component {

  render(){
    return (
      <div>
        Pokemon:<br />
        <input name="pokemon"  value={this.props.characs.pokemon} />
        <br />Name:<br />
        <input name="name" value={this.props.characs.name} />
        <br />Pokemon:<br />
        <input name="level" value={this.props.characs.type} />
        <br />Nature:<br />
        <input name="nature" value={this.props.characs.nature} />
      </div>
    );
  }
}

export default Characteristics;
