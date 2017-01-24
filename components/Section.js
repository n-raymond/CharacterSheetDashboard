/**
 * Created by yann on 24/01/17.
 */
import React from 'react';
import { Router, Route, Link } from 'react-router'

class Section extends React.Component {
  render() {
    return (
      <div>
        <Link to={this.props.name} >
          {this.props.name}
        </Link>
      </div>
    );
  }
}

export default Section;