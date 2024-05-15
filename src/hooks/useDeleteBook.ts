import { mutate } from 'swr';
import { deleteBook } from '../api/bookApi';

export const useDeleteBook = () => {
  const deleteExistingBook = async (id: number) => {
    await deleteBook(id);
    await mutate('/books');
  };

  return { deleteExistingBook };
};
