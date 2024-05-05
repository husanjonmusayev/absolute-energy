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
        d="M15.1199 10.3099C15.1199 12.0299 13.7299 13.4299 11.9999 13.4299C10.2699 13.4299 8.87988 12.0399 8.87988 10.3099C8.87988 8.57994 10.2799 7.18994 11.9999 7.18994C12.3399 7.18994 12.6699 7.23994 12.9699 7.33994"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M5.97996 4.30006C10.35 0.190061 18.82 1.60006 20.38 8.51006C21.53 13.5901 18.37 17.8901 15.6 20.5501C13.59 22.4901 10.41 22.4901 8.38996 20.5501C5.62996 17.8801 2.45996 13.5801 3.61996 8.50006"
        stroke="#292D32"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
