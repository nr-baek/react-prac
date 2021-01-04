import { applyMiddleware, createStore } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

/*
{
  books: {books: [], loading: false, error: null}, 
  auth: {token: [], loadng: false, error: null}}
}
*/

const store = createStore(
  reducer,
  {
    auth: { token: localStorage.getItem('token'), loading: false, error: null },
  },
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(history))),
);

export default store;
