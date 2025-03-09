import { Link, useLocation } from 'react-router-dom';
import { HEADER_TITLES } from '../../utils/pageTitles.ts';
import { icons } from "../../utils/icons.tsx";

export const Header = () => {
  const location = useLocation();
  const headerTitle = HEADER_TITLES[location.pathname];

  return (
    <header className="flex items-center justify-between mx-4 mt-4 text-gray-700 bg-white rounded-none bg-clip-border mb-8">
      <div className="flex items-center gap-2 sm:gap-4 ml-[-5px]">
        <Link to='/' className='h-14 w-14 fill-gray-900' > { icons.logo } </Link>

        <div>
          <h5 className="block font-sans antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-lg xs:text-xl">
            { headerTitle }
          </h5>

        </div>
      </div>
      <div>
        <Link
          to={ { pathname: '/add-book' } }
          state={ location.search }
          className="flex select-none items-center gap-2 xs:gap-3 rounded-lg bg-gray-900 py-2 px-2 xs:px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          { icons.addNewBook }
          Add book
        </Link>
      </div>
    </header>
  );
};