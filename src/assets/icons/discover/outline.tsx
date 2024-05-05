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
        d="M4.90999 22.82C3.81999 22.82 2.88999 22.47 2.20999 21.79C1.23999 20.82 0.939994 19.34 1.36999 17.62L3.84999 7.69001C4.27999 5.97001 5.95999 4.30001 7.66999 3.87001L17.6 1.39001C19.32 0.960013 20.8 1.26001 21.77 2.23001C22.74 3.20001 23.04 4.68001 22.61 6.40001L20.13 16.33C19.7 18.05 18.02 19.72 16.31 20.15L6.37999 22.63C5.86999 22.75 5.37999 22.82 4.90999 22.82ZM17.98 2.83001L8.04999 5.32001C6.87999 5.61001 5.60999 6.88001 5.30999 8.05001L2.82999 17.98C2.52999 19.17 2.68999 20.14 3.26999 20.73C3.84999 21.31 4.82999 21.47 6.01999 21.17L15.95 18.69C17.12 18.4 18.39 17.12 18.68 15.96L21.16 6.03001C21.46 4.84001 21.3 3.87001 20.72 3.28001C20.14 2.69001 19.17 2.54001 17.98 2.83001Z"
        fill="#292D32"
      />
      <path
        d="M12 16.25C9.66 16.25 7.75 14.34 7.75 12C7.75 9.66 9.66 7.75 12 7.75C14.34 7.75 16.25 9.66 16.25 12C16.25 14.34 14.34 16.25 12 16.25ZM12 9.25C10.48 9.25 9.25 10.48 9.25 12C9.25 13.52 10.48 14.75 12 14.75C13.52 14.75 14.75 13.52 14.75 12C14.75 10.48 13.52 9.25 12 9.25Z"
        fill="#292D32"
      />
    </svg>
  );
};
