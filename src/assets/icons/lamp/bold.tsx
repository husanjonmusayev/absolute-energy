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
        d="M12.5 5.48003C12.58 5.48003 12.66 5.48003 12.75 5.49003V2.53003C12.75 2.12003 12.41 1.78003 12 1.78003C11.59 1.78003 11.25 2.12003 11.25 2.53003V5.49003C11.33 5.48003 11.41 5.48003 11.5 5.48003C6.88997 5.71003 3.21997 9.51003 3.21997 14.18V16.12C3.21997 17.22 4.11997 18.12 5.21997 18.12H18.78C19.88 18.12 20.78 17.22 20.78 16.12V14.18C20.78 9.51003 17.11 5.71003 12.5 5.48003Z"
        fill="#292D32"
      />
      <path
        d="M14.7299 19.11C15.0599 19.11 15.2999 19.42 15.2199 19.74C14.8399 21.17 13.5399 22.22 11.9999 22.22C10.4599 22.22 9.15989 21.17 8.77989 19.74C8.69989 19.42 8.93989 19.11 9.26989 19.11H14.7299Z"
        fill="#292D32"
      />
    </svg>
  );
};
