import React from 'react';
import { AddTodo } from './AddTodo';
import { ListTodo } from './ListTodo';
import axios from 'axios';

export class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      todos: [],
      buttonvalue: 'Add',
      isUpdate: false,
      tempId: 0
    };
  }

  componentDidMount() {
    axios({
      method: 'get',
      url: 'http://localhost:5000/todos'
    }).then((response) => {
      this.setState({
        todos: response.data,
      })
    }).catch((err) => {
      console.error(err);
    })
  }

  onUserType = event => {
    let value = event.target.value;
    this.setState({
      description: value,
    });
  };

  onAddTodo = () => {
    if (this.state.description === '') {
      alert('Please fill the fields');
      return;
    }
    if (this.state.isUpdate) {
      axios({
        method: 'put',
        url: `http://localhost:5000/todos/${this.state.tempId}`,
        data: {
          desc: this.state.description,
        }
      }).then((response) => {
        let tempTodo = this.state.todos;
        tempTodo.map(todo => {
          if (todo.id === this.state.tempId) {
            todo.description = this.state.description;
          }
        })
        this.setState({
          todos: tempTodo,
          description: '',
          isUpdate: false,
          buttonvalue: 'Add'
        })

      }).catch((err) => {
        console.log(err);
      })
    } else {
      axios({
        method: 'post',
        url: 'http://localhost:5000/todos',
        data: {
          desc: this.state.description,
        }
      }).then((response) => {
        let todo = response.data;
        let todos = [...this.state.todos, todo];
        this.setState({
          description: '',
          todos: todos,
        });
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  onDelete = (id) => {
    axios({
      method: 'get',
      url: `http://localhost:5000/todos/${id}`
    }).then((response) => {
      let todos = this.state.todos.filter((todo) => todo.id !== id);
      this.setState({
        todos: todos,
      });
    }).catch((err) => {
      console.error(err);
    })
  }

  onEdit = (id) => {
    this.setState({
      description: this.state.todos[id].description,
      buttonvalue: 'Update',
      isUpdate: true,
      tempId: id,
    });
  }

  render() {
    return (
      <div>
        <center><br></br>
          <h1>Welcome to our todo app...</h1><br></br>
          <AddTodo buttonvalue={this.state.buttonvalue} description={this.state.description} onUserType={this.onUserType} onAddTodo={this.onAddTodo} /><br></br><br></br>
          <ListTodo todos={this.state.todos} onDelete={this.onDelete} onEdit={this.onEdit} />
        </center>
      </div>
    );
  }
}
