import { FC } from "react";




export const TwoTOne: FC<IIconProps> = ({ className, width=24, height=24 }) => {
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
        d="M14.22 9.78L12 10.89m0 0L9.78 9.78M12 10.89v2.78m2.22-10.56L12 2 9.78 3.11M5.33 18.67l-2.22-1.11v-2.78m15.56 3.89l2.22-1.11v-2.78"
      ></path>
      <g
        stroke="#292D32"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        opacity="0.4"
      >
        <path d="M20.89 6.91l-2.22 1.11M20.89 6.91L18.67 5.8M20.89 6.91v2.78M3.11 6.91L5.33 5.8M3.11 6.91l2.22 1.11M3.11 6.91v2.78M12 22.47l-2.22-1.11M12 22.47l2.22-1.11M12 22.47v-2.78"></path>
      </g>
    </svg>
  );
};
