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
      <path d="M13.1901 16.29H10.8101V17.71H13.1901V16.29Z" fill="#292D32" />
      <path
        d="M7.95001 2.71C7.95001 3.11 7.63001 3.43 7.24001 3.43H6.29001C4.58001 3.43 3.19001 4.82 3.19001 6.52V12.4C2.34001 12.83 1.76001 13.71 1.76001 14.73V6.52C1.76001 4.03 3.79001 2 6.29001 2H7.24001C7.63001 2 7.95001 2.32 7.95001 2.71Z"
        fill="#292D32"
      />
      <path
        d="M22.24 6.52V14.73C22.24 13.71 21.66 12.83 20.81 12.4V6.52C20.81 4.82 19.42 3.43 17.71 3.43H16.76C16.37 3.43 16.05 3.11 16.05 2.71C16.05 2.32 16.37 2 16.76 2H17.71C20.21 2 22.24 4.03 22.24 6.52Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M10.81 14.73V19.38C10.81 20.83 9.63001 22 8.19001 22H4.38001C2.94001 22 1.76001 20.83 1.76001 19.38V14.73C1.76001 13.71 2.34001 12.83 3.19001 12.4C3.55001 12.21 3.95001 12.11 4.38001 12.11H8.19001C9.63001 12.11 10.81 13.28 10.81 14.73Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M22.2399 14.73V19.38C22.2399 20.83 21.0599 22 19.6199 22H15.8099C14.3699 22 13.1899 20.83 13.1899 19.38V14.73C13.1899 13.28 14.3699 12.11 15.8099 12.11H19.6199C20.0499 12.11 20.4499 12.21 20.8099 12.4C21.6599 12.83 22.2399 13.71 22.2399 14.73Z"
        fill="#292D32"
      />
    </svg>
  );
};
