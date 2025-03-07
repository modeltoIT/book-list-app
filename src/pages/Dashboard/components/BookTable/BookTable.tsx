import { Filter } from '../Filter';
import { BookList } from '../BookList';
import { TableInfo } from '../TableInfo';

export const BookTable = () => {
  return (
    <>
      <Filter/>
      <div className="m-4 mb-0 px-0 overflow-x-auto overflow-y-hidden rounded-t-md shadow-[0_0_12px_1px_rgba(0,0,0,0.1)]">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
          <tr>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                Book title
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                Author name
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                Status
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                Category
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                ISBN
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                Created At
              </p>
            </th>
            <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50/50">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                Modified At
              </p>
            </th>
            <th className="border-b border-blue-gray-100 bg-blue-gray-50/50 flex justify-center p-4">
              <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                Actions
              </p>
            </th>
          </tr>
          </thead>
          <tbody>
            <BookList/>
          </tbody>
        </table>
      </div>
      <TableInfo />
    </>
  );
};