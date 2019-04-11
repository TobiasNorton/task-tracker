import React, { Component } from 'react'
import List from './List'

class AllLists extends Component {
  constructor(props) {
    super(props)

    this.state = {
      lists: [
        {
          listName: 'Job Search',
          listItems: [
            {
              task: "I'm going to do something.",
              details: ["Yea that's cool", "Okay man let's have fun", 'I love to code']
            },
            {
              task: 'Need to do another thing.',
              details: ['Hi, Mom!', 'Detail about this thing', 'I love to code']
            },
            {
              task: 'Third thing I have to do.',
              details: ["Yea that's cool", "Okay man let's have fun", 'I love to code']
            }
          ]
        },
        {
          listName: 'House Stuff',
          listItems: [
            {
              task: 'Clean up the yard',
              details: ['Put yard tools away', 'Mow the lawn', 'Weed the garden']
            },
            {
              task: 'Clean up inside',
              details: ['Throw away old food items', 'Wipe out fridge', 'Dishes']
            }
          ]
        },
        {
          listName: 'Car Stuff',
          listItems: [
            {
              task: 'Clean car',
              details: ['Car wash', 'Vacuum interior', 'Wipe down vinyl', 'Wax']
            },
            {
              task: 'Maintenance',
              details: ['New power steering pump', 'Tires']
            }
          ]
        }
      ]
    }
  }

  getLists = () => {
    return this.state.lists.map((list, index) => {
      return <List key={index} listName={list.listName} listItems={list.listItems} />
    })
  }

  render() {
    return (
      <>
        <nav className="nav-bar">
          <p>My Lists</p>
          <p>New List</p>
        </nav>
        <div className="all-lists">
          {this.getLists()}

          <div className="new-list">Creat New List</div>
        </div>
      </>
    )
  }
}

export default AllLists
