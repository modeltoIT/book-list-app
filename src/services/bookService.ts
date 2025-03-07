import { Book } from '../types/book.interface.ts';

const baseURL = 'http://localhost:5001';

export const deleteBook = async (bookId: string): Promise<boolean> => {
  try {
    const response = await fetch(`${ baseURL }/books/${ bookId }`, {
      method: 'DELETE',
    });

    if (!response.ok) {
      console.error('Failed to delete book:', response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error deleting book:', error);
    return false;
  }
};

export const loadBooks = async () => {
  const response = await fetch(`${ baseURL }/books`);

  if (!response.ok) {
    throw new Error('Failed to load books');
  }

  return response.json();
};

export const updateBook = async (editedBook: Omit<Book,"id">, bookID: string) => {
  try {
    const response = await fetch(`${ baseURL }/books/${ bookID }`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(editedBook),

    });

    if (!response.ok) {
      console.error('Failed to update the book', response.statusText);
      return false;
    }

    return true;
  } catch (error) {
    console.error('Error updating the book:', error);
    return false;
  }
};

export const addBook = async (book: Omit<Book, 'id'>) => {
  try {
    const response = await fetch(`${ baseURL }/books`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(book),
    });

    if (!response.ok) {
      console.error('Failed to add book:', response.statusText);
      return [false];
    }
    const result: Book = await response.json();

    return [true, result];
  } catch (error) {
    console.error('Error adding book:', error);
    return [false];
  }
};