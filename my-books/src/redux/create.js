import { applyMiddleware, createStore } from 'redux';
import reducer from './modules/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';

/*
{
  books: {books: [], loading: false, error: null}, 
  auth: {token: [], loadng: false, error: null}}
}
*/

const create = (history) =>
  createStore(
    reducer(history),
    {
      auth: {
        token: localStorage.getItem('token'),
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(
        thunk.withExtraArgument(history),
        routerMiddleware(history),
      ),
    ),
  );

export default create;
