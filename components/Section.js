/**
 * Created by yann on 24/01/17.
 */
import React from 'react';
import Link from  './Link';

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