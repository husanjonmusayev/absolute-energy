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
        d="M2.58 8.67a9.993 9.993 0 013.14-4.44M2 12c0 1.17.21 2.29.58 3.33M9.09 21.57c.92.28 1.9.43 2.91.43 5.52 0 10-4.48 10-10 0-.6-.06-1.19-.16-1.76M5.72 19.75c-.47-.38-.92-.8-1.32-1.26M20.24 6.34A9.982 9.982 0 0012 2c-1.01 0-1.99.15-2.91.43M8.59 17.11a1.59 1.59 0 100-3.18 1.59 1.59 0 000 3.18z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16 14.46V8.25c0-1.32-.83-1.51-1.67-1.28l-3.18.87c-.58.16-.98.61-.98 1.28v6.4"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.41 16.05a1.59 1.59 0 100-3.18 1.59 1.59 0 000 3.18zM10.18 10.76L16 9.17"
      ></path>
    </svg>
  );
};
