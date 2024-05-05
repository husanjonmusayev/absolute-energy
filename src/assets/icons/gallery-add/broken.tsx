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
        d="M9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2M2 12.99V15c0 5 2 7 7 7h6c5 0 7-2 7-7v-5M13 2H9C4 2 2 4 2 9"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M15.75 5h5.5M18.5 7.75v-5.5"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M2.67 18.95l4.93-3.31c.79-.53 1.93-.47 2.64.14l.33.29c.78.67 2.04.67 2.82 0l4.16-3.57c.78-.67 2.04-.67 2.82 0L22 13.9"
      ></path>
    </svg>
  );
};
