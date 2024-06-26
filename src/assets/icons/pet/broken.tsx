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
        d="M4.41 16.75C4.17 19.64 6.35 22 9.25 22h4.79c3.26 0 5.5-2.63 4.96-5.85-.57-3.38-3.83-6.15-7.26-6.15-2.28 0-4.4 1.14-5.77 2.87M10.47 7.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM17.3 8.7a2 2 0 100-4 2 2 0 000 4zM21 12.7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM3.97 10.7a2 2 0 100-4 2 2 0 000 4z"
      ></path>
    </svg>
  );
};
