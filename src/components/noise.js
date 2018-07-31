import React, { Component } from 'react';

class Noise extends Component {
  constructor(props) {
    super(props);
    this.state = { noise : 0 };
  }

  render() {
    return (
      <div className='noise'>
        <p>Noise:</p>
        <p>{this.state.noise}</p>
      </div>
    )
  }
}

export default Noise;