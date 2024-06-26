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
        d="M17.91 10.72H14.82V3.52C14.82 1.84 13.91 1.5 12.8 2.76L12 3.67L5.23001 11.37C4.30001 12.42 4.69001 13.28 6.09001 13.28H9.18001V20.48C9.18001 22.16 10.09 22.5 11.2 21.24L12 20.33L18.77 12.63C19.7 11.58 19.31 10.72 17.91 10.72Z"
        fill="#292D32"
      />
    </svg>
  );
};
