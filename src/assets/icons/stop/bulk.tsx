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
        d="M20.9 7.66L20.12 8.13L19.63 8.43L18.7 8.98L4.76 17.34L4.67 17.39L4.14 17.71L3.53 18.08C3.17 17.19 3 16.07 3 14.7V9.3C3 4.8 4.8 3 9.3 3H14.7C18.61 3 20.48 4.36 20.9 7.66Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M21 9.19995V14.7C21 19.2 19.2 21 14.7 21H9.29998C6.85998 21 5.20998 20.47 4.22998 19.26L4.52998 19.08L5.13998 18.71L5.66998 18.39L5.75998 18.34L19.7 9.97995L20.63 9.42995L21 9.19995Z"
        fill="#292D32"
      />
    </svg>
  );
};
