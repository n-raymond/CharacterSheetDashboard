import React from 'react';
import Section from './Section';

class SectionNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sections: ['Character', 'Pokemon', 'Posts', 'Links', 'Tresors']
    }
  }
    render() {
        return (
          <div>
            <h2>Sections</h2>
            {this.state.sections.map(Name => <Section name={Name} />)}
          </div>
        );
    }
}

export default SectionNavbar;
