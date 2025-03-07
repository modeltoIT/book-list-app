import { useBooksContext } from '../../../../hooks/useBookContext.ts';

export const TableInfo = () => {
  const { books, filteredBooks } = useBooksContext();

  return (
    <div className="mx-4 flex items-center justify-between p-4 bg-white shadow-md rounded-b-xl bg-clip-border">
      <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
        Showing {filteredBooks.length} of {books.length}
      </p>
    </div>
  );
};