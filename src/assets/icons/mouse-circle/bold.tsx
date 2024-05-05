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
        d="M20.96 17.84L19.33 18.39C18.88 18.54 18.52 18.89 18.37 19.35L17.82 20.98C17.35 22.39 15.37 22.36 14.93 20.95L13.08 15C12.72 13.82 13.81 12.72 14.98 13.09L20.94 14.94C22.34 15.38 22.36 17.37 20.96 17.84Z"
        fill="#292D32"
      />
      <path
        d="M21 11.5C21 11.93 20.97 12.36 20.92 12.78C20.88 13.08 20.57 13.26 20.28 13.17L15.43 11.66C14.35 11.33 13.2 11.61 12.4 12.4C11.6 13.2 11.31 14.37 11.65 15.45L13.15 20.28C13.24 20.57 13.05 20.88 12.75 20.92C12.33 20.97 11.92 21 11.5 21C6.16003 21 1.86003 16.61 2.00003 11.23C2.14003 6.27003 6.27003 2.14003 11.23 2.00003C16.61 1.86003 21 6.16003 21 11.5Z"
        fill="#292D32"
      />
    </svg>
  );
};