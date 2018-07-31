import React, { Component } from 'react';
import ItemDeck from './item-deck';
import Noise from './noise';
import SurvivorRow from './survivor-row';
import ZombieRow from './zombie-row';

class Location extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={'loc ' + this.props.loc}>
        <div className='items-and-noise'>
          <Noise />
          <ItemDeck num={this.props.num}/>
        </div>
        <SurvivorRow num={this.props.num} slots={this.props.sur} />
        <ZombieRow num={this.props.num} slots={this.props.zom} />
      </div>
    )
  }
}

export default Location;