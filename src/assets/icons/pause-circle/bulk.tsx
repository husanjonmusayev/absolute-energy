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
        d="M11.97 22C17.4928 22 21.97 17.5228 21.97 12C21.97 6.47715 17.4928 2 11.97 2C6.44712 2 1.96997 6.47715 1.96997 12C1.96997 17.5228 6.44712 22 11.97 22Z"
        fill="#292D32"
      />
      <path
        d="M10.72 15.03V8.96999C10.72 8.48999 10.52 8.29999 10.01 8.29999H8.71C8.2 8.29999 8 8.48999 8 8.96999V15.03C8 15.51 8.2 15.7 8.71 15.7H10C10.52 15.7 10.72 15.51 10.72 15.03Z"
        fill="#292D32"
      />
      <path
        d="M16 15.03V8.96999C16 8.48999 15.8 8.29999 15.29 8.29999H14C13.49 8.29999 13.29 8.48999 13.29 8.96999V15.03C13.29 15.51 13.49 15.7 14 15.7H15.29C15.8 15.7 16 15.51 16 15.03Z"
        fill="#292D32"
      />
    </svg>
  );
};
