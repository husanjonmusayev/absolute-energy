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
        d="M17.52 3.78C16.4 3.16 14.97 3.32 13.51 4.23L10.59 6.06C10.39 6.18 10.16 6.25 9.93 6.25H9H8.5C6.08 6.25 4.75 7.58 4.75 10V14C4.75 16.42 6.08 17.75 8.5 17.75H9H9.93C10.16 17.75 10.39 17.82 10.59 17.94L13.51 19.77C14.39 20.32 15.25 20.59 16.05 20.59C16.57 20.59 17.07 20.47 17.52 20.22C18.63 19.6 19.25 18.31 19.25 16.59V7.41C19.25 5.69 18.63 4.4 17.52 3.78Z"
        fill="#292D32"
      />
    </svg>
  );
};
