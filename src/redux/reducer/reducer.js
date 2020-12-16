import { ADD_TXT,ADD_TODO,DEL_TODO, EDIT_TODO, EDIT_ADD_TODO } from './types'

const initialState = {
  todos: [],
  text:"",
  selected:undefined,
};

export const addTodo = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_TODO: 
    return {...state,text:state.todos[action.payload],selected: action.payload};

    case EDIT_ADD_TODO: 
    return {...state,todos:state.todos.map((todo,i)=> i!==action.payload.selected ? todo : action.payload.value),
    selected: undefined,text:''};

    case ADD_TXT: 
    return { ...state, text: action.payload };
      
    case ADD_TODO: 
    return {...state, todos:state.todos.concat(action.payload),text:""};

    case DEL_TODO: 
    return {...state,todos:state.todos.filter((todo,i)=> i !== action.payload)};
    
    default: return state;
      
  }
};