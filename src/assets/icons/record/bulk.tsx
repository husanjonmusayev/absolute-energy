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
        d="M20.12 8.13L18.7 8.98L4.76 17.34C3.66 15.85 3 14 3 12C3 7.03 7.03 3 12 3C15.58 3 18.68 5.1 20.12 8.13Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M20.9999 12.0001C20.9999 16.9701 16.9699 21.0001 11.9999 21.0001C9.52992 21.0001 7.29992 20.0101 5.66992 18.3901L5.75992 18.3401L19.6999 9.98005L20.6299 9.43005C20.8699 10.2501 20.9999 11.1101 20.9999 12.0001Z"
        fill="#292D32"
      />
    </svg>
  );
};
