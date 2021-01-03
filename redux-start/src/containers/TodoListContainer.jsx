import { connect } from 'react-redux';
import { completeTodo } from '../actions';
import TodoList from '../components/TodoList';

const TodoListContainer = connect(
  (state) => ({ todos: state.todos }),
  (dispatch) => {
    return {
      complete: (index) => {
        dispatch(completeTodo(index));
      },
    };
  },
)(TodoList);

export default TodoListContainer;
