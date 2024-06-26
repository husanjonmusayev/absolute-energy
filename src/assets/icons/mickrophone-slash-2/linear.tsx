import { FC } from "react";



export const Linear: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M16 6.3V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5M9.04 14.19c.73.81 1.79 1.31 2.96 1.31 2.21 0 4-1.79 4-4V11"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.78 16.95a7.656 7.656 0 0012.87-5.6v-1.7M4.35 9.65v1.7c0 1.06.21 2.06.6 2.98M20.07 2.84L3.93 18.99M11 3v3M12 19v3"
      ></path>
    </svg>
  );
};
