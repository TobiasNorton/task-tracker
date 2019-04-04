import React, { Component } from 'react'

class ListItem extends Component {
  getDetails = () => {
    return this.props.details.map((detail, index) => {
      return (
        <p key={index} className="item-detail">
          {detail}
        </p>
      )
    })
  }

  render() {
    return (
      <div className="list-item-container">
        <p className="list-item">{this.props.task}</p>
        {/* <p className="item-details">{this.}</p> */}
        {this.getDetails()}
      </div>
    )
  }
}

export default ListItem
