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
        d="M16.42 7.95C18.86 10.39 18.86 14.35 16.42 16.79C13.98 19.23 10.02 19.23 7.58 16.79C5.14 14.35 5.14 10.39 7.58 7.95C10.02 5.51 13.98 5.51 16.42 7.95Z"
        fill="#292D32"
      />
      <path
        d="M8.25003 22.39C8.16003 22.39 8.06003 22.37 7.97003 22.34C5.72003 21.44 3.90003 19.85 2.68003 17.75C1.50003 15.7 1.03003 13.38 1.34003 11.02C1.39003 10.61 1.78003 10.32 2.18003 10.37C2.59003 10.42 2.88003 10.8 2.83003 11.21C2.57003 13.24 2.97003 15.24 3.98003 17C5.02003 18.8 6.59003 20.17 8.52003 20.94C8.90003 21.1 9.09003 21.53 8.94003 21.92C8.83003 22.21 8.54003 22.39 8.25003 22.39Z"
        fill="#292D32"
      />
      <path
        d="M5.8501 5.22999C5.6301 5.22999 5.41011 5.12999 5.26011 4.93999C5.00011 4.61999 5.0601 4.14999 5.3901 3.88999C7.2901 2.39999 9.5801 1.60999 12.0001 1.60999C14.3601 1.60999 16.6101 2.36999 18.5001 3.80999C18.8301 4.05999 18.8901 4.52999 18.6401 4.85999C18.3901 5.18999 17.9201 5.24999 17.5901 4.99999C15.9601 3.75999 14.0301 3.10999 12.0001 3.10999C9.9201 3.10999 7.9501 3.78999 6.3101 5.06999C6.1701 5.17999 6.0101 5.22999 5.8501 5.22999Z"
        fill="#292D32"
      />
      <path
        d="M15.75 22.39C15.45 22.39 15.17 22.21 15.05 21.92C14.9 21.54 15.08 21.1 15.47 20.94C17.4 20.16 18.97 18.8 20.01 17C21.03 15.24 21.43 13.24 21.16 11.22C21.11 10.81 21.4 10.43 21.81 10.38C22.21 10.33 22.6 10.62 22.65 11.03C22.95 13.38 22.49 15.71 21.31 17.76C20.1 19.86 18.27 21.44 16.02 22.35C15.94 22.37 15.85 22.39 15.75 22.39Z"
        fill="#292D32"
      />
    </svg>
  );
};