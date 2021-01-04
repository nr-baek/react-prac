import { applyMiddleware, createStore } from 'redux';
import reducer from './reducer';
import { composeWithDevTools } from 'redux-devtools-extension';

//
function middleware1(store) {
  return (next) => {
    console.log('middleware1', 1);
    return (action) => {
      console.log('middleware1', 2);
      const returnValue = next(action);
      console.log('middleware1', 3);
      return returnValue;
    };
  };
}

function middleware2(store) {
  return (next) => {
    console.log('middleware2', 1);
    return (action) => {
      console.log('middleware2', 2);
      const returnValue = next(action);
      console.log('middleware2', 3);
      return returnValue;
    };
  };
}

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(middleware1, middleware2)),
);

export default store;
