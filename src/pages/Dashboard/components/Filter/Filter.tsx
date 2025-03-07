import { useSearchParams } from 'react-router-dom';
import { SortBy } from '../../../../types/sortby.enum.ts';

export const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const filterBy = (status: SortBy) => {
    setSearchParams({ 'sortBy': status });
  };

  const sortOptions = Object.values(SortBy).map(option => option.toUpperCase()[0] + option.slice(1));
  const currentSortOption = (searchParams.get('sortBy') || SortBy.active).toUpperCase()[0] + (searchParams.get('sortBy') || SortBy.active).slice(1);

  return (
    <div className="flex flex-col items-center justify-between gap-4 md:flex-row mx-4">
      <div className="block w-full overflow-hidden md:w-max ">
        <nav>
          <ul className="relative flex flex-row p-1 rounded-lg bg-gray-200 bg-opacity-60 gap-2">
            { sortOptions.map((sortOption) => (
              <li
                key={ sortOption }
                className="relative flex items-center justify-center w-full h-full px-4  py-1 font-sans text-base antialiased font-normal leading-relaxed text-center bg-transparent cursor-pointer select-none text-blue-gray-900"
                onClick={ () => filterBy(SortBy[sortOption.toLowerCase() as keyof typeof SortBy]) }
              >
                <div className="z-20 text-inherit">
                  { sortOption }
                </div>
                {
                <div className={`absolute inset-0 z-10 h-full bg-white rounded-md shadow transition-all duration-300 ease-in-out opacity-0 ${sortOption === currentSortOption && 'opacity-100'}`}></div>
                }
              </li>
            )) }
          </ul>
        </nav>
      </div>
    </div>
  );
};