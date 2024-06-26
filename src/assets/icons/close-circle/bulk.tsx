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
        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
        fill="#292D32"
      />
      <path
        d="M13.06 12L15.36 9.69998C15.65 9.40998 15.65 8.92999 15.36 8.63999C15.07 8.34999 14.59 8.34999 14.3 8.63999L12 10.94L9.69998 8.63999C9.40998 8.34999 8.92999 8.34999 8.63999 8.63999C8.34999 8.92999 8.34999 9.40998 8.63999 9.69998L10.94 12L8.63999 14.3C8.34999 14.59 8.34999 15.07 8.63999 15.36C8.78999 15.51 8.97999 15.58 9.16999 15.58C9.35999 15.58 9.54998 15.51 9.69998 15.36L12 13.06L14.3 15.36C14.45 15.51 14.64 15.58 14.83 15.58C15.02 15.58 15.21 15.51 15.36 15.36C15.65 15.07 15.65 14.59 15.36 14.3L13.06 12Z"
        fill="#292D32"
      />
    </svg>
  );
};
