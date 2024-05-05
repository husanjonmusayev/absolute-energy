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
        d="M17.49 9.60001L5.6 16.77C4.9 17.19 4 16.69 4 15.87V7.87001C4 4.38001 7.77 2.20001 10.8 3.94001L15.39 6.58001L17.48 7.78001C18.17 8.19001 18.18 9.19001 17.49 9.60001Z"
        fill="#292D32"
      />
      <path
        d="M18.0898 15.46L14.0398 17.8L9.99981 20.13C8.54981 20.96 6.90981 20.79 5.71981 19.95C5.13981 19.55 5.20981 18.66 5.81981 18.3L18.5298 10.68C19.1298 10.32 19.9198 10.66 20.0298 11.35C20.2798 12.9 19.6398 14.57 18.0898 15.46Z"
        fill="#292D32"
      />
    </svg>
  );
};
