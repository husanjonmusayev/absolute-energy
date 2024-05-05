import { FC } from "react";



export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M17.13 7.98002C20.96 10.19 20.96 13.81 17.13 16.02L14.04 17.8L10.95 19.58C7.13 21.79 4 19.98 4 15.56V12V8.44002C4 4.02002 7.13 2.21002 10.96 4.42002L13.21 5.72002"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
