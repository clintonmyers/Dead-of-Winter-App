import React, { Component } from 'react';

class ItemDeck extends Component {
  constructor(props) {
    super(props);
    this.state = { items : 20 };
  }

  render() {
    return (
      <div className='item-deck'>
        <p>Items:</p>
        <p>{this.state.items}</p>
      </div>
    )
  }
}

export default ItemDeck;