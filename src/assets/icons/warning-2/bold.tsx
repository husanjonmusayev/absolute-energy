import { FC } from "react";



export const Bold: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M19.51 5.85L13.57 2.42C12.6 1.86 11.4 1.86 10.42 2.42L4.49004 5.85C3.52004 6.41 2.92004 7.45 2.92004 8.58V15.42C2.92004 16.54 3.52004 17.58 4.49004 18.15L10.43 21.58C11.4 22.14 12.6 22.14 13.58 21.58L19.52 18.15C20.49 17.59 21.09 16.55 21.09 15.42V8.58C21.08 7.45 20.48 6.42 19.51 5.85ZM11.25 7.75C11.25 7.34 11.59 7 12 7C12.41 7 12.75 7.34 12.75 7.75V13C12.75 13.41 12.41 13.75 12 13.75C11.59 13.75 11.25 13.41 11.25 13V7.75ZM12.92 16.63C12.87 16.75 12.8 16.86 12.71 16.96C12.52 17.15 12.27 17.25 12 17.25C11.87 17.25 11.74 17.22 11.62 17.17C11.49 17.12 11.39 17.05 11.29 16.96C11.2 16.86 11.13 16.75 11.07 16.63C11.02 16.51 11 16.38 11 16.25C11 15.99 11.1 15.73 11.29 15.54C11.39 15.45 11.49 15.38 11.62 15.33C11.99 15.17 12.43 15.26 12.71 15.54C12.8 15.64 12.87 15.74 12.92 15.87C12.97 15.99 13 16.12 13 16.25C13 16.38 12.97 16.51 12.92 16.63Z"
        fill="#292D32"
      />
    </svg>
  );
};
