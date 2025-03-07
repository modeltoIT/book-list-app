export const Footer = () => {
  return (
    <footer
      className="p-4 flex flex-row flex-wrap items-center justify-center w-full mt-6 text-center border-t gap-y-6 gap-x-12 border-slate-200 ">
      <svg xmlns="http://www.w3.org/2000/svg" className='h-12 w-12 ml-[-4px] fill-gray-900' viewBox="0 0 48 48">
        <g>
          <path
            d="M4,20C4,12.46,4,8.69,6.34,6.34S12.46,4,20,4h8c7.54,0,11.31,0,13.66,2.34S44,12.46,44,20v8c0,7.54,0,11.31-2.34,13.66S35.54,44,28,44H20c-7.54,0-11.31,0-13.66-2.34S4,35.54,4,28Z"/>
          <path fill="#fff"
                d="M33.75,29h0v1h0A1.75,1.75,0,0,1,32,31.76H16A1.75,1.75,0,0,1,14.25,30h0V29h0a1.73,1.73,0,0,1,1-1.57V18A1.76,1.76,0,0,1,17,16.26h3A1.76,1.76,0,0,1,21.75,18v1.25H24A1.76,1.76,0,0,1,25.75,21v6.24h1.5V21A3.26,3.26,0,0,0,24,17.75h-.13a1.7,1.7,0,0,1,.7-.57l1.83-.81a1.77,1.77,0,0,1,2.31.91l3.62,8.24a1.75,1.75,0,0,1-.21,1.74h0A1.74,1.74,0,0,1,33.75,29Z"/>
        </g>
      </svg>

      <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
        <li>
          <a href="https://github.com/modeltoIT" target='_blank'
             className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
            GitHub
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/dmtivasenko/" target='_blank'
             className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:dmtivasenko@gmail.com"
             className="text-slate-700 hover:text-slate-500 focus:text-slate-500 text-sm">
            Contact Me
          </a>
        </li>
      </ul>
    </footer>
  );
};