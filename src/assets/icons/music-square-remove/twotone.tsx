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
        d="M21 8.65v5.7c0 .34-.01.67-.03.98A3.944 3.944 0 0018 14c-2.21 0-4 1.79-4 4 0 .75.21 1.46.58 2.06.2.34.46.65.76.91-.31.02-.64.03-.99.03h-5.7C3.9 21 2 19.1 2 14.35v-5.7C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65z"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M6.72 14.42a1.45 1.45 0 100-2.9 1.45 1.45 0 000 2.9z"></path>
        <path d="M13.47 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"></path>
        <path d="M12.03 13.45a1.45 1.45 0 100-2.9 1.45 1.45 0 000 2.9zM8.17 8.83l5.3-1.45"></path>
      </g>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M22 18c0 .75-.21 1.46-.58 2.06A3.97 3.97 0 0118 22a3.92 3.92 0 01-2.66-1.03c-.3-.26-.56-.57-.76-.91A3.92 3.92 0 0114 18c0-2.21 1.79-4 4-4 1.18 0 2.25.51 2.97 1.33.64.71 1.03 1.65 1.03 2.67z"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M19.07 19.04l-2.12-2.11M19.05 16.96l-2.12 2.11"></path>
      </g>
    </svg>
  );
};
