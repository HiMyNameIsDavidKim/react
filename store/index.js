import { combineReducers} from "@reduxjs/toolkit"
import todoReducer from "cop/reducers/todo.reducer"
import filterReducer from "cop/reducers/filter.reducer"

export default combineReducers({
    todos: todoReducer,
    filters: filterReducer
})
