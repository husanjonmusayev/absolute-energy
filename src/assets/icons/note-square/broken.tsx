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
        d="M2 13.01V15c0 5 2 7 7 7h2M22 10V9c0-5-2-7-7-7H9C4 2 2 4 2 9M15.51 22a2 2 0 100-4 2 2 0 000 4zM17.51 20v-6.99M18.82 12.07l2.21.74c.53.18.97.78.97 1.35v.59c0 .76-.59 1.19-1.31.95l-2.21-.74c-.53-.18-.97-.78-.97-1.35v-.59c0-.77.59-1.19 1.31-.95z"
      ></path>
    </svg>
  );
};
