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
        d="M20.24 7.21999V16.79C20.24 18.75 18.11 19.98 16.41 19L12.26 16.61L8.10996 14.21C6.40996 13.23 6.40996 10.78 8.10996 9.79998L12.26 7.39998L16.41 5.01C18.11 4.03 20.24 5.24999 20.24 7.21999Z"
        fill="#292D32"
      />
      <path
        d="M3.76001 18.93C3.35001 18.93 3.01001 18.59 3.01001 18.18V5.82001C3.01001 5.41001 3.35001 5.07001 3.76001 5.07001C4.17001 5.07001 4.51001 5.41001 4.51001 5.82001V18.18C4.51001 18.59 4.17001 18.93 3.76001 18.93Z"
        fill="#292D32"
      />
    </svg>
  );
};
