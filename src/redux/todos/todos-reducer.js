import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './todos-actions'

const {addTodoRequest, addTodoSuccess, addTodoError, 
  deleteTodoSuccess, deleteTodoRequest, deleteTodoError, 
  toggleTodoRequest, toggleTodoSuccess, toggleTodoError, 
fetchTodoRequest, fetchTodoSuccess, fetchTodoError} = actions

const items = createReducer([], {
  [fetchTodoSuccess]: (_, {payload}) => payload,
  [addTodoSuccess]: (state, action) => [...state, action.payload],
  [deleteTodoSuccess]: (state, action) => 
  state.filter(({ id }) => id !== action.payload),
  [toggleTodoSuccess]: (state, action) => state.map(todo =>
  todo.id === action.payload.id ? action.payload : todo,),
})
const loading = createReducer(false, {
  [addTodoRequest]: () => true,
  [addTodoSuccess]: () => false,
  [addTodoError]: () => false,
  [deleteTodoRequest]: () => true,
  [deleteTodoSuccess]: () => false,
  [deleteTodoError]: () => false,
  [toggleTodoRequest]: () => true,
  [toggleTodoSuccess]: () => false,
  [toggleTodoError]: () => false,
  [fetchTodoRequest]: () => true,
  [fetchTodoSuccess]: () => false,
  [fetchTodoError]: () => false,
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, action) => action.payload,
})

const error = createReducer(null, {})
export default combineReducers({
  items,
  filter,
  loading,
  error
});