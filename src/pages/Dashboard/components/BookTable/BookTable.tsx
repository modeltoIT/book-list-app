import { Filter } from '../Filter';
import { BookList } from '../BookList';
import { TableInfo } from '../TableInfo';
import { ColumnHeader } from "../../../../types/columnHeader.enum.ts";

export const BookTable = () => {
  return (
    <>
      <Filter/>
      <div className="m-4 mb-0 px-0 overflow-x-auto overflow-y-hidden rounded-t-md shadow-[0_0_12px_1px_rgba(0,0,0,0.1)]">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
          <tr>
            { Object.values(ColumnHeader).map((header) => (
                <th
                  className={`p-4 border-b border-blue-gray-100 bg-blue-gray-50/50 
                  ${ header === ColumnHeader.Actions ? 'flex justify-center p-4' : '' }`}
                  key={ header }
                >
                  <p className="block font-sans text-sm antialiased font-normal leading-none text-slate-700 opacity-70">
                    { header }
                  </p>
                </th>
              )
            ) }
          </tr>
          </thead>
          <tbody>
          <BookList/>
          </tbody>
        </table>
      </div>
      <TableInfo/>
    </>
  );
};