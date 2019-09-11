import React, { Component } from 'react'

export default class AddTodo extends Component {
  state = {
    content: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.content);
    this.setState({
      content: ''
    })
  }
  handleChange = (e) => {
    this.setState({
      content: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Add new task:</label>
          <input type="text" onChange={this.handleChange} value={this.state.content} />
        </form>
      </div>
    )
  }
}
