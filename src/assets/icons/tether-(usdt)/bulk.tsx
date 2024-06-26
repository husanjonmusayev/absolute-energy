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
      <path d="M24 0H0V24H24V0Z" fill="white" />
      <path
        opacity="0.4"
        d="M7.4702 3.35001H16.5302C17.5902 3.35001 18.8402 4.12001 19.3102 5.07001L21.7102 9.89001C22.2902 11.05 21.9702 12.7 21.0202 13.57L14.0902 19.86C12.9402 20.9 11.0702 20.9 9.9202 19.86L2.9902 13.57C2.0302 12.7 1.7202 11.05 2.3002 9.89001L4.7002 5.07001C5.1602 4.12001 6.4102 3.35001 7.4702 3.35001Z"
        fill="#292D32"
      />
      <path
        d="M16 7.75H8C7.59 7.75 7.25 8.09 7.25 8.5C7.25 8.91 7.59 9.25 8 9.25H11.25V14.5C11.25 14.91 11.59 15.25 12 15.25C12.41 15.25 12.75 14.91 12.75 14.5V9.25H16C16.41 9.25 16.75 8.91 16.75 8.5C16.75 8.09 16.41 7.75 16 7.75Z"
        fill="#292D32"
      />
    </svg>
  );
};
