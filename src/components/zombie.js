import React, { Component } from 'react';

class Zombie extends Component {
  constructor(props) {
    super(props);
    this.state = { slot : 'zombie' };

    this.toggle = this.toggle.bind(this);
  }

  toggle(value) {
    if (value === '') { value = 'zombie'; }
    else if ( value === 'zombie' ) { value = 'barricade'; }
    else if ( value === 'barricade' ) { value = ''}
    this.setState({ slot : value });
  }

  render() {
    return (
      <div
        className={'zombie-slot ' + this.state.slot}
        onClick={this.toggle.bind(this, this.state.slot)}
      />
    )
  }
}

export default Zombie;