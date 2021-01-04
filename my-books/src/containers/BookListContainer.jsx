import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import BookList from '../components/BookList';
import { getBooksThunk } from '../redux/modules/books';

export default function BookListContainer() {
  // redux와의 연결고리
  const books = useSelector((state) => state.books.books);
  const loading = useSelector((state) => state.books.loading);
  const error = useSelector((state) => state.books.error);
  // redux에서 데이터를 받아와서 props로 넣어준다.

  const dispatch = useDispatch();

  const getBooks = useCallback(async () => {
    dispatch(getBooksThunk());
  }, [dispatch]);
  return (
    <BookList
      books={books}
      loading={loading}
      error={error}
      getBooks={getBooks}
    />
  );
}
