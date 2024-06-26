import { FC } from "react";



export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M16 6.3V6c0-2.21-1.79-4-4-4S8 3.79 8 6v5M9.04 14.19c.73.81 1.79 1.31 2.96 1.31 2.21 0 4-1.79 4-4V11M18.72 15.02c.6-1.09.93-2.34.93-3.67v-1.7M6.78 16.95A7.648 7.648 0 0012 19c1.18 0 2.31-.27 3.31-.75M4.35 9.65v1.7c0 1.06.21 2.06.6 2.98M20.07 2.84L3.93 18.99M11 3v3M12 19v3"
      ></path>
    </svg>
  );
};
