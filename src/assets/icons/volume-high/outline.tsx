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
        d="M12.55 20.59C11.76 20.59 10.89 20.31 10.02 19.76L7.1 17.93C6.9 17.81 6.67 17.74 6.44 17.74H5C2.58 17.74 1.25 16.41 1.25 13.99V9.99001C1.25 7.57001 2.58 6.24001 5 6.24001H6.43C6.66 6.24001 6.89 6.17001 7.09 6.05001L10.01 4.22001C11.47 3.31001 12.89 3.14001 14.01 3.76001C15.13 4.38001 15.74 5.67001 15.74 7.40001V16.57C15.74 18.29 15.12 19.59 14.01 20.21C13.57 20.47 13.07 20.59 12.55 20.59ZM5 7.75001C3.42 7.75001 2.75 8.42001 2.75 10V14C2.75 15.58 3.42 16.25 5 16.25H6.43C6.95 16.25 7.45 16.39 7.89 16.67L10.81 18.5C11.77 19.1 12.68 19.26 13.29 18.92C13.9 18.58 14.25 17.73 14.25 16.6V7.41001C14.25 6.27001 13.9 5.42001 13.29 5.09001C12.68 4.75001 11.77 4.90001 10.81 5.51001L7.88 7.33001C7.45 7.61001 6.94 7.75001 6.43 7.75001H5Z"
        fill="#292D32"
      />
      <path
        d="M17.9998 16.75C17.8398 16.75 17.6898 16.7 17.5498 16.6C17.2198 16.35 17.1498 15.88 17.3998 15.55C18.9698 13.46 18.9698 10.54 17.3998 8.45C17.1498 8.12 17.2198 7.65 17.5498 7.4C17.8798 7.15 18.3498 7.22 18.5998 7.55C20.5598 10.17 20.5598 13.83 18.5998 16.45C18.4498 16.65 18.2298 16.75 17.9998 16.75Z"
        fill="#292D32"
      />
      <path
        d="M19.8299 19.25C19.6699 19.25 19.5199 19.2 19.3799 19.1C19.0499 18.85 18.9799 18.38 19.2299 18.05C21.8999 14.49 21.8999 9.51 19.2299 5.95C18.9799 5.62 19.0499 5.15 19.3799 4.9C19.7099 4.65 20.1799 4.72 20.4299 5.05C23.4999 9.14 23.4999 14.86 20.4299 18.95C20.2899 19.15 20.0599 19.25 19.8299 19.25Z"
        fill="#292D32"
      />
    </svg>
  );
};
