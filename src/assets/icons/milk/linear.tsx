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
        d="M18 15v4c0 1.65-1.35 3-3 3H9c-1.65 0-3-1.35-3-3v-5.02l3.89.02c.73 0 1.45.17 2.11.5.66.33 1.38.5 2.12.5H18z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18 10.83V15h-3.88c-.74 0-1.46-.17-2.12-.5a4.71 4.71 0 00-2.11-.5L6 13.98v-3.15c0-.46.26-1.09.59-1.42l2.12-2.12c.18-.18.29-.44.29-.7V5h6v1.59c0 .26.11.52.29.7l2.12 2.12c.33.33.59.96.59 1.42zM18 16v-1M6 14.98v-1M14.5 5h-5C8.67 5 8 4.32 8 3.5S8.67 2 9.5 2h5c.83 0 1.5.68 1.5 1.5S15.33 5 14.5 5z"
      ></path>
    </svg>
  );
};
