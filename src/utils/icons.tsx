export const icons = {
  logo: <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
  >
    <g>
      <path
        d="M4,20C4,12.46,4,8.69,6.34,6.34S12.46,4,20,4h8c7.54,0,11.31,0,13.66,2.34S44,12.46,44,20v8c0,7.54,0,11.31-2.34,13.66S35.54,44,28,44H20c-7.54,0-11.31,0-13.66-2.34S4,35.54,4,28Z"/>
      <path fill="#fff"
            d="M33.75,29h0v1h0A1.75,1.75,0,0,1,32,31.76H16A1.75,1.75,0,0,1,14.25,30h0V29h0a1.73,1.73,0,0,1,1-1.57V18A1.76,1.76,0,0,1,17,16.26h3A1.76,1.76,0,0,1,21.75,18v1.25H24A1.76,1.76,0,0,1,25.75,21v6.24h1.5V21A3.26,3.26,0,0,0,24,17.75h-.13a1.7,1.7,0,0,1,.7-.57l1.83-.81a1.77,1.77,0,0,1,2.31.91l3.62,8.24a1.75,1.75,0,0,1-.21,1.74h0A1.74,1.74,0,0,1,33.75,29Z"/>
    </g>
  </svg>,

  addNewBook: <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    className="bg-gray-900"
  >
    <path fill="#fff"
          d="M2 5C2 3.34315 3.34315 2 5 2H15C16.6569 2 18 3.34315 18 5V9.28988C17.3663 9.10128 16.695 9 16 9C12.134 9 9 12.134 9 16C9 16.695 9.10128 17.3663 9.28988 18H5C4.44772 18 4 18.4477 4 19C4 19.5523 4.44772 20 5 20H10.2547C10.8179 20.8074 11.5469 21.4905 12.3924 22H5C3.34315 22 2 20.6569 2 19V5Z"/>
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M10 16C10 12.6863 12.6863 10 16 10C19.3137 10 22 12.6863 22 16C22 19.3137 19.3137 22 16 22C12.6863 22 10 19.3137 10 16ZM16 13C16.5523 13 17 13.4477 17 14V15H18C18.5523 15 19 15.4477 19 16C19 16.5523 18.5523 17 18 17H17V18C17 18.5523 16.5523 19 16 19C15.4477 19 15 18.5523 15 18V17H14C13.4477 17 13 16.5523 13 16C13 15.4477 13.4477 15 14 15H15V14C15 13.4477 15.4477 13 16 13Z"
      clipRule="evenodd"
    />
  </svg>,

  successTick: <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
  </svg>,

  failCross: <svg
    className="w-5 h-5"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path
      d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z"/>
  </svg>,

  deleteBin: <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="size-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round"
          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
  </svg>,

  editBtn: <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className="w-4 h-4"
  >
    <path
      d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32L19.513 8.2z"/>
  </svg>,

  switchBtn: <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    fill="currentColor"
    aria-hidden="true"
    className="w-7 h-7"
  >
    <path
      d="M29.49 12.45a14.08 14.08 0 1 1-19.57 13c0-5.7 2.86-10.35 8.58-13l1 2.36a11.52 11.52 0 1 0 16 10.61 11.28 11.28 0 0 0-7-10.61l1-2.36Z"/>
    <path d="M22.72 8.51h2.56v12.8h-2.56z"/>
  </svg>,

  deleteBtn: <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    fill="currentColor"
    aria-hidden="true"
    className="w-6 h-6"
  >
    <path
      d="M24.2,12.193,23.8,24.3a3.988,3.988,0,0,1-4,3.857H12.2a3.988,3.988,0,0,1-4-3.853L7.8,12.193a1,1,0,0,1,2-.066l.4,12.11a2,2,0,0,0,2,1.923h7.6a2,2,0,0,0,2-1.927l.4-12.106a1,1,0,0,1,2,.066Zm1.323-4.029a1,1,0,0,1-1,1H7.478a1,1,0,0,1,0-2h3.1a1.276,1.276,0,0,0,1.273-1.148,2.991,2.991,0,0,1,2.984-2.694h2.33a2.991,2.991,0,0,1,2.984,2.694,1.276,1.276,0,0,0,1.273,1.148h3.1A1,1,0,0,1,25.522,8.164Zm-11.936-1h4.828a3.3,3.3,0,0,1-.255-.944,1,1,0,0,0-.994-.9h-2.33a1,1,0,0,0-.994.9A3.3,3.3,0,0,1,13.586,7.164Zm1.007,15.151V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Zm4.814,0V13.8a1,1,0,0,0-2,0v8.519a1,1,0,0,0,2,0Z"/>
  </svg>,

  arrowDown: <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 9"
  >
    <path
      fill="none"
      className='stroke-gray-900'
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="m15,1l-7,7L1,1"
    />
  </svg>
}