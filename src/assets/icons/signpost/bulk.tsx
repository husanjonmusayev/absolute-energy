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
        d="M18.9699 3.75V7.25C18.9699 8.22 18.1899 9 17.2199 9H8.96C8.56999 9 8.17997 8.85999 7.86997 8.62L5.67997 6.87C4.80997 6.17 4.80997 4.83 5.67997 4.13L7.86997 2.38C8.17997 2.14 8.56999 2 8.96 2H17.2199C18.1899 2 18.9699 2.78 18.9699 3.75Z"
        fill="#292D32"
      />
      <path
        d="M18.3401 16.87L16.16 18.62C15.85 18.86 15.4601 19 15.0601 19H6.80005C5.83005 19 5.05005 18.22 5.05005 17.25V13.75C5.05005 12.78 5.83005 12 6.80005 12H15.0601C15.4601 12 15.85 12.14 16.16 12.38L18.3401 14.13C19.2201 14.83 19.2201 16.17 18.3401 16.87Z"
        fill="#292D32"
      />
      <path opacity="0.4" d="M12.75 9H11.25V12H12.75V9Z" fill="#292D32" />
      <path
        opacity="0.4"
        d="M15.75 22C15.75 22.41 15.41 22.75 15 22.75H9C8.59 22.75 8.25 22.41 8.25 22C8.25 21.59 8.59 21.25 9 21.25H11.25V19H12.75V21.25H15C15.41 21.25 15.75 21.59 15.75 22Z"
        fill="#292D32"
      />
    </svg>
  );
};
