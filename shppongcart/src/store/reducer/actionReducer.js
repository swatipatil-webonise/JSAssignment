import {ADD_COUNT,ADD_PRODUCT,REMOVE_PRODUCT,SUBTRACT_COUNT,CLEAR_ALL} from '../actions/actions'

const todoReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [
        ...state, action.product
      ];

    case REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.id);

    case ADD_COUNT:
      return state.map(product => {
        if (product.id === action.id) {
          product.quantity++;
        }
        return product;
      })

    case SUBTRACT_COUNT:
      return state.map(product => {
        if (product.id === action.id) {
          product.quantity--;
        }
        return product;
      })
    case CLEAR_ALL:
      return [];
    default:
      return state;
  }
};

export default todoReducer;

