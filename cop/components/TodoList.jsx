import 'cop/styles/TodoList.css'
import { Todo } from 'cop'
import PropTypes from 'prop-types'

const TodoList = ({ todos, toggleTodo }) => {
    return (<>
    <ul>
        {todos.map( todo => (
            <Todo key={todo.id} {...todo} onClick={ () => toggleTodo(todo.id)}/>
        ))} 
    </ul>
    </>)
}

TodoList.propTypes = {
    todos : PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired,
    toggleTodo: PropTypes.func.isRequired
}

export default TodoList