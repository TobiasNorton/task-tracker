import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <div className="list-item-container">
        <p className="list-item">What's up, doc?</p>
        <p className="item-details">2 details to show</p>
      </div>
    )
  }
}

export default ListItem
