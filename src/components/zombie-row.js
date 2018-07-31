import React, { Component } from 'react';
import Zombie from './zombie';

class ZombieRow extends Component {
  constructor(props) {
    super(props);
    this.state = { Zombie : [] };

    this.slotState = this.slotState.bind(this);
  }

  slotState(slots) {
    let arr = [];
    for (let i = 0; i < slots; i++) {
      arr.push(1);
    }
    this.setState({ Zombie : arr });
  }

  componentDidMount() { this.slotState(this.props.slots); }

  render() {
    return (
      <div className='zombie-row'>
        {this.state.Zombie.map((slot, index) => (
          <Zombie num={this.props.num} index={index} key={'loc' + this.props.num + 'zom' + index}/>
        ))}
      </div>
    )
  }
}

export default ZombieRow;