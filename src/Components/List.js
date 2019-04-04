import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  getListItems = () => {
    return this.props.listItems.map((listItem, index) => {
      return <ListItem key={index} task={listItem.task} details={listItem.details} />
    })
  }

  render() {
    console.log(this.props)
    return (
      <div className="list">
        <p className="category">{this.props.listName}</p>
        {this.getListItems()}
      </div>
    )
  }
}

export default List
