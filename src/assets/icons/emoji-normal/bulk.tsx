import { FC } from "react";



export const Bulk: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        opacity="0.4"
        d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
        fill="#292D32"
      />
      <path
        d="M8.82 9.75C7.97 9.75 7.12 9.43 6.47 8.78C6.18 8.49 6.18 8.01 6.47 7.72C6.76 7.43 7.24 7.43 7.53 7.72C8.24 8.43 9.4 8.43 10.11 7.72C10.4 7.43 10.88 7.43 11.17 7.72C11.46 8.01 11.46 8.49 11.17 8.78C10.52 9.42 9.67 9.75 8.82 9.75Z"
        fill="#292D32"
      />
      <path
        d="M15.18 9.75C14.33 9.75 13.48 9.43 12.83 8.78C12.54 8.49 12.54 8.01 12.83 7.72C13.12 7.43 13.6 7.43 13.89 7.72C14.6 8.43 15.76 8.43 16.47 7.72C16.76 7.43 17.24 7.43 17.53 7.72C17.82 8.01 17.82 8.49 17.53 8.78C16.88 9.42 16.03 9.75 15.18 9.75Z"
        fill="#292D32"
      />
      <path
        d="M15.6 12.62H8.4C7.7 12.62 7.13 13.19 7.13 13.9C7.13 16.59 9.32 18.78 12.01 18.78C14.7 18.78 16.89 16.59 16.89 13.9C16.88 13.2 16.3 12.62 15.6 12.62Z"
        fill="#292D32"
      />
    </svg>
  );
};
