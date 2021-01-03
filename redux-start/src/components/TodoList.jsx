import React from 'react';

// import { completeTodo } from '../actions';
function TodoList({ todos, complete }) {
  return (
    <div>
      <ul>
        {todos.map((todo, index) => {
          function click() {
            // store.dispatch(completeTodo(index));
            complete(index);
          }
          if (todo.done) {
            return (
              <li style={{ textDecoration: 'line-through' }}>{todo.text}</li>
            );
          }
          return (
            <li>
              {todo.text} <button onClick={click}>done</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
