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
        d="M22 20.07V12.18C22 6.57999 17.5 2 12 2C6.5 2 2 6.57999 2 12.18V20.07C2 21.33 2.74998 21.67 3.66998 20.83L4.66998 19.92C5.03998 19.58 5.64001 19.58 6.01001 19.92L8.01001 21.75C8.38001 22.09 8.97998 22.09 9.34998 21.75L11.35 19.92C11.72 19.58 12.32 19.58 12.69 19.92L14.69 21.75C15.06 22.09 15.66 22.09 16.03 21.75L18.03 19.92C18.4 19.58 19 19.58 19.37 19.92L20.37 20.83C21.25 21.67 22 21.33 22 20.07Z"
        fill="#292D32"
      />
      <path
        d="M12 16.07C10.43 16.07 8.86001 15.58 7.55001 14.6C7.22001 14.35 7.15004 13.88 7.40004 13.55C7.65004 13.22 8.12003 13.15 8.45003 13.4C10.54 14.97 13.46 14.97 15.55 13.4C15.88 13.15 16.35 13.22 16.6 13.55C16.85 13.88 16.78 14.35 16.45 14.6C15.14 15.58 13.57 16.07 12 16.07Z"
        fill="#292D32"
      />
      <path
        d="M12 11.38C13.3144 11.38 14.38 10.3144 14.38 9C14.38 7.68556 13.3144 6.62 12 6.62C10.6856 6.62 9.62 7.68556 9.62 9C9.62 10.3144 10.6856 11.38 12 11.38Z"
        fill="#292D32"
      />
    </svg>
  );
};
