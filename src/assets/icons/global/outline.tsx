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
        d="M12 22.75C6.07 22.75 1.25 17.93 1.25 12C1.25 6.07 6.07 1.25 12 1.25C17.93 1.25 22.75 6.07 22.75 12C22.75 17.93 17.93 22.75 12 22.75ZM12 2.75C6.9 2.75 2.75 6.9 2.75 12C2.75 17.1 6.9 21.25 12 21.25C17.1 21.25 21.25 17.1 21.25 12C21.25 6.9 17.1 2.75 12 2.75Z"
        fill="#292D32"
      />
      <path
        d="M9.00023 21.75H8.00023C7.59023 21.75 7.25023 21.41 7.25023 21C7.25023 20.59 7.57023 20.26 7.98023 20.25C6.41023 14.89 6.41023 9.11 7.98023 3.75C7.57023 3.74 7.25023 3.41 7.25023 3C7.25023 2.59 7.59023 2.25 8.00023 2.25H9.00023C9.24023 2.25 9.47023 2.37 9.61023 2.56C9.75023 2.76 9.79023 3.01 9.71023 3.24C7.83023 8.89 7.83023 15.11 9.71023 20.77C9.79023 21 9.75023 21.25 9.61023 21.45C9.47023 21.63 9.24023 21.75 9.00023 21.75Z"
        fill="#292D32"
      />
      <path
        d="M15.0004 21.75C14.9204 21.75 14.8404 21.74 14.7604 21.71C14.3704 21.58 14.1504 21.15 14.2904 20.76C16.1704 15.11 16.1704 8.89 14.2904 3.23C14.1604 2.84 14.3704 2.41 14.7604 2.28C15.1604 2.15 15.5804 2.36 15.7104 2.75C17.7004 8.71 17.7004 15.27 15.7104 21.22C15.6104 21.55 15.3104 21.75 15.0004 21.75Z"
        fill="#292D32"
      />
      <path
        d="M12 17.2C9.21 17.2 6.43 16.81 3.75 16.02C3.74 16.42 3.41 16.75 3 16.75C2.59 16.75 2.25 16.41 2.25 16V15C2.25 14.76 2.37 14.53 2.56 14.39C2.76 14.25 3.01 14.21 3.24 14.29C8.89 16.17 15.12 16.17 20.77 14.29C21 14.21 21.25 14.25 21.45 14.39C21.65 14.53 21.76 14.76 21.76 15V16C21.76 16.41 21.42 16.75 21.01 16.75C20.6 16.75 20.27 16.43 20.26 16.02C17.57 16.81 14.79 17.2 12 17.2Z"
        fill="#292D32"
      />
      <path
        d="M20.9998 9.74999C20.9198 9.74999 20.8398 9.73999 20.7598 9.70999C15.1098 7.82999 8.87978 7.82999 3.22978 9.70999C2.82978 9.83999 2.40978 9.62999 2.27978 9.23999C2.15978 8.83999 2.36978 8.41999 2.75978 8.28999C8.71978 6.29999 15.2798 6.29999 21.2298 8.28999C21.6198 8.41999 21.8398 8.84999 21.6998 9.23999C21.6098 9.54999 21.3098 9.74999 20.9998 9.74999Z"
        fill="#292D32"
      />
    </svg>
  );
};
