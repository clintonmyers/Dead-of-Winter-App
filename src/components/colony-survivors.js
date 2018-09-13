import React, { Component } from 'react';
import Survivor from './survivor';

class SurvivorRow extends Component {
  constructor(props) {
    super(props);

    this.state = { Survivor : [10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56] };
  }

  render() {
    return (
      <div className="colony-survivors">
        {
          this.state.Survivor.map(function(survivor, i) {
            return <Survivor key={i} survivor={survivor}/>
          })
        }
        <p className="survivor-count">0/24</p>
      </div>
    )
  }
}

export default SurvivorRow;