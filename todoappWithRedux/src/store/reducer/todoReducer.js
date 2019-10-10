const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          description: action.textToAdd,
        }
      ];

    case 'DELETE_TODO':
      return state.filter((todo) => todo.description !== action.textToDelete);

    case 'UPDATE_TODO':
      for (let i = 0; i < state.length; i++) {
        if (state[i].description === action.textToUpdate) {
          state[i].description = action.textToSet;
        }
      }
      return state;

    default:
      return state;
  }
};

export default todoReducer;
