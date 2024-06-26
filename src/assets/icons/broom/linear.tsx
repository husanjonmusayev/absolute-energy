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
        d="M9.87 5.67L6.45 7.75 4.89 5.19a2.01 2.01 0 01.67-2.75 2.01 2.01 0 012.75.67l1.56 2.56zM11.82 9.16l-3.16 1.92a3.978 3.978 0 00-1.51 5.18l2.05 4.18c.66 1.35 2.26 1.82 3.54 1.03l6.43-3.91c1.29-.78 1.6-2.41.71-3.62l-2.77-3.74c-1.2-1.62-3.45-2.16-5.29-1.04z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M10.757 5.098l-5.125 3.12 2.08 3.417 5.125-3.12-2.08-3.417zM14.31 16.81l1.65 2.71M11.75 18.37l1.65 2.71M16.87 15.25l1.65 2.71"
      ></path>
    </svg>
  );
};
