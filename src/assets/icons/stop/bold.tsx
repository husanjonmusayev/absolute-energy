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
        d="M20.36 7.78L4.54 17.28C3.93 17.65 3.11 17.28 3.03 16.57C3.01 16.38 3 16.19 3 16V8C3 5 5 3 8 3H16C19 3 20.23 4.54 20.81 6.65C20.93 7.09 20.74 7.55 20.36 7.78Z"
        fill="#292D32"
      />
      <path
        d="M20.9999 11.09V16C20.9999 19 18.9999 21 15.9999 21H7.99991C7.07991 21 6.20991 20.75 5.46991 20.31C4.82991 19.94 4.86991 19 5.49991 18.62L19.4799 10.23C20.1499 9.83001 20.9999 10.31 20.9999 11.09Z"
        fill="#292D32"
      />
    </svg>
  );
};
