import React, { Component } from 'react'
import List from './List'

class AllLists extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: []
    }
  }

  render() {
    return (
      <div className="all-lists">
        <List />
        <List />
        <List />
        <List />
        <List />
      </div>
    )
  }
}

export default AllLists
