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
        d="M23 15.37v2.19c0 2.44-1.78 4.74-4.2 5.41-.17.04-.35.04-.51 0A5.681 5.681 0 0115.34 21c-.79-.98-1.25-2.19-1.25-3.44v-2.19c0-.42.31-.88.69-1.04l2.78-1.14c.63-.25 1.33-.25 1.96 0l1 .41 1.79.73c.38.16.69.62.69 1.04z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M20.95 11.01l-.43 2.59-1-.41c-.63-.25-1.33-.25-1.96 0l-2.78 1.14c-.38.16-.69.62-.69 1.04v2.19c0 1.25.46 2.46 1.25 3.44H6.18c-1.37 0-2.66-1.09-2.89-2.44l-1.26-7.55c-.16-.93.31-2.18 1.05-2.77l6.58-5.26c1.01-.81 2.65-.81 3.66.01l6.58 5.25c.73.59 1.21 1.84 1.05 2.77z"
      ></path>
    </svg>
  );
};
