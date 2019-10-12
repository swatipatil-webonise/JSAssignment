import axios from 'axios';

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const LOAD_TODO = 'LOAD_TODO'

export const loadTodo = (todos) => ({
  type: LOAD_TODO,
  todos,
});

export const addTodo = (data) => ({
  type: ADD_TODO,
  data
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  id,
});

export const updateTodo = (id, textToSet) => ({
  type: UPDATE_TODO,
  id,
  textToSet,
});

export const getTodo = () => {
  return dispatch => {
    axios({
      method: 'get',
      url: `http://localhost:5000/todos`
    }).then((response) => {
      dispatch(loadTodo(response.data));
    }).catch((err) => {
      console.error(err);
    })
  }
};

export const saveTodo = (textToAdd) => {
  return dispatch => {
    axios({
      method: 'post',
      url: 'http://localhost:5000/todos',
      data: {
        desc: textToAdd,
      }
    }).then((response) => {
      dispatch(addTodo(response.data));
    }).catch((err) => {
      console.error(err);
    })
  }
}

export const removeTodo = (id) => {
  return dispatch => {
    axios({
      method: 'delete',
      url: `http://localhost:5000/todos/${id}`
    }).then((response) => {
      dispatch(deleteTodo(id));
    }).catch((err) => {
      console.error(err);
    })
  }
}

export const editTodo = (id, textToSet) => {
  return dispatch => {
    axios({
      method: 'put',
      url: `http://localhost:5000/todos/${id}`,
      data: {
        desc: textToSet,
      }
    }).then((response) => {
      dispatch(updateTodo(id, textToSet));
    }).catch((err) => {
      console.error(err);
    })
  }
}
