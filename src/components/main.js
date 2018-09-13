import React, { Component } from 'react';
import ColonySurvivors from './colony-survivors';
import Rounds from './rounds';
import MainObjective from './main-objective';
import Crisis from './crisis';
import ZombieClusters from './zombie-clusters';
import Morale from './morale';

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="main">
        <Rounds />
        <div className="main-left">
            <MainObjective />
            <Crisis />
        </div>
        <div className="main-right">
            <div className="main-right-top">
                <ZombieClusters />
            </div>
            <div className="main-right-middle">
                <ZombieClusters />
                <ColonySurvivors />
            </div>
            <div className="main-right-bottom">
                <div className="colony-text">
                    <p>Food: 0/0</p>
                    <p>Waste: 0/0</p>
                    <p>Crisis: 0/0</p>
                </div>
                <ZombieClusters />
            </div>
            <Morale />
        </div>
      </div>
    )
  }
}

export default Main;