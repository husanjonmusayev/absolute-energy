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
        d="M2 8.34v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c.2-.12.36-.25.49-.41v-2.56c-.13-.16-.29-.29-.49-.41L8.1 8.49 4.93 6.67C3.63 5.9 2 6.84 2 8.34z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M14.68 6.65c-1.3-.75-2.93.19-2.93 1.69v7.32c0 1.5 1.63 2.44 2.93 1.69l3.17-1.82 3.17-1.83c1.3-.75 1.3-2.62 0-3.38l-2.18-1.26"
      ></path>
    </svg>
  );
};
