import { FC } from "react";



export const Linear: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M22 9v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.01-.01-.02-.03-.03-.04-.81-.9-2-1.46-3.31-1.46-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 00-.62 5.46c.22.37.5.71.82.99.02.01.03.02.04.03.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7zM2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M23 18.5c0 .36-.04.71-.13 1.05-.11.45-.29.88-.52 1.27A4.487 4.487 0 0118.5 23a4.35 4.35 0 01-2.82-1.02h-.01c-.06-.05-.11-.09-.16-.14a.138.138 0 00-.04-.03c-.32-.28-.6-.62-.82-.99a4.5 4.5 0 01.62-5.46c.82-.84 1.97-1.36 3.23-1.36 1.31 0 2.5.56 3.31 1.46.01.01.02.03.03.04.05.05.1.11.14.17.64.77 1.02 1.76 1.02 2.83zM20.18 18.48h-3.36M18.5 16.84v3.36"
      ></path>
    </svg>
  );
};
