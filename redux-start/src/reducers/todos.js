import { ADD_TODO, COMPLETE_TODO } from '../actions';

export default function todos(previousState, action) {
  // 최초에 초기값 할당
  if (previousState === undefined) {
    return [];
  }

  // 변경이 일어나는 로직

  // todos
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    const newTodos = [...previousState];
    newTodos[action.index].done = true;
    return newTodos;
  }
  // 변경이 안일어났음.
  return previousState;
}
