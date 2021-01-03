// import { connect } from 'react-redux';
import { useCallback } from 'react';
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
  // function add(todo) {
  //   dispatch(addTodo(todo));
  // }
  const add = useCallback(
    (todo) => {
      dispatch(addTodo(todo));
    },
    [dispatch], // 같은 참조를 가진 함수면 함수를 다시 만들지 않음
  );
  return <Form add={add} />;
};

export default FormContainer;
