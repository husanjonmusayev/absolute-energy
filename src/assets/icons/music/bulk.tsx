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
        d="M10.2899 10.34V18.41C10.2899 20.39 8.66986 22 6.69986 22C4.71986 22 3.10986 20.39 3.10986 18.41C3.10986 16.44 4.71986 14.83 6.69986 14.83C7.52986 14.83 8.27986 15.12 8.88986 15.59V10.74L10.2899 10.34Z"
        fill="#292D32"
      />
      <path
        d="M20.89 7.31995V16.4799C20.89 18.4599 19.28 20.0699 17.3 20.0699C15.33 20.0699 13.71 18.4599 13.71 16.4799C13.71 14.5099 15.33 12.8999 17.3 12.8999C18.14 12.8999 18.89 13.1899 19.5 13.6699V7.71995L20.89 7.31995Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M20.8901 5.17995V7.31995L8.89014 10.7399V6.74995C8.89014 5.27995 9.78014 4.13995 11.1901 3.75995L16.9701 2.17995C18.1401 1.85995 19.1301 1.96995 19.8301 2.50995C20.5401 3.03995 20.8901 3.93995 20.8901 5.17995Z"
        fill="#292D32"
      />
    </svg>
  );
};
