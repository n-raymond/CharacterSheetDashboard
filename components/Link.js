/**
 * Created by yann on 24/01/17.
 */
import React from 'react';

class Link extends React.Component {
  render() {
    return (
      <a href={this.props.to}>{this.props.children}</a>
    );
  }
}

export default Link;