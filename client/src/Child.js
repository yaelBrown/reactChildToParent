import React, { Component } from 'react'

export default class Child extends Component {
  render() {
    return (
      <div>
        <h1>Child</h1>
        <button onClick={() => this.props.data.changeName("mush")}>Turn parent into mush</button>
      </div>
    )
  }
}
