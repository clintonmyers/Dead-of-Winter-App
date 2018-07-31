import React, { Component } from 'react';

class Survivor extends Component {
  constructor(props) {
    super(props);
    this.state = { slot : '' };
  }

  render() {
    return (
      <div className='survivor-slot' />
    )
  }
}

export default Survivor;