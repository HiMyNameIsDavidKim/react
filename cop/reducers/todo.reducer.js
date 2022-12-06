import { createSlice } from "@reduxjs/toolkit"
import { v4 as uuid } from 'uuid'
/**
const initialState = {todos: [], todo: {}}

export const addTodoAction = todo => ({type: "ADD_TODO", payload: todo})
export const toggleTodoAction = todoId => ({type: "TOGGLE_TODE", payload: todoId})
export const deleteTodoAction = todoId => ({type: "DELETE_TODE", payload: todoId}) 


const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {...state, todos: [...state.todos, action.payload]}
      case 'TOGGLE_TODE':
        return {...state, todos: state.todos.map(
            todo => (todo.id === action.payload) ? {...todo, complete: !todo.complete} 
                                                : todo)}
      case 'DELETE_TODE':
        return {...state, todos: state.todos.filter(todo => todo.id !== action.payload)}
      default:
        return state
    }
  }
 */
const addTodoAction = {
  reducer: (state, action) => {
    const {id, text} = action.payload
    state.push({id, text, complete: false})
  },
  prepare: (text)=>{
    return {payload: {text, id: uuid}}
  }
}
const toggleTodoAction = (state, action) => {
  const todo = state.find(todo => todo.id === action.payload)
  if(todo) todo.complete = !todo.complete
}

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers : {addTodoAction, toggleTodoAction}
})

export const { addTodo, toggleTodo } = todoSlice.actions

export default todoSlice.reducer