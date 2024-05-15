import useSWR from 'swr';
import { getBooks } from '../api/bookApi';
import { Book } from '../types/book';
import { keys } from '../types/swrKeys';

export const useBooks = () => {
  const { data, error, mutate } = useSWR<Book[]>(keys.Books, getBooks);

  return {
    books: data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};
