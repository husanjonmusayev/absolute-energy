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
        d="M16.96 6.17c2 1.39 3.38 3.6 3.66 6.15M3.49 12.37a8.601 8.601 0 013.6-6.15M8.19 20.94c1.16.59 2.48.92 3.87.92 1.34 0 2.6-.3 3.73-.85M9.28 4.92a2.78 2.78 0 102.78-2.78M4.83 19.92a2.78 2.78 0 100-5.56 2.78 2.78 0 000 5.56zM21.94 17.14a2.78 2.78 0 10-2.78 2.78"
      ></path>
    </svg>
  );
};
