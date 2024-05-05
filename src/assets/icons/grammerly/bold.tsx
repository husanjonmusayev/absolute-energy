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
        d="M19.11 4.96C15.2 1.05 8.84997 1.05 4.93997 4.96C0.959966 8.94 1.02997 15.43 5.13997 19.33C8.93997 22.92 15.1 22.92 18.9 19.33C23.02 15.43 23.09 8.94 19.11 4.96ZM16.38 16.65C15.18 17.79 13.6 18.36 12.02 18.36C10.44 18.36 8.85997 17.79 7.65997 16.65C7.35997 16.36 7.34997 15.89 7.62997 15.59C7.91997 15.29 8.38997 15.28 8.68997 15.56C10.52 17.29 13.51 17.3 15.35 15.56C15.65 15.28 16.13 15.29 16.41 15.59C16.7 15.89 16.68 16.36 16.38 16.65Z"
        fill="#292D32"
      />
    </svg>
  );
};