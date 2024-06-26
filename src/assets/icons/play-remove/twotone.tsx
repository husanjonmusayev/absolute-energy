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
        d="M22 12c0 1.31-.25 2.57-.72 3.72-.65-.45-1.44-.72-2.28-.72-.94 0-1.81.33-2.5.88A3.97 3.97 0 0015 19c0 .75.21 1.46.58 2.06.04.07.09.14.15.21A9.84 9.84 0 0112 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10z"
        opacity="0.4"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M9.38 12v-1.39c0-1.72 1.22-2.43 2.71-1.57l1.2.69 1.2.69c1.49.86 1.49 2.27 0 3.13l-1.2.69-1.2.69c-1.49.86-2.71.16-2.71-1.57V12zM23 19c0 .75-.21 1.46-.58 2.06-.21.36-.48.68-.79.94-.7.63-1.62 1-2.63 1a3.93 3.93 0 01-3.27-1.73c-.06-.07-.11-.14-.15-.21A3.92 3.92 0 0115 19c0-1.26.58-2.39 1.5-3.12.69-.55 1.56-.88 2.5-.88.84 0 1.63.27 2.28.72A3.98 3.98 0 0123 19z"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M20.07 20.04l-2.12-2.11M20.05 17.96l-2.12 2.11"></path>
      </g>
    </svg>
  );
};
