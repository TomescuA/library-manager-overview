import { mutate } from 'swr';
import { updateBook } from '../api/bookApi';
import { Book } from '../types/book';
import { useCallback, useState } from 'react';

export const useUpdateBook = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const triggerUpdateBook = useCallback(async (book: Book) => {
    try {
      setIsLoading(true);
      setIsError(false);

      await updateBook(book);
      await mutate('/books');
    } catch (error) {
      setIsError(true)
    }
    finally {
      setIsLoading(false)
    }
  }, []);

  return [triggerUpdateBook, {isLoading, isError}] as const;
};
