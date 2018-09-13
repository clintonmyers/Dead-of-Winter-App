import React, { Component } from 'react';
import Zombie from './zombie';

class ZombieClusters extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="colony-zombie-container">
            <div className="zombie-cluster">
                <Zombie />
                <Zombie />
                <Zombie />
            </div>
            <div className="zombie-cluster">
                <Zombie />
                <Zombie />
                <Zombie />
            </div>
        </div>
    )
  }
}

export default ZombieClusters;