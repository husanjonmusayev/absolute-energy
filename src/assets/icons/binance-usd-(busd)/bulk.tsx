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
        d="M11.3999 2.34999L6.25986 7.49999C6.05986 7.69999 6.05986 8.00999 6.25986 8.20999L7.98986 9.93999C8.18986 10.14 8.49986 10.14 8.69986 9.93999L13.8499 4.78999C14.0499 4.58999 14.0499 4.27999 13.8499 4.07999L12.1199 2.34999C11.9099 2.15999 11.5999 2.15999 11.3999 2.34999Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M15.2999 6.26001L6.25986 15.3C6.05986 15.5 6.05986 15.81 6.25986 16.01L7.98986 17.74C8.18986 17.94 8.49986 17.94 8.69986 17.74L17.7499 8.69001C17.9499 8.49001 17.9499 8.18001 17.7499 7.98001L16.0199 6.25001C15.8199 6.06001 15.4999 6.06001 15.2999 6.26001Z"
        fill="#292D32"
      />
      <path
        d="M19.2098 10.16L10.1598 19.21C9.95977 19.41 9.95977 19.72 10.1598 19.92L11.8898 21.65C12.0898 21.85 12.3998 21.85 12.5998 21.65L21.6498 12.6C21.8498 12.4 21.8498 12.09 21.6498 11.89L19.9198 10.16C19.7198 9.96001 19.3998 9.96001 19.2098 10.16Z"
        fill="#292D32"
      />
      <path
        opacity="0.4"
        d="M4.08996 13.84L2.35996 12.11C2.15996 11.91 2.15996 11.6 2.35996 11.4L4.08996 9.66999C4.28996 9.46999 4.59996 9.46999 4.79996 9.66999L6.52996 11.4C6.72996 11.6 6.72996 11.91 6.52996 12.11L4.79996 13.84C4.59996 14.04 4.27996 14.04 4.08996 13.84Z"
        fill="#292D32"
      />
    </svg>
  );
};
