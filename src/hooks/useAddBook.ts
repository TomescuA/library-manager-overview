import { mutate } from 'swr';
import { addBook } from '../api/bookApi';
import { Book } from '../types/book';

export const useAddBook = () => {
  const addNewBook = async (book: Omit<Book, 'id'>) => {
    await addBook(book);
    await mutate('/books');
  };

  return { addNewBook };
};
