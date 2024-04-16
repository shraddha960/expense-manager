import React, { Component } from 'react'

export class MessageWithEvent extends Component {

    constructor(props) {
        super(props);
        this.logToConsole = this.logToConsole.bind(this); 
      }

    logToConsole(e) {
        console.log(e.target.innerHTML)
    }

  render() {
    return (
      <div onClick={this.logToConsole}>
        <p>Hello {this.props.name}!</p>
      </div>
    )
  }
}

export default MessageWithEvent
