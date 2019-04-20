import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      task: this.props.task || this.state.userInput,
      details: this.props.details,
      userInput: '',
      detailsDropDown: false,
      isEditing: false
    }
  }

  getDetails = () => {
    if (this.state.detailsDropDown === false) {
      return (
        <p className="item-detail collapsed" onClick={this.dropDown}>
          {this.props.details.length} Details to Show
        </p>
      )
    } else {
      return (
        <div>
          <div>
            {this.props.details.map((detail, index) => {
              return (
                <div key={index}>
                  <p className="item-detail">{detail}</p>
                </div>
              )
            })}
          </div>
          <div onClick={this.dropDown} className="show-less">
            Show Less
          </div>
        </div>
      )
    }
  }

  dropDown = () => {
    this.setState({
      detailsDropDown: !this.state.detailsDropDown
    })
  }

  listItem = () => {
    if (this.state.isEditing === false) {
      return (
        <div className="list-item">
          {this.props.task}
          <p onClick={this.editListItem}>Edit</p>
        </div>
      )
    } else {
      return (
        <form onSubmit={this.submit}>
          <input type="text" defaultValue={this.props.task} onChange={this.getUserInput} />
        </form>
      )
    }
  }

  submit = event => {
    console.log('submitted')
    this.setState({
      task: this.state.userInput
    })
  }

  getUserInput = event => {
    this.setState(
      {
        userInput: event.target.value
      },
      () => console.log(this.state.task)
    )
  }

  editListItem = () => {
    this.setState({
      isEditing: true
    })
  }

  render() {
    return (
      <div className="list-item-container">
        {this.listItem()}
        {this.getDetails()}
      </div>
    )
  }
}

export default ListItem
