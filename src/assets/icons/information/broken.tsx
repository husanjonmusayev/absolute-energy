import { FC } from "react";



export const Broken: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M12 8.13V12.96"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M4.24 6.20002C4.24 5.14002 5.11 4.27002 6.17 4.27002H7.9C8.3 4.27002 8.86 4.06002 9.16 3.81002L10.74 2.46002C11.44 1.87002 12.57 1.87002 13.25 2.46002L14.83 3.81002C15.13 4.06002 15.7 4.27002 16.1 4.27002H17.8C18.86 4.27002 19.73 5.14002 19.73 6.20002V7.90002C19.73 8.30002 19.94 8.86002 20.19 9.16002L21.54 10.74C22.13 11.44 22.13 12.57 21.54 13.25L20.19 14.83C19.94 15.13 19.73 15.69 19.73 16.09V17.79C19.73 18.85 18.86 19.72 17.8 19.72H16.1C15.7 19.72 15.14 19.93 14.84 20.18L13.26 21.53C12.56 22.12 11.43 22.12 10.75 21.53L9.17 20.18C8.87 19.93 8.3 19.72 7.91 19.72H6.17C5.11 19.72 4.24 18.85 4.24 17.79V16.08C4.24 15.69 4.04 15.12 3.79 14.83L2.44 13.24C1.86 12.55 1.86 11.43 2.44 10.74L3 10.08"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11.9945 16H12.0035"
        stroke="#292D32"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
