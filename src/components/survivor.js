import React, { Component } from 'react';

class Survivor extends Component {
  constructor(props) {
    super(props);
    this.state = { survivor : '' };
  }

  render() {
    return (
      <div className={"survivor-slot character-" + this.props.survivor}/>
    )
  }
}

export default Survivor;