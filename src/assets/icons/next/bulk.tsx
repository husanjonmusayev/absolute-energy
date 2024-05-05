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
        d="M3.76001 7.21999V16.79C3.76001 18.75 5.89 19.98 7.59 19L11.74 16.61L15.89 14.21C17.59 13.23 17.59 10.78 15.89 9.79998L11.74 7.39998L7.59 5.01C5.89 4.03 3.76001 5.24999 3.76001 7.21999Z"
        fill="#292D32"
      />
      <path
        d="M20.2402 18.93C19.8302 18.93 19.4902 18.59 19.4902 18.18V5.82001C19.4902 5.41001 19.8302 5.07001 20.2402 5.07001C20.6502 5.07001 20.9902 5.41001 20.9902 5.82001V18.18C20.9902 18.59 20.6602 18.93 20.2402 18.93Z"
        fill="#292D32"
      />
    </svg>
  );
};
