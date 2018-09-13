import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { mainObjective : 1 }
  }

  render() {
    return (
      <div className={'main-objective main-objective' + this.state.mainObjective }>
      </div>
    )
  }
}

export default Card;