import { mutate } from 'swr';
import { addBook } from '../api/bookApi';
import { Book } from '../types/book';
import { useCallback, useState } from 'react';

export const useAddBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const triggerAddBook = useCallback(async (book: Omit<Book, 'id'>) => {
    try {
      setIsLoading(true);
      setIsError(false);

      await addBook(book);
      await mutate('/books');
    } catch (error) {
      setIsError(true)
    }
    finally {
      setIsLoading(false)
    }
  }, []);

  return [ triggerAddBook, {isLoading, isError}] as const;
};
