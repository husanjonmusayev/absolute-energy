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
        d="M2.03 11.28c-.17-.98.33-2.29 1.11-2.91l6.93-5.55c1.06-.85 2.79-.85 3.86.01l6.93 5.54c.77.62 1.27 1.93 1.11 2.91l-1.33 7.96c-.24 1.41-1.61 2.57-3.04 2.57H6.4c-1.44 0-2.8-1.15-3.04-2.57l-.64-3.86M9.88 14.38c1.27-1.21 2.97-1.21 4.24 0M8.75 11.45c-.35.23-.68.5-1 .81"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M16.24 12.26a6.64 6.64 0 00-1.76-1.24 5.76 5.76 0 00-2.48-.57"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.995 16.5h.01"
      ></path>
    </svg>
  );
};
