import React, { Component } from 'react'

export class welcome extends Component {

    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: "Hello",
            pageSize: 10
        }
        this.changeHandler = this.changeHandler.bind(this)
    }

    changeHandler() {
        this.setState(prevState => ({
            welcomeMessage: prevState.welcomeMessage === "Hello" ? "welcome" : "Hello"
        }))
    }

  render() {
    return (
      <div>
        this is welcome component of {this.props.name}
        <div><h3>{this.state.welcomeMessage}</h3></div>
        <div><h3>{this.state.pageSize}</h3></div>
        <div><button onClick={this.changeHandler}>Change welcome message</button></div>
      </div>
    )
  }
}

export default welcome
