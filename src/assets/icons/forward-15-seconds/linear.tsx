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
        d="M15.96 10.83H12.9l-.76 2.29h2.29a1.53 1.53 0 110 3.06h-2.29M9.54 16.17v-5.34l-1.5 1.67M13.98 4.47L12 2"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M19.09 7.8c1.11 1.48 1.8 3.31 1.8 5.31A8.89 8.89 0 0112 22a8.89 8.89 0 01-8.89-8.89A8.89 8.89 0 0112 4.22c.68 0 1.34.09 1.98.24"
      ></path>
    </svg>
  );
};
