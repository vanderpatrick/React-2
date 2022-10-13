import React, { Component } from 'react'

export class StatefulgreetingWithCallback extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         introduction: "Hello!",
         buttonText: "Exit",
         count: 0,
      }
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "GoodBye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "enter" : "Exit",
        })
    }

    counter () {
        this.setState({
            count: this.state.count + 5
        })
    }

  render() {
    return (
      <div>
        <h1>{this.state.introduction} {this.props.name}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
        <button onClick={() => this.counter()}>counter</button>
        <h1>{this.state.count}</h1>
      </div>
    )
  }
}

export default StatefulgreetingWithCallback