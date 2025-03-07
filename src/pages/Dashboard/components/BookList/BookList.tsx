import { useBooksContext } from '../../../../hooks/useBookContext.ts';
import { BookItem } from '../BookItem';
import { Book } from '../../../../types/book.interface.ts';
import { MIN_ROW_NUM } from '../../../../utils/constants.ts';

export const BookList = () => {
  const { filteredBooks } = useBooksContext();
  const isEnoughRows = filteredBooks.length <= MIN_ROW_NUM;

  return (
    <>
      { filteredBooks.map((book: Book) => (
        <BookItem
          key={ book.id }
          id={ book.id }
          title={ book.title }
          author={ book.author }
          status={ book.status }
          category={ book.category }
          isbn={ book.isbn }
          createdAt={ book.createdAt }
          modifiedAt={ book.modifiedAt }
        />))
      }

      { isEnoughRows &&
        Array(MIN_ROW_NUM - filteredBooks.length).fill(0)
          .map((_, index) => (
            <tr key={ index }
                className="h-20 border-b border-blue-gray-50"
            ></tr>
          ))
      }
    </>
  );
};
