import React from 'react';
import { AddTodo } from './AddTodo';
import { ListTodo } from './ListTodo';
import { connect } from "react-redux";
import { addTodo , deleteTodo , updateTodo} from "./store/actions/todo";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      isUpdate : false,
      textNeedsToBeUpdated : '',
      id : 0,
    };
  }

  onUserType = event => {
    let value = event.target.value;
    this.setState({
      description: value,
    });
  };

  onAddTodo = () => {
    if (this.state.isUpdate) {
      this.props.updateTodo(this.state.textNeedsToBeUpdated,this.state.description);
      this.setState({
        description : '',
        textNeedsToBeUpdated : '',
      })
    } else {
      this.props.addTodo(this.state.description);
      this.setState({
        description : '',
      })
    }
  }

  onDelete = (textToBeDeleted) => {
    this.props.deleteTodo(textToBeDeleted);
  }

  onEdit = (textToUpdate) => {
    this.setState({
      description: textToUpdate,
      isUpdate : true,
      textNeedsToBeUpdated : textToUpdate,
    });
  }

  render() {
    return (
      <div>
        <center><br></br>
          <h1>Welcome to our todo app...</h1><br></br>
          <AddTodo description={this.state.description} onUserType={this.onUserType} onAddTodo={this.onAddTodo} /><br></br><br></br>
          <ListTodo id={this.state.id} todos={this.props.todoData} onDelete={this.onDelete} onEdit={this.onEdit} />
        </center>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todoData: state.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: textToAdd => dispatch(addTodo(textToAdd)),
  deleteTodo: textToDelete => dispatch(deleteTodo(textToDelete)),
  updateTodo: (textToUpdate,textToSet) => dispatch(updateTodo(textToUpdate,textToSet)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo); 
