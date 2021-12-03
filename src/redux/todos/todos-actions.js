import { createAction } from '@reduxjs/toolkit'; 

const fetchTodoRequest = createAction('todos/fetchTodoRequest');
const fetchTodoSuccess = createAction('todos/fetchTodoSuccess');
const fetchTodoError = createAction('todos/fetchTodoError');

const addTodoRequest = createAction('todos/addTodoRequest');
const addTodoSuccess = createAction('todos/addTodoSuccess');
const addTodoError = createAction('todos/addTodoError');

const deleteTodoRequest = createAction('todos/deleteTodoRequest');
const deleteTodoSuccess = createAction('todos/deleteTodoSuccess');
const deleteTodoError = createAction('todos/deleteTodoError');

const toggleTodoRequest = createAction('todos/toggleTodoRequest');
const toggleTodoSuccess = createAction('todos/toggleTodoSuccess');
const toggleTodoError = createAction('todos/toggleTodoError');

const changeFilter = createAction('todos/changeFilter');


export default { 
  addTodoRequest,addTodoSuccess,addTodoError, 
   deleteTodoRequest,deleteTodoSuccess, deleteTodoError, 
  changeFilter, 
  toggleTodoRequest, toggleTodoSuccess, toggleTodoError, 
  fetchTodoRequest,fetchTodoSuccess, fetchTodoError 
};