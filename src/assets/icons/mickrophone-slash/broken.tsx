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
        d="M6 12v1c0 1.46.52 2.8 1.39 3.84M17.82 6.53A6.008 6.008 0 0012 2C8.69 2 6 4.69 6 8M18 9.98V13a6.005 6.005 0 01-8.08 5.63"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M5.86 19.58A9 9 0 0021 13v-2M21.5 2.99l-19 19M11.55 5.5V2.26M8.5 3.5v4"
      ></path>
    </svg>
  );
};
