export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (textToAdd) => ({
  type: ADD_TODO,
  textToAdd
});

export const deleteTodo = (textToDelete) => ({
  type: DELETE_TODO,
  textToDelete
});

export const updateTodo = (textToUpdate, textToSet) => ({
  type: UPDATE_TODO,
  textToUpdate,
  textToSet,
});
