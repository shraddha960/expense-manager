import React, { Component } from 'react'

export class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        this.setTimRef = setTimeout(() => this.setTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.setTimRef)
    }

    setTime() {
        this.setState((state, props) => {
            console.log(state.date)
            return {
                date: new Date()
            }
        })
    }

  render() {
    return (
      <div>
            <p>The current time is {this.state.date.toString()}</p>
      </div>
    )
  }
}

export default Clock
