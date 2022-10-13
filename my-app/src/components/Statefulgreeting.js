import React, { Component } from 'react'

export class Statefulgreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         introduction: "Hello!",
         buttonText: "Exit",
      }
    }

    handleClick() {
        this.setState({
            introduction: "Goodbye!",
            buttonText: "enter"
        });
    }

  render() {
    return (
      <div>
        <h1>{this.state.introduction} {this.props.name}</h1>
        <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
      </div>
    )
  }
}

export default Statefulgreeting