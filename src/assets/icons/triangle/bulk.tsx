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
        d="M12 2.59003V13.61L2.65 20.15C1.8 19.14 1.75 17.61 2.7 15.9L5.82 10.29L8.76 5.00003C9.65 3.40003 10.82 2.59003 12 2.59003Z"
        fill="#292D32"
      />
      <path
        opacity="0.6"
        d="M21.35 20.15C20.7 20.94 19.57 21.41 18.06 21.41H5.94002C4.43002 21.41 3.30002 20.94 2.65002 20.15L12 13.61L21.35 20.15Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M21.35 20.15L12 13.61V2.59003C13.18 2.59003 14.35 3.40003 15.24 5.00003L18.18 10.29L21.3 15.9C22.25 17.61 22.2 19.14 21.35 20.15Z"
        fill="#292D32"
      />
    </svg>
  );
};
