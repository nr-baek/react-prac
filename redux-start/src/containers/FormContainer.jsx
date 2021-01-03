// import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';
import Form from '../components/Form';

// Container

// const FormContainer = connect(null, (dispatch) => ({
//     add: (todo) => {
//       dispatch(addTodo(todo));
//       console.log(todo);
//     }}))(Form);

const FormContainer = () => {
  const dispatch = useDispatch();
  function add(todo) {
    dispatch(addTodo(todo));
  }
  return <Form add={add} />;
};

export default FormContainer;
