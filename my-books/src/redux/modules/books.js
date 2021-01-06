import BookService from '../../services/BookService';
import { call, put, takeEvery, delay, select } from 'redux-saga/effects';
import { createAction, createActions, handleActions } from 'redux-actions';
import produce from 'immer';
import { push } from 'connected-react-router';

// namespace
const prefix = 'my-books/books';

// action creator
const { start, success, fail } = createActions('START', 'SUCCESS', 'FAIL', {
  prefix,
});

// initial state
const initialState = { books: [], loading: false, error: null };

// reducer
const books = handleActions(
  {
    START: (state, action) => ({ ...state, loading: true, error: null }),
    SUCCESS: (state, action) => ({
      books: action.payload,
      loading: false,
      error: null,
    }),
    FAIL: (state, action) => ({
      ...state,
      loading: false,
      error: action.payload,
    }),
  },
  initialState,
  { prefix },
);
export default books;

const BOOKS_SAGA = prefix + '/BOOK_SAGA';
const ADD_BOOK_SAGA = prefix + '/ADD_BOOk_SAGA';

// saga
function* getBooksSaga() {
  // side effect 처리 로직
  try {
    yield put(start());
    yield delay(2000);

    const token = yield select((state) => state.auth.token);
    const books = yield call(BookService.getBooks, token);

    yield put(success(books));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
  }
}

function* addBookSaga(action) {
  // side effect 처리 로직
  try {
    const book = action.payload;
    const books = yield select((state) => state.books.books);

    yield put(
      success(
        produce(books, (draft) => {
          draft.push(book);
        }),
      ),
    );
    yield put(push('/'));
  } catch (error) {
    console.log(error);
    yield put(fail(error));
  }
}

// 사가에 넣을 액션 생성함수
export const getBooksSagaStart = createAction(BOOKS_SAGA);
export const addBookSagaStart = createAction(ADD_BOOK_SAGA);

// 사가 액션 생성자 함수 dispatch시 getBooksSaga함수로직이 실행되기위해 등록을해야됨
// 등록
export function* booksSaga() {
  yield takeEvery(BOOKS_SAGA, getBooksSaga); // BOOK_SAGA타입의 액션 dispatch시 getBooksSaga로직 실행
  yield takeEvery(ADD_BOOK_SAGA, addBookSaga);
}
