import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
  state = {
    todos: [
      { id: 1, content: 'pick up kids' },
      { id: 2, content: 'buy groceries' }
    ]
  }
  deleteTodo = (id) => {
    const newTodoList = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos: newTodoList
    });
  }
  addTodo = (content) => {
    const id = Math.random();
    let newTodo = { id: id, content: content }
    let newTodos = [...this.state.todos, newTodo];
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}></Todos>
        <AddTodo addTodo={this.addTodo}></AddTodo>
      </div>
    )
  }
}

export default App;