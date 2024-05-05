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
        d="M16.1701 10.06H7.83007C6.65007 10.06 6.24007 9.27001 6.93007 8.31001L11.1001 2.47001C11.5901 1.77001 12.4101 1.77001 12.9001 2.47001L17.0701 8.31001C17.7601 9.27001 17.3501 10.06 16.1701 10.06Z"
        fill="#292D32"
      />
      <path
        d="M17.5901 18H6.41009C4.83009 18 4.29009 16.95 5.22009 15.67L9.21009 10.06H14.7901L18.7801 15.67C19.7101 16.95 19.1701 18 17.5901 18Z"
        fill="#292D32"
      />
      <path
        d="M12.75 18V22C12.75 22.41 12.41 22.75 12 22.75C11.59 22.75 11.25 22.41 11.25 22V18H12.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
