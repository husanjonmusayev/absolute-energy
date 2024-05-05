import { FC } from "react";

export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      // custom style
      className={className}
      width={width ? width : "24"}
      height={height ? height : "24"}
      // default style
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 13.05V15C2 20 4 22 9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9"
        stroke="white"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.5898 13.3398H14.8298V9.09985"
        stroke="white"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M14.8299 13.3399L9.16992 7.67993"
        stroke="white"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6 16.51C9.89 17.81 14.11 17.81 18 16.51"
        stroke="white"
        strokeWidth="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
