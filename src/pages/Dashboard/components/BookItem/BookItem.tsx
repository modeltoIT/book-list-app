import { Status } from '../../../../types/status.enum.ts';
import { FC } from 'react';
import { formatDate } from '../../../../utils/formatData.ts';
import { useBooksContext } from '../../../../hooks/useBookContext.ts';
import { Link, useLocation } from 'react-router-dom';
import { icons } from "../../../../utils/icons.tsx";
import { Book } from "../../../../types/book.interface.ts";

interface Props {
  book: Book;
}

export const BookItem: FC<Props> = ({ book: { id, title, author, status, category, isbn, createdAt, modifiedAt } }) => {
  const { search } = useLocation()
  const bookStatus = Status[status].slice(0, 1).toUpperCase() + Status[status].slice(1);
  const isModified = modifiedAt !== null;
  const isActive = Status.active === status;
  const reversedStatus = isActive ? Status.deactivated : Status.active;

  const { deleteBookById, updateTheBook } = useBooksContext();

  const handleDelete = () => {
    deleteBookById(id);
  };

  const handleUpdateStatus = () => {
    updateTheBook({ title, author, status: reversedStatus, category, isbn, createdAt, modifiedAt }, id);
  }

  return (
    <tr className='h-20'>
      {[title, author, status, category, isbn, createdAt, modifiedAt].map((data) => (
        <td className="p-4 border-b border-blue-gray-50" key={data}>
          { data === status ? (
            <div className="w-max">
              <div
                className={ `relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap ${ status === Status.active ? 'text-green-900 bg-green-500/20' : 'text-red-900 bg-red-500/20' } ` }>
                <span>{ bookStatus }</span>
              </div>
            </div>
              ) : (
              <p className={`block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ${!isModified && data === modifiedAt ? 'text-center' : ''}`}>
                { data === createdAt || data === modifiedAt? formatDate(data) : data}
              </p>
              )}
            </td>
          )) }

      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex justify-between">
          <Link
            to={ `/edit-book/${ id }` }
            state={ search }
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                { icons.editBtn }
              </span>
          </Link>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={ handleUpdateStatus }
            type="button"
          >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                { icons.switchBtn }
              </span>
          </button>
          { !isActive ? (
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={ handleDelete }
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                { icons.deleteBtn }
              </span>
            </button>
          ) : (
            <div className="w-10 h-10"></div>
          ) }
        </div>
      </td>
    </tr>
  );
};