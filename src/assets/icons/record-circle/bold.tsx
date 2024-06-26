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
        d="M11.9702 2C6.45021 2 1.97021 6.48 1.97021 12C1.97021 17.52 6.45021 22 11.9702 22C17.4902 22 21.9702 17.52 21.9702 12C21.9702 6.48 17.5002 2 11.9702 2ZM12.0002 16.23C9.66021 16.23 7.77022 14.34 7.77022 12C7.77022 9.66 9.66021 7.77 12.0002 7.77C14.3402 7.77 16.2302 9.66 16.2302 12C16.2302 14.34 14.3402 16.23 12.0002 16.23Z"
        fill="#292D32"
      />
    </svg>
  );
};
