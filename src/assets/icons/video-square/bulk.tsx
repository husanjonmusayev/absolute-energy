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
        d="M9.1001 12V10.52C9.1001 8.60999 10.4501 7.83999 12.1001 8.78999L13.3801 9.52999L14.6601 10.27C16.3101 11.22 16.3101 12.78 14.6601 13.73L13.3801 14.47L12.1001 15.21C10.4501 16.16 9.1001 15.38 9.1001 13.48V12Z"
        fill="#292D32"
      />
    </svg>
  );
};
