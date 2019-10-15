import { combineReducers } from 'redux';
import actionReducer from './reducer/actionReducer';

export default combineReducers({
  todos: actionReducer 
});
