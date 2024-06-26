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
        d="M21.0801 8.58003V15.42C21.0801 16.54 20.4802 17.58 19.5102 18.15L13.5702 21.58C12.6002 22.14 11.4002 22.14 10.4202 21.58L4.48016 18.15C3.51016 17.59 2.91016 16.55 2.91016 15.42V8.58003C2.91016 7.46003 3.51016 6.41999 4.48016 5.84999L10.4202 2.42C11.3902 1.86 12.5902 1.86 13.5702 2.42L19.5102 5.84999C20.4802 6.41999 21.0801 7.45003 21.0801 8.58003Z"
        fill="#292D32"
      />
      <path
        d="M9.75 12V10.8C9.75 9.26001 10.84 8.63005 12.17 9.40005L13.21 10L14.25 10.6C15.58 11.37 15.58 12.63 14.25 13.4L13.21 14L12.17 14.6C10.84 15.37 9.75 14.74 9.75 13.2V12Z"
        fill="#292D32"
      />
    </svg>
  );
};
