export const ADD_TODO = "ADD_TODO";
export const COMPLETE_TODO = "COMPLETE_TODO";

export const addTodo = (text) => ({
  type: ADD_TODO,
  text,
});

export const completeTodo = (index) => ({
  type: COMPLETE_TODO,
  index,
});

// 예상 state => ["장보기", "산책하기"];

// 최초의 상태값
// ["text"]
