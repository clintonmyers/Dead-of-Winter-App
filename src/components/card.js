import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);

    this.state = { selected : false }
  }

  render() {
    return (
      <div className={'player-view-card ' + this.props.type + '-' + this.props.value }>
      </div>
    )
  }
}

export default Card;