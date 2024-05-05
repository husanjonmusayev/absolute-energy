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
        strokeWidth="1.5"
        d="M2 13.55v-3.08a4.21 4.21 0 014.21-4.21h7.37a4.21 4.21 0 014.21 4.21v7.32A4.21 4.21 0 0113.58 22H6.21C3.89 22 2 20.11 2 17.79M5.5 4V2.25M9.5 4V2.25M13.5 4V2.25M22 13.16c0 2.32-1.89 4.21-4.21 4.21V8.95A4.21 4.21 0 0122 13.16zM2 12h15.51"
      ></path>
    </svg>
  );
};
