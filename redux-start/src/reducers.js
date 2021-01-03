import { ADD_TODO, COMPLETE_TODO } from "./actions";

// 언제 실행 되나요?
// 1. 앱이 최초로 실행될 때 => 초기 state 를 만들어서 할당한다.
// 2. 액션이 날라왔을 때
export function todoApp(previousState, action) {
  // 최초에 초기값 할당
  if (previousState === undefined) {
    return [];
  }

  // 변경이 일어나는 로직
  if (action.type === ADD_TODO) {
    return [...previousState, { text: action.text, done: false }];
  }

  if (action.type === COMPLETE_TODO) {
    const newState = [...previousState];
    newState[action.index].done = true;
    return newState;
  }

  // 변경이 안일어났음.
  return previousState;
}
