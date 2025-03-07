import { Link, useLocation } from 'react-router-dom';
import { HEADER_TITLES } from '../../utils/pageTitles.ts';

export const Header = () => {
  const location = useLocation();
  const headerTitle = HEADER_TITLES[location.pathname];

  return (
    <header
      className="flex items-center justify-between mx-4 mt-4  text-gray-700 bg-white rounded-none bg-clip-border mb-8">
      <div className="flex items-center gap-2 sm:gap-4 ml-[-5px]">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 fill-gray-900" viewBox="0 0 48 48">
          <g>
            <path
              d="M4,20C4,12.46,4,8.69,6.34,6.34S12.46,4,20,4h8c7.54,0,11.31,0,13.66,2.34S44,12.46,44,20v8c0,7.54,0,11.31-2.34,13.66S35.54,44,28,44H20c-7.54,0-11.31,0-13.66-2.34S4,35.54,4,28Z"/>
            <path fill="#fff"
                  d="M33.75,29h0v1h0A1.75,1.75,0,0,1,32,31.76H16A1.75,1.75,0,0,1,14.25,30h0V29h0a1.73,1.73,0,0,1,1-1.57V18A1.76,1.76,0,0,1,17,16.26h3A1.76,1.76,0,0,1,21.75,18v1.25H24A1.76,1.76,0,0,1,25.75,21v6.24h1.5V21A3.26,3.26,0,0,0,24,17.75h-.13a1.7,1.7,0,0,1,.7-.57l1.83-.81a1.77,1.77,0,0,1,2.31.91l3.62,8.24a1.75,1.75,0,0,1-.21,1.74h0A1.74,1.74,0,0,1,33.75,29Z"/>
          </g>
        </svg>
        <div>
          <h5
            className="block font-sans  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 text-lg xs:text-xl">
            { headerTitle }
          </h5>

        </div>
      </div>
      <div>
        <Link
          to={{pathname: '/add-book'}}
          state={location.search}
          className="flex select-none items-center gap-2 xs:gap-3 rounded-lg bg-gray-900 py-2 px-2 xs:px-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
            className="bg-gray-900"
          >
            <path
              fill="#fff"
              d="M2 5C2 3.34315 3.34315 2 5 2H15C16.6569 2 18 3.34315 18 5V9.28988C17.3663 9.10128 16.695 9 16 9C12.134 9 9 12.134 9 16C9 16.695 9.10128 17.3663 9.28988 18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H10.2547C10.8179 20.8074 11.5469 21.4905 12.3924 22H5C3.34315 22 2 20.6569 2 19V5Z"
            />
            <path
              fill="#fff"
              fillRule="evenodd"
              d="M10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16ZM16 13C16.5523 13 17 13.4477 17 14V15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H17V18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V17H14C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15H15V14C15 13.4477 15.4477 13 16 13Z"
              clipRule="evenodd"
            />
          </svg>
          Add book
        </Link>
      </div>
    </header>
  );
};