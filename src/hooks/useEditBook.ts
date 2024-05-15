import { mutate } from 'swr';
import { editBook } from '../api/bookApi';
import { Book } from '../types/book';

export const useEditBook = () => {
  const editExistingBook = async (id: number, book: Partial<Book>) => {
    await editBook(id, book);
    await mutate('/books');
  };

  return { editExistingBook };
};
