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
        d="M6.67 14H4C2.9 14 2 14.9 2 16V21C2 21.55 2.45 22 3 22H6.67C7.22 22 7.67 21.55 7.67 21V15C7.67 14.45 7.22 14 6.67 14Z"
        fill="#292D32"
      />
      <path
        d="M13.33 10H10.66C9.55997 10 8.65997 10.9 8.65997 12V21C8.65997 21.55 9.10997 22 9.65997 22H14.33C14.88 22 15.33 21.55 15.33 21V12C15.33 10.9 14.44 10 13.33 10Z"
        fill="#292D32"
      />
      <path
        d="M20 17H17.33C16.78 17 16.33 17.45 16.33 18V21C16.33 21.55 16.78 22 17.33 22H21C21.55 22 22 21.55 22 21V19C22 17.9 21.1 17 20 17Z"
        fill="#292D32"
      />
      <path
        d="M15.01 4.84998C15.32 4.53998 15.44 4.16998 15.34 3.84998C15.24 3.52998 14.93 3.29998 14.49 3.22998L13.53 3.06998C13.49 3.06998 13.4 2.99998 13.38 2.95998L12.85 1.89998C12.45 1.08998 11.54 1.08998 11.14 1.89998L10.61 2.95998C10.6 2.99998 10.51 3.06998 10.47 3.06998L9.51 3.22998C9.07 3.29998 8.77 3.52998 8.66 3.84998C8.56 4.16998 8.68 4.53998 8.99 4.84998L9.73 5.59998C9.77 5.62998 9.8 5.74998 9.79 5.78998L9.58 6.70998C9.42 7.39998 9.68 7.70998 9.85 7.82998C10.02 7.94998 10.39 8.10998 11 7.74998L11.9 7.21998C11.94 7.18998 12.07 7.18998 12.11 7.21998L13 7.74998C13.28 7.91998 13.51 7.96998 13.69 7.96998C13.9 7.96998 14.05 7.88998 14.14 7.82998C14.31 7.70998 14.57 7.39998 14.41 6.70998L14.2 5.78998C14.19 5.73998 14.22 5.62998 14.26 5.59998L15.01 4.84998Z"
        fill="#292D32"
      />
    </svg>
  );
};
