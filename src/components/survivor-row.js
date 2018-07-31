import React, { Component } from 'react';
import Survivor from './survivor';

class SurvivorRow extends Component {
  constructor(props) {
    super(props);
    this.state = { Survivor : [] };

    this.slotState = this.slotState.bind(this);
  }

  slotState(slots) {
    let arr = [];
    for (let i = 0; i < slots; i++) {
      arr.push(1);
    }
    this.setState({ Survivor : arr });
  }

  componentDidMount() { this.slotState(this.props.slots); }

  render() {
    return (
      <div className='survivor-row'>
        {this.state.Survivor.map((slot, index) => (
          <Survivor num={this.props.num} index={index} key={'loc' + this.props.num + 'sur' + index}/>
        ))}
      </div>
    )
  }
}

export default SurvivorRow;