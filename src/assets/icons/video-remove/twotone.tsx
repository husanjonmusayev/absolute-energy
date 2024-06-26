import { FC } from "react";



export const TwoTOne: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M22 9v6c0 .23 0 .45-.02.67-.04-.06-.09-.12-.14-.17-.81-.93-2.01-1.5-3.34-1.5-1.26 0-2.41.52-3.23 1.36a4.5 4.5 0 00-.62 5.46c.23.38.52.73.86 1.02.05.05.1.09.16.14-.21.02-.44.02-.67.02H9c-5 0-7-2-7-7V9c0-5 2-7 7-7h6c5 0 7 2 7 7z"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M2.52 7.11h18.96M8.52 2.11v4.86M15.48 2.11v4.41"></path>
      </g>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M23 18.5c0 .36-.04.71-.13 1.05-.11.45-.29.88-.52 1.27A4.487 4.487 0 0118.5 23a4.35 4.35 0 01-2.82-1.02h-.01c-.06-.05-.11-.09-.16-.14-.34-.29-.63-.64-.86-1.02a4.5 4.5 0 01.62-5.46c.82-.84 1.97-1.36 3.23-1.36 1.33 0 2.53.57 3.34 1.5.05.05.1.11.14.17.64.77 1.02 1.76 1.02 2.83z"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M19.7 19.68l-2.38-2.38M19.68 17.32L17.3 19.7"></path>
      </g>
    </svg>
  );
};
