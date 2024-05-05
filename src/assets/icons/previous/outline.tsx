import { FC } from "react";



export const Outline: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M17.6901 20.09C17.1201 20.09 16.5601 19.94 16.0401 19.64L7.75009 14.86C6.72009 14.26 6.1001 13.19 6.1001 12C6.1001 10.81 6.72009 9.74 7.75009 9.14L16.0401 4.35997C17.0701 3.75997 18.3001 3.75997 19.3401 4.35997C20.3801 4.95997 20.9901 6.01999 20.9901 7.21999V16.79C20.9901 17.98 20.3701 19.05 19.3401 19.65C18.8201 19.94 18.2601 20.09 17.6901 20.09ZM17.6901 5.40999C17.3801 5.40999 17.0701 5.48998 16.7901 5.64998L8.50009 10.43C7.94009 10.76 7.6001 11.34 7.6001 11.99C7.6001 12.64 7.94009 13.22 8.50009 13.55L16.7901 18.33C17.3501 18.66 18.0301 18.66 18.5901 18.33C19.1501 18 19.4901 17.42 19.4901 16.77V7.2C19.4901 6.55 19.1501 5.97 18.5901 5.64C18.3101 5.5 18.0001 5.40999 17.6901 5.40999Z"
        fill="#292D32"
      />
      <path
        d="M3.75977 18.93C3.34977 18.93 3.00977 18.59 3.00977 18.18V5.82001C3.00977 5.41001 3.34977 5.07001 3.75977 5.07001C4.16977 5.07001 4.50977 5.41001 4.50977 5.82001V18.18C4.50977 18.59 4.16977 18.93 3.75977 18.93Z"
        fill="#292D32"
      />
    </svg>
  );
};