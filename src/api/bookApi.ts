import axiosInstance from './axiosInstance';
import { Book } from '../types/book';

export const getBooks = async (): Promise<Book[]> => {
  const response = await axiosInstance.get('/books');
  return response.data;
};

export const addBook = async (book: Omit<Book, 'id'>): Promise<Book> => {
  const response = await axiosInstance.post('/books', book);
  return response.data;
};

export const updateBook = async (request: Book): Promise<Book> => {
  const response = await axiosInstance.put(`/books/${request.id}`, request);
  return response.data;
};

export const deleteBook = async (id: number): Promise<void> => {
  await axiosInstance.delete(`/books/${id}`);
};
