// { \books: {books: [], loading: false, error: null}, }

// action types

import { sleep } from '../utils';
import BookService from '../services/BookService';

export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_START = 'BOOK_START';
export const BOOK_FAIL = 'BOOK_FAIL';

// action creators
const bookSuccess = (books) => ({ type: BOOK_SUCCESS, books });
const bookStart = () => ({ type: BOOK_START });
const bookFail = (error) => ({ type: BOOK_FAIL, error });

// thunk
export const getBooksThunk = (token) => async (dispatch, getState) => {
  try {
    // 서버에 책 리스트 다오.
    dispatch(bookStart());

    await sleep(2000);

    const books = await BookService.getBooks(token);

    dispatch(bookSuccess(books));
  } catch (error) {
    console.log(error);
    dispatch(bookFail(error));
  }
};
