/**
 * Created by yann on 24/01/17.
 */
import React from 'react';


class Pokemon extends React.Component {
  render() {
    return (
      <div>
        {this.props.name}
        <img src={this.props.thumbnail} />
      </div>
    )
  };
}

export default Pokemon;