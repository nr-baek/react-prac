import BookService from '../../services/BookService';
import { call, put, takeEvery, delay, select } from 'redux-saga/effects';

// namespace
const namespace = 'my-books/books';

// action types
export const BOOK_SUCCESS = namespace + '/BOOK_SUCCESS';
export const BOOK_START = namespace + '/BOOK_START';
export const BOOK_FAIL = namespace + '/BOOK_FAIL';

// initial state
const initialState = { books: [], loading: false, error: null };

// reducer
export default function books(state = initialState, action) {
  switch (action.type) {
    case BOOK_SUCCESS:
      return { books: [...action.books], loading: false, error: null };
    case BOOK_START:
      return { ...state, loading: true, error: null };
    case BOOK_FAIL:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
}

// action creator
const bookSuccess = (books) => ({ type: BOOK_SUCCESS, books });
const bookStart = () => ({ type: BOOK_START });
const bookFail = (error) => ({ type: BOOK_FAIL, error });

const BOOK_SAGA = namespace + '/BOOK_SAGA';

// saga
function* getBooksSaga() {
  // side effect 처리 로직
  try {
    yield put(bookStart());
    yield delay(2000);

    const token = yield select((state) => state.auth.token);
    const books = yield call(BookService.getBooks, token);

    yield put(bookSuccess(books));
  } catch (error) {
    console.log(error);
    yield put(bookFail(error));
  }
}

// 사가에 넣을 액션 생성함수
export const getBooksSagaStart = () => ({ type: BOOK_SAGA });

// 사가 액션 생성자 함수 dispatch시 getBooksSaga함수로직이 실행되기위해 등록을해야됨
// 등록
export function* booksSaga() {
  yield takeEvery(BOOK_SAGA, getBooksSaga); // BOOK_SAGA타입의 액션 dispatch시 getBooksSaga로직 실행
}
