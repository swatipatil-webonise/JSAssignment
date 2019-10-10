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
    };
    this.id = 0;
    this.isUpdate = false;
    this.tempId = 0;
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
    if (this.state.isUpdate) {
      let description = this.state.description;
      axios({
        method: 'put',
        url: 'http://localhost:5000/todos',
      }).then((response) => {
        let t = this.state.todos;
        for (let i = 0; i < t.length; i++) {
          if (t[i].id == this.state.tempId) {
            t[i-1].description = this.state.description;
          }
        }
        this.setState({
          todos: t,
          description : '',
          isUpdate : false,
        })        
      }).catch((err) => {
        console.error(err);
      })
    } else {
      let description = this.state.description;
        axios({
          method: 'post',
          url: 'http://localhost:5000/todos',
          data: {
            desc: description
          }
        }).then((response) => {
          let todo = response.data;
          let todos = [...this.state.todos, todo];
          this.setState({
            description: '',
            todos: todos,
          });
        }).catch((err) => {
          console.error(err);
      })
    }
  }

  onDelete = (id) => {
    axios({
      method: 'delete',
      url: 'http://localhost:5000/todos',
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
      description: this.state.todos[id-1].desc,
    });
    this.state.isUpdate = true;
    this.state.tempId = id;
  }

  render() {
    return (
      <div>
        <center><br></br>
          <h1>Welcome to our todo app...</h1><br></br>
          <AddTodo description={this.state.description} onUserType={this.onUserType} onAddTodo={this.onAddTodo} /><br></br><br></br>
          <ListTodo todos={this.state.todos} onDelete={this.onDelete} onEdit={this.onEdit} />
        </center>
      </div>
    );
  }
}
