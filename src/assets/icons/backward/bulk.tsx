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
        d="M22 8.33995V15.66C22 17.16 20.37 18.1 19.07 17.35L15.9 15.5199L12.73 13.69L12.24 13.41V10.59L12.73 10.31L15.9 8.47997L19.07 6.64995C20.37 5.89995 22 6.83995 22 8.33995Z"
        fill="#292D32"
      />
      <path
        d="M12.2399 8.33995V15.66C12.2399 17.16 10.6099 18.1 9.31995 17.35L6.13995 15.5199L2.96994 13.69C1.67994 12.94 1.67994 11.06 2.96994 10.31L6.13995 8.47997L9.31995 6.64995C10.6099 5.89995 12.2399 6.83995 12.2399 8.33995Z"
        fill="#292D32"
      />
    </svg>
  );
};
