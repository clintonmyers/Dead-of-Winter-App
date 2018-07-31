import React, { Component } from 'react';

class Row extends Component {
  constructor(props) {
    super(props);
    let obj = {};
    obj[this.props.type] = [];
    this.state = obj;

    this.slotState = this.slotState.bind(this);
    this.loggit = this.loggit.bind(this);
  }

  slotState(slots, type, num) {
    let arr = [];
    let obj = {};
    for (let i = 0; i < slots; i++) {
      arr.push(1);
    }
    obj[this.props.type] = arr;
    this.setState(obj);
    console.log(obj);
  }

  loggit(value, index) {
    let arr = this.state[this.props.type];
    let obj = {};
    if (this.props.type === 'Zombie') {
      if (value < 2) {
        value += 1;
      } else {
        value = 0;
      }
      arr.splice(index, 1, value);
      obj['Zombie'] = arr;
      this.setState(obj);
    } else if (this.props.type === 'Survivor') {
      console.log('survivor');
    } else {
      console.log('loggit error');
    }
  }

  componentDidMount() { this.slotState(this.props.slots, this.props.type, this.props.num); }

  render() {
    return (
      <div className={this.props.type + 'Row'}>
        { this.state[this.props.type].map((slot, index) => (
          <div
            className={this.props.type + ' c' + this.state[this.props.type][index]}
            key={'loc' + this.props.num + this.short + index}
            onClick={this.loggit.bind(this, this.state[this.props.type][index], index)} >
          </div>
        ))}
      </div>
    )
  }
}

export default Row;