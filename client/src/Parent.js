import React, { Component } from 'react'
import Child from './Child.js'

export default class Parent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       title: "Parent"
    }
  }
  
  changeName(name) {
    this.setState({title: name})
  }
  
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <Child data={{changeName: this.changeName.bind(this)}}/>
      </div>
    )
  }
}
