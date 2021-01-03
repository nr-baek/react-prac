// { \books: {books: [], loading: false, error: null}, }

// action types

export const BOOK_SUCCESS = 'BOOK_SUCCESS';
export const BOOK_START = 'BOOK_START';
export const BOOK_FAIL = 'BOOK_FAIL';

// action creators
export const bookSuccess = (books) => ({ type: BOOK_SUCCESS, books });
export const bookStart = () => ({ type: BOOK_START });
export const bookFail = (error) => ({ type: BOOK_FAIL, error });
