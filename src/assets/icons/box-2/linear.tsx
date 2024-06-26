import { FC } from "react";



export const Linear: FC<IIconProps> = ({ className, width=24, height=24 }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M18.67 18.67l2.22-1.11v-2.78m-6.67-5L12 10.89l2.22-1.11zM12 10.89L9.78 9.78 12 10.89zm0 0v2.78-2.78zm8.89-4.45l-2.22 1.11 2.22-1.11zm0 0l-2.22-1.11 2.22 1.11zm0 0v2.78-2.78zm-6.67-3.33L12 2 9.78 3.11h4.44zM3.11 6.44l2.22-1.11-2.22 1.11zm0 0l2.22 1.11-2.22-1.11zm0 0v2.78-2.78zM12 22l-2.22-1.11L12 22zm0 0l2.22-1.11L12 22zm0 0v-2.78V22zm-6.67-3.33l-2.22-1.11v-2.78l2.22 3.89z"
      ></path>
    </svg>
  );
};
