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
        d="M22 8.34001V15.66C22 17.16 20.37 18.1 19.07 17.35L15.9 15.52L12.73 13.69L12.24 13.41V10.59L12.73 10.31L15.9 8.48001L19.07 6.65001C20.37 5.90001 22 6.84001 22 8.34001Z"
        fill="#292D32"
      />
      <path
        d="M12.2399 8.34001V15.66C12.2399 17.16 10.6099 18.1 9.31994 17.35L6.13994 15.52L2.96994 13.69C1.67994 12.94 1.67994 11.06 2.96994 10.31L6.13994 8.48001L9.31994 6.65001C10.6099 5.90001 12.2399 6.84001 12.2399 8.34001Z"
        fill="#292D32"
      />
    </svg>
  );
};
