import { FC } from "react";



export const Linear: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.35 21h-3.7C3.9 21 2 19.1 2 14.35v-5.7C2 3.9 3.9 2 8.65 2h5.7C19.1 2 21 3.9 21 8.65v3.7"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M6.72 14.42a1.45 1.45 0 100-2.9 1.45 1.45 0 000 2.9z"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M13.48 12V6.34c0-1.21-.76-1.37-1.52-1.16l-2.89.79c-.52.14-.89.56-.89 1.16v5.84"
      ></path>
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M12.03 13.45a1.45 1.45 0 100-2.9 1.45 1.45 0 000 2.9zM8.17 8.83l5.31-1.45M17.94 21.28a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4zM21.74 21.88l-1-1"
      ></path>
    </svg>
  );
};
