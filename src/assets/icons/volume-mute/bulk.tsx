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
        d="M19.25 7.41V16.59C19.25 18.31 18.63 19.6 17.52 20.22C17.07 20.47 16.57 20.59 16.05 20.59C15.25 20.59 14.39 20.32 13.51 19.77L10.59 17.94C10.39 17.82 10.16 17.75 9.93 17.75H9V6.25H9.93C10.16 6.25 10.39 6.18 10.59 6.06L13.51 4.23C14.97 3.32 16.4 3.16 17.52 3.78C18.63 4.4 19.25 5.69 19.25 7.41Z"
        fill="#292D32"
      />
      <path
        d="M9 6.25V17.75H8.5C6.08 17.75 4.75 16.42 4.75 14V10C4.75 7.58 6.08 6.25 8.5 6.25H9Z"
        fill="#292D32"
      />
    </svg>
  );
};
