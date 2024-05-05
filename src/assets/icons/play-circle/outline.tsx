import { FC } from "react";



export const Outline: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M11.9702 22.75C6.05021 22.75 1.22021 17.93 1.22021 12C1.22021 6.07 6.05021 1.25 11.9702 1.25C17.8902 1.25 22.7202 6.07 22.7202 12C22.7202 17.93 17.9002 22.75 11.9702 22.75ZM11.9702 2.75C6.87021 2.75 2.72021 6.9 2.72021 12C2.72021 17.1 6.87021 21.25 11.9702 21.25C17.0702 21.25 21.2202 17.1 21.2202 12C21.2202 6.9 17.0702 2.75 11.9702 2.75Z"
        fill="#292D32"
      />
      <path
        d="M10.5602 16.99C10.1202 16.99 9.70023 16.88 9.33023 16.67C8.47023 16.17 7.99023 15.19 7.99023 13.91V10.56C7.99023 9.27999 8.46023 8.29999 9.32023 7.79999C10.1802 7.29999 11.2702 7.37999 12.3802 8.01999L15.2802 9.68999C16.3902 10.33 17.0002 11.23 17.0002 12.23C17.0002 13.22 16.3902 14.13 15.2802 14.77L12.3802 16.44C11.7602 16.81 11.1302 16.99 10.5602 16.99ZM10.5602 8.96999C10.3802 8.96999 10.2102 9.00999 10.0802 9.08999C9.70023 9.30999 9.49023 9.83999 9.49023 10.56V13.91C9.49023 14.62 9.70023 15.16 10.0802 15.37C10.4502 15.59 11.0202 15.5 11.6402 15.15L14.5402 13.48C15.1602 13.12 15.5102 12.67 15.5102 12.24C15.5102 11.81 15.1502 11.36 14.5402 11L11.6402 9.32999C11.2402 9.08999 10.8702 8.96999 10.5602 8.96999Z"
        fill="#292D32"
      />
    </svg>
  );
};
