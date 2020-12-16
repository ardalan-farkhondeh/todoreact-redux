import { ADD_TXT,ADD_TODO,DEL_TODO, EDIT_TODO, EDIT_ADD_TODO } from './types'

export const editTodo = key => ({
  type: EDIT_TODO,
  payload: key
});

export const editAddTodo = obj => ({
  type: EDIT_ADD_TODO,
  payload: obj
});


export const addText = value => ({
  type: ADD_TXT,
  payload: value
});

export const addTodo = todo => ({
  type: ADD_TODO,
  payload: todo
});

export const deleteTodo = key => ({
  type: DEL_TODO,
  payload: key
});