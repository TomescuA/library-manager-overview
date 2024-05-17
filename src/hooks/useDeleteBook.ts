import { mutate } from 'swr';
import { deleteBook } from '../api/bookApi';
import { useCallback, useState } from 'react';

export const useDeleteBook = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [isErrorDelete, setIsErrorDelete] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false)

  const deleteExistingBook = useCallback(async (id: number) => {

    try {
      setIsLoadingDelete(true);
      setIsErrorDelete(false);

      await deleteBook(id);
      await mutate('/books');
    } catch (error) {
      setIsErrorDelete(true)
      setErrorMessage('Error message 505')
    } finally {
      setIsLoadingDelete(false)
    }
  }, [])

  return { deleteExistingBook, errorMessage, isErrorDelete, isLoadingDelete };
};
