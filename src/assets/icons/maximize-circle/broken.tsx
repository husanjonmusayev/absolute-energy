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
        d="M17 3h4v4M15 9l6-6M7 21H3v-4M9 15l-6 6M7.64 3A9.995 9.995 0 002 12c0 .69.07 1.36.2 2M14.02 2.2C13.37 2.07 12.69 2 12 2M9.98 21.8c.65.13 1.33.2 2.02.2 5.52 0 10-4.48 10-10 0-.68-.07-1.35-.2-2"
      ></path>
    </svg>
  );
};
