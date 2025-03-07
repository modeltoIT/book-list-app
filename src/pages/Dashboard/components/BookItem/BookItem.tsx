import { Status } from '../../../../types/status.enum.ts';
import { FC } from 'react';
import { formatDate } from '../../../../utils/formatData.ts';
import { useBooksContext } from '../../../../hooks/useBookContext.ts';
import { Link, useLocation } from 'react-router-dom';

interface Props {
  id: string,
  title: string,
  author: string,
  status: keyof typeof Status,
  category: string,
  isbn: string,
  createdAt: string,
  modifiedAt: string,
}

export const BookItem: FC<Props> = ({ id, title, author, status, category, isbn, createdAt, modifiedAt }) => {
  const {search} = useLocation()
  const bookStatus = Status[status].slice(0, 1).toUpperCase() + Status[status].slice(1);
  const isModified = modifiedAt !== '--';
  const isActive = Status.active === status;
  const reversedStatus = isActive ? Status.deactivated : Status.active;

  const { deleteBookById, updateTheBook } = useBooksContext();

  const handleDelete = () => {
    deleteBookById(id);
  };

  const handleUpdateStatus = () => {
    updateTheBook({title, author, status: reversedStatus, category, isbn, createdAt, modifiedAt}, id);
  }

  return (
    <tr className='h-20'>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          { title }
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          { author }
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="w-max">
          <div
            className={ `relative grid items-center px-2 py-1 font-sans text-xs font-bold uppercase rounded-md select-none whitespace-nowrap ${ status === Status.active ? 'text-green-900 bg-green-500/20' : 'text-red-900 bg-red-500/20' } ` }>
            <span>{ bookStatus }</span>
          </div>
        </div>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          { category }
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          { isbn }
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
          { formatDate(createdAt) }
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <p
          className={ `block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 ${ !isModified && 'text-center' }` }>
          { isModified ? formatDate(modifiedAt) : '--' }
        </p>
      </td>
      <td className="p-4 border-b border-blue-gray-50">
        <div className="flex justify-between">
          <Link
            to={`/edit-book/${id}`}
            state={search}
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"
                     className="w-4 h-4">
                  <path
                    d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z">
                  </path>
                </svg>
              </span>
          </Link>
          <button
            className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            onClick={handleUpdateStatus}
            type="button"
          >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" fill="currentColor" aria-hidden="true"
                     className="w-7 h-7"><path
                  d="M29.49 12.45a14.08 14.08 0 1 1-19.57 13c0-5.7 2.86-10.35 8.58-13l1 2.36a11.52 11.52 0 1 0 16 10.61 11.28 11.28 0 0 0-7-10.61l1-2.36Z"/><path
                  d="M22.72 8.51h2.56v12.8h-2.56z"/></svg>
              </span>
          </button>
          {!isActive ? (
            <button
              className="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              onClick={ handleDelete }
              type="button"
            >
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" aria-hidden="true"
                     className="w-6 h-6"><path
                  d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"/></svg>
              </span>
            </button>
          ) : (
            <div className="w-10 h-10"></div>
          )}
        </div>
      </td>
    </tr>
  );
};