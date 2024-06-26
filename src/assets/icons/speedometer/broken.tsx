import { FC } from "react";



export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M4.84 19.48A9.966 9.966 0 012 12.49C2 8.8 4 5.58 6.97 3.84c.31-.18.63-.35.97-.49M19.14 19.5a9.964 9.964 0 002.86-7c0-5.52-4.48-10-10-10M8.62 18.12c0 1.86 1.51 3.38 3.38 3.38 1.87 0 3.38-1.51 3.38-3.38 0-1.87-1.51-3.38-3.38-3.38a3.38 3.38 0 00-3.38 3.38z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75z"
      ></path>
    </svg>
  );
};
