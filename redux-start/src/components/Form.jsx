import React, { useRef } from 'react';

// 이런 멍청한 컴포넌트같으니라고
// Dumb Component, Presentational Component
// view에 대한것에만 집중(로직은 컨테이너에 뺴놓음)

function Form({ add }) {
  const inputRef = useRef();

  console.log(inputRef);
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={click}>add</button>
    </div>
  );

  function click() {
    const todo = inputRef.current.value;
    add(todo);
    inputRef.current.value = '';
  }
}

export default Form;
