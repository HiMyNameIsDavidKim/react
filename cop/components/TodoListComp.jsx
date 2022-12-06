import { connect } from 'react-redux'
import { createSelector } from '@reduxjs/toolkit'
import { toggleTodo } from 'cop/reducers/todo.reducer'
import { TodoList } from 'cop'
import { Filters } from 'cop/reducers/filter.reducer'

const selectTodos = state => state.todos
const selectFilter = state => state.visibilityFilter

const TodoListComp = createSelector(
  [selectTodos, selectFilter],
  (todos, filter) => {
    switch (filter) {
      case Filters.SHOW_ALL:
        return todos
      case Filters.SHOW_COMPLETED:
        return todos.filter(t => t.completed)
      case Filters.SHOW_ACTIVE:
        return todos.filter(t => !t.completed)
      default:
        throw new Error('Unknown filter: ' + filter)
    }
  }
)

const mapStateToProps = state => ({
  todos: TodoListComp(state)
})

const mapDispatchToProps = { toggleTodo }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)