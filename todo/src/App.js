import React, { Component } from 'react';
import './App.css';
import ListOut from './ListOut';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      todoItem: '',
      todoList: []
    };
  }

  addTodoItem = (event) => {
    event.preventDefault();
    this.setState({
      todoItem: '',
      todoList: [...this.state.todoList, this.state.todoItem]
    });
  }

  deleteTodoItem = (event) => {
    event.preventDefault();
    this.setState({
      todoItem: '',
      todoList: this.state.todoList.filter(keepItem => keepItem !== this.state.todoItem)
    });
  }
  
  onStateChange = (event) => {
    this.setState({ todoItem: event.target.value });
  }

  render() {
    return (
      <div>
        <center>
        <input onChange={this.onStateChange} />
        &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.addTodoItem}>Add TodoItem</button>&nbsp;&nbsp;<br/>
        <input onChange={this.onStateChange} />
        &nbsp;&nbsp;&nbsp;&nbsp;<button onClick={this.deleteTodoItem}>delete TodoItem</button>
        </center>
        <ListOut todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;