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
        d="M19.43 7.76c.76-.41.76-1.58 0-1.99l-6.51-3.51c-.58-.31-1.26-.31-1.84 0L4.57 5.77c-.76.41-.76 1.58 0 1.99l6.51 3.51c.58.31 1.26.31 1.84 0l2.34-1.26M2 11.12c0-.83.87-1.36 1.61-.99l6.05 3.03c.75.38 1.23 1.15 1.23 1.99v5.72c0 .83-.87 1.36-1.61.99l-6.05-3.03A2.238 2.238 0 012 16.84v-1.88M20.39 10.13l-6.05 3.03c-.75.38-1.23 1.15-1.23 1.99v5.72c0 .83.87 1.36 1.61.99l6.05-3.03c.75-.38 1.23-1.15 1.23-1.99v-5.72c0-.83-.87-1.36-1.61-.99z"
      ></path>
    </svg>
  );
};
