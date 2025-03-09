import { icons } from "../../utils/icons.tsx";
import { contacts } from "../../utils/constants.ts";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="p-4 flex flex-row flex-wrap items-center justify-center w-full mt-6 text-center border-t gap-y-6 gap-x-12 border-slate-200 ">
      <Link to='/' className='h-12 w-12 ml-[-4px] fill-gray-900'> { icons.logo } </Link>

      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        {Object.entries(contacts).map(([title, href]) => (
          <li key={title}>
            <a
              href={href}
              target='_blank'
              rel="noopener noreferrer"
              className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm"
            >
              {title}
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
};