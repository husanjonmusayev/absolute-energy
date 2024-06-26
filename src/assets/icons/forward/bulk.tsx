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
        d="M2 8.33995V15.66C2 17.16 3.62999 18.1 4.92999 17.35L8.10001 15.5199L11.27 13.69L11.76 13.41V10.59L11.27 10.31L8.10001 8.47997L4.92999 6.64995C3.62999 5.89995 2 6.83995 2 8.33995Z"
        fill="#292D32"
      />
      <path
        d="M11.76 8.33995V15.66C11.76 17.16 13.39 18.1 14.68 17.35L17.86 15.5199L21.03 13.69C22.32 12.94 22.32 11.06 21.03 10.31L17.86 8.47997L14.68 6.64995C13.39 5.89995 11.76 6.83995 11.76 8.33995Z"
        fill="#292D32"
      />
    </svg>
  );
};
