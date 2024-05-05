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
        d="M19.5 9.96997V19C19.5 21 19 22 16.5 22H7.5C5 22 4.5 21 4.5 19V9.96997C4.66 9.98997 4.83 9.99997 5 9.99997H19C19.17 9.99997 19.34 9.98997 19.5 9.96997Z"
        fill="#292D32"
      />
      <path
        d="M22 5V7C22 8.83 21.17 9.82 19.5 9.97C19.34 9.99 19.17 10 19 10H5C4.83 10 4.66 9.99 4.5 9.97C2.83 9.82 2 8.83 2 7V5C2 3 3 2 5 2H19C21 2 22 3 22 5Z"
        fill="#292D32"
      />
      <path
        d="M13.82 14.75H10.18C9.76999 14.75 9.42999 14.41 9.42999 14C9.42999 13.59 9.76999 13.25 10.18 13.25H13.82C14.23 13.25 14.57 13.59 14.57 14C14.57 14.41 14.23 14.75 13.82 14.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
