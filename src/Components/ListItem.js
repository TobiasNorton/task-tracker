import React, { Component } from 'react'

class ListItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      detailsDropDown: false
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

  render() {
    return (
      <div className="list-item-container">
        <p className="list-item">{this.props.task}</p>
        {this.getDetails()}
      </div>
    )
  }
}

export default ListItem
