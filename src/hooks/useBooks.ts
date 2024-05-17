
import useSWR from 'swr';
import { getBooks } from '../api/bookApi';
import { Book } from '../types/book';
import { keys } from '../types/swrKeys';

export const useBooks = () => {
  const { data, error, mutate, isLoading } = useSWR<Book[]>(keys.Books, getBooks);

  return {
    books: isLoading || !data ? [] as Book[] : data,
    isLoading,
    isError: error,
    mutate,
  };
};

export const useBookById = (bookId: number) => {
  const { books } = useBooks();
  return {
    book: books.find((book) => book.id === bookId)
  }
}
