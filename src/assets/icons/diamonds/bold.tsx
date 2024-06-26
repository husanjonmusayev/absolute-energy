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
        d="M21.77 9.80002L20.97 8.00002L19.21 4.04002C18.74 3.00002 18 2.15002 16.3 2.15002H7.69995C5.99995 2.15002 5.25995 3.00002 4.78995 4.04002L3.02995 8.00002L2.22995 9.80002C1.76995 10.85 2.01995 12.39 2.78995 13.24L9.63995 20.78C10.94 22.21 13.06 22.21 14.36 20.78L21.21 13.24C21.98 12.39 22.23 10.85 21.77 9.80002Z"
        fill="#292D32"
      />
    </svg>
  );
};
