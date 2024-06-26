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
        d="M11.97 2C6.44997 2 1.96997 6.48 1.96997 12C1.96997 17.52 6.44997 22 11.97 22C17.49 22 21.97 17.52 21.97 12C21.97 6.48 17.5 2 11.97 2ZM16.23 13.23C16.23 14.89 14.89 16.23 13.23 16.23H10.77C9.10997 16.23 7.76997 14.89 7.76997 13.23V10.77C7.76997 9.11 9.10997 7.77 10.77 7.77H13.23C14.89 7.77 16.23 9.11 16.23 10.77V13.23Z"
        fill="#292D32"
      />
    </svg>
  );
};
