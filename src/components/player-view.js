import React, { Component } from 'react';
import Card from './card';

class PlayerView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      characters : [10, 12],
      items : ['food1-00', 'medicine-00', 'junk-00', 'fuel-00']
    }
  }

  render() {
    return (
      <div className="player-view">
        <h1>Player {this.props.player} View</h1>
        <Card type="character" value="10" />
        <Card type="character" value="12" />
        <Card type="item" value="food1-00" />
        <Card type="item" value="medicine-00" />
        <Card type="item" value="junk-00" />
        <Card type="item" value="fuel-00" />
      </div>
    )
  }
}

export default PlayerView