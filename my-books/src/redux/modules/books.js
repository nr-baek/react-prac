import { sleep } from '../../utils';
import BookService from '../../services/BookService';

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

// thunk
export const getBooksThunk = () => async (dispatch, getState) => {
  try {
    // 서버에 책 리스트 다오.
    dispatch(bookStart());

    await sleep(2000);

    const books = await BookService.getBooks(getState().auth.token);

    dispatch(bookSuccess(books));
  } catch (error) {
    console.log(error);
    dispatch(bookFail(error));
  }
};
