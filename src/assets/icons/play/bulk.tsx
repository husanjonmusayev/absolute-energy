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
        d="M18.7 8.98001L4.14 17.71C4.05 17.38 4 17.03 4 16.67V7.33001C4 4.25001 7.33 2.33001 10 3.87001L14.04 6.20001L18.09 8.54001C18.31 8.67001 18.52 8.81001 18.7 8.98001Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M18.0902 15.46L14.0402 17.8L10.0002 20.13C8.09022 21.23 5.84021 20.57 4.72021 18.96L5.14021 18.71L19.5802 10.05C20.5802 11.85 20.0902 14.31 18.0902 15.46Z"
        fill="#292D32"
      />
    </svg>
  );
};
