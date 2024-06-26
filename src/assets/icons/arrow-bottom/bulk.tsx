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
        d="M9.33017 6H14.6702C17.9902 6 19.3402 8.35 17.6902 11.22L16.9502 12.5C16.7702 12.81 16.4402 13 16.0802 13H7.92017C7.56017 13 7.23017 12.81 7.05017 12.5L6.31017 11.22C4.66017 8.35 6.01017 6 9.33017 6Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M8.79006 14H15.2201C15.6101 14 15.8501 14.42 15.6501 14.75L15.0101 15.85C13.3601 18.72 10.6401 18.72 8.99006 15.85L8.35006 14.75C8.16006 14.42 8.40006 14 8.79006 14Z"
        fill="#292D32"
      />
    </svg>
  );
};
