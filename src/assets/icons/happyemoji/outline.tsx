import { FC } from "react";



export const Outline: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.97 22.75C6.04997 22.75 1.21997 17.93 1.21997 12C1.21997 6.07 6.04997 1.25 11.97 1.25C17.89 1.25 22.72 6.07 22.72 12C22.72 17.93 17.9 22.75 11.97 22.75ZM11.97 2.75C6.86997 2.75 2.71997 6.9 2.71997 12C2.71997 17.1 6.86997 21.25 11.97 21.25C17.07 21.25 21.22 17.1 21.22 12C21.22 6.9 17.07 2.75 11.97 2.75Z"
        fill="#292D32"
      />
      <path
        d="M12 19.25C9.85 19.25 7.83 18.2 6.6 16.43C6.36 16.09 6.45 15.62 6.79 15.39C7.13 15.15 7.6 15.24 7.83 15.58C8.78 16.94 10.34 17.76 12 17.76C13.66 17.76 15.22 16.95 16.17 15.58C16.41 15.24 16.87 15.16 17.21 15.39C17.55 15.63 17.63 16.09 17.4 16.43C16.17 18.2 14.15 19.25 12 19.25Z"
        fill="#292D32"
      />
    </svg>
  );
};
