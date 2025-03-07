import { createContext, ReactNode, useState, useEffect } from 'react';
import { Book } from '../types/book.interface.ts';
import { loadBooks, deleteBook, addBook, updateBook } from '../services/bookService.ts';
import { useSearchParams } from 'react-router-dom';
import { SortBy } from '../types/sortby.enum.ts';
import { StatusMessage } from '../types/statusMessage.enum.ts';

interface BooksContextInterface {
  books: Book[];
  filteredBooks: Book[];
  setBooks: (books: Book[]) => void;
  addNewBook: (book: Omit<Book, 'id'>) => void;
  deleteBookById: (bookId: string) => void;
  updateTheBook: (book: Omit<Book, 'id'>, bookId: string) => void;
  statusMessage: string | null;
  setStatusMessage: (value: null) => void;
}

export const BooksContext = createContext<BooksContextInterface>({
  books: [],
  filteredBooks: [],
  setBooks: () => {
  },
  addNewBook: () => {
  },
  deleteBookById: () => {
  },
  updateTheBook: () => {
  },
  statusMessage: null,
  setStatusMessage: () => {}
});

export const BooksProvider = ({ children }: { children: ReactNode }) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [searchParam] = useSearchParams();

  const filteredBooks = books.filter(book => (
    !searchParam.get('sortBy') && book.status === SortBy.active
    || searchParam.get('sortBy') === SortBy.all
    || book.status === searchParam.get('sortBy')
  ));

  useEffect(() => {
    loadBooks()
      .then(data => {
        setBooks(data);
      })
      .catch((error) => console.error('Error fetching books:', error));
  }, []);

  const handleDeleteBook = async (bookId: string) => {
    const success = await deleteBook(bookId);
    if (success) {
      setBooks((prevBooks) => prevBooks.filter(book => book.id !== bookId));
      setStatusMessage(StatusMessage.BOOK_DELETED);
    } else {
      setStatusMessage(StatusMessage.BOOK_DELETE_FAILED);
    }
  };

  const handleAddBook = async (book: Omit<Book, 'id'>) => {
    const [responseSuccess, addedBook] = await addBook(book);
    if (responseSuccess) {
      setBooks((prevBooks) => [...prevBooks, addedBook as Book]);
      setStatusMessage(StatusMessage.BOOK_ADDED);
    } else {
      setStatusMessage(StatusMessage.BOOK_ADD_FAILED);
    }
  };

  const handleUpdateBook = async (editedBook: Omit<Book, 'id'>, bookId: string) => {
    const success = await updateBook(editedBook, bookId);

    if (success) {
      let shouldUpdateStatus = false;
         setBooks((prevBooks) => prevBooks.map(book => {
          if (book.id === bookId) {
            if (book.status === editedBook.status) {
              shouldUpdateStatus = true;
            }

            return { id: book.id, ...editedBook };
          }

          return book;
        }));
        if (shouldUpdateStatus) {
          setStatusMessage(StatusMessage.BOOK_EDITED);
        }
    } else {
      setStatusMessage(StatusMessage.BOOK_EDIT_FAILED);
    }
  };

  return (
    <BooksContext.Provider value={ {
      books,
      setBooks,
      filteredBooks,
      addNewBook: handleAddBook,
      deleteBookById: handleDeleteBook,
      updateTheBook: handleUpdateBook,
      statusMessage,
      setStatusMessage
    } }>
      { children }
    </BooksContext.Provider>
  );
};