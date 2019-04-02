import React, { Component } from 'react'
import ListItem from './ListItem'

class List extends Component {
  render() {
    return (
      <div className="list">
        <p className="category">Job Search</p>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    )
  }
}

export default List
