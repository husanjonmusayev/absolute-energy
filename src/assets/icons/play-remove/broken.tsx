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
        d="M9.38 12v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57V12zM20.07 20.04l-2.12-2.11M20.05 17.96l-2.12 2.11"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.93 3.93 0 01-3.27-1.73c-.06-.07-.11-.14-.15-.21A3.92 3.92 0 0115 19c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88.84 0 1.63.27 2.28.72A3.98 3.98 0 0123 19z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M7.97 2.85C9.2 2.3 10.57 2 12 2c5.52 0 10 4.48 10 10 0 1.31-.25 2.57-.72 3.72M4 6c-1.25 1.67-2 3.75-2 6 0 5.52 4.48 10 10 10 1.32 0 2.58-.26 3.73-.73"
      ></path>
    </svg>
  );
};
