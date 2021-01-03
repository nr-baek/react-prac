import { combineReducers } from 'redux';
import todos from './todos';
import filter from './filter';

// 리듀서 분리 후 redux함수로 합치기

export const todoApp = combineReducers({
  todos,
  filter,
});

// 언제 실행 되나요?
// 1. 앱이 최초로 실행될 때 => 초기 state 를 만들어서 할당한다.
// 2. 액션이 날라왔을 때
// export function todoApp(previousState, action) {
//   // 최초에 초기값 할당
//   if (previousState === undefined) {
//     return [];
//   }

//   // 변경이 일어나는 로직
//   if (action.type === ADD_TODO) {
//     return [...previousState, { text: action.text, done: false }];
//   }

//   if (action.type === COMPLETE_TODO) {
//     const newState = [...previousState];
//     newState[action.index].done = true;
//     return newState;
//   }

//   // 변경이 안일어났음.
//   return previousState;
// }

// export function todoApp(previousState, action) {
//   // 최초에 초기값 할당
//   if (previousState === undefined) {
//     return { todos: [], filter: 'SHOW_ALL' };
//   }

//   // 변경이 일어나는 로직

//   // todos
//   if (action.type === ADD_TODO) {
//     return {
//       ...previousState,
//       todos: [...previousState.todos, { text: action.text, done: false }],
//     };
//   }

//   if (action.type === COMPLETE_TODO) {
//     const newTodos = [...previousState.todos];
//     newTodos[action.index].done = true;
//     return { ...previousState, todos: newTodos };
//   }

//   // filter
//   if (action.type === SHOW_DONE) {
//     return { ...previousState, filter: SHOW_DONE };
//   }
//   if (action.type === SHOW_ALL) {
//     return { ...previousState, filter: SHOW_ALL };
//   }

//   // 변경이 안일어났음.
//   return previousState;
// }

// 리듀서 분리 후 수동으로 합치기

// export function todoApp(previousState = {}, action) {
//   return {
//     todos: todos(previousState.todos, action),
//     filter: filter(previousState.filter, action),
//   };
// }
