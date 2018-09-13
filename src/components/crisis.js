import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { crisis : 1 }
  }

  render() {
    return (
      <div className={'crisis crisis' + this.state.crisis }>
      </div>
    )
  }
}

export default Card;