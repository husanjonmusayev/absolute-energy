import { FC } from "react";



export const TwoTOne: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M19.14 19.5a9.964 9.964 0 002.86-7c0-5.52-4.48-10-10-10S2 6.98 2 12.5c0 2.72 1.08 5.18 2.84 6.99"
        opacity="0.4"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M12 21.5a3.38 3.38 0 100-6.76 3.38 3.38 0 000 6.76zM15.25 12H16c.82 0 1.5-.67 1.5-1.5 0-.82-.68-1.5-1.5-1.5s-1.5.67-1.5 1.5v.75c0 .41.34.75.75.75z"
      ></path>
    </svg>
  );
};
