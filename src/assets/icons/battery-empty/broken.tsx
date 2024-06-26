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
        d="M10.97 5H13c4 0 5 1 5 5v4c0 2-.25 3.25-1 4s-2 1-4 1H7c-4 0-5-1-5-5v-4c0-4 1-5 5-5M20.5 9.5c.86 0 1.23.16 1.38.49.12.25.12.58.12 1.01v2c0 1 0 1.5-1.5 1.5"
      ></path>
    </svg>
  );
};
