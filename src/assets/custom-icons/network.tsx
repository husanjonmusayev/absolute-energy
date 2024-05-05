import { FC } from "react";

export const Network: FC<IIconProps> = ({
  className,
  width = 24,
  height = 24,
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.25 35C27.6307 35 28.75 33.8807 28.75 32.5C28.75 31.1193 27.6307 30 26.25 30C24.8693 30 23.75 31.1193 23.75 32.5C23.75 33.8807 24.8693 35 26.25 35Z"
        fill="#CD02EE"
      />
      <path
        d="M26.25 10C27.6307 10 28.75 8.88071 28.75 7.5C28.75 6.11929 27.6307 5 26.25 5C24.8693 5 23.75 6.11929 23.75 7.5C23.75 8.88071 24.8693 10 26.25 10Z"
        fill="#CD02EE"
      />
      <path
        d="M5 22.5C6.38071 22.5 7.5 21.3807 7.5 20C7.5 18.6193 6.38071 17.5 5 17.5C3.61929 17.5 2.5 18.6193 2.5 20C2.5 21.3807 3.61929 22.5 5 22.5Z"
        fill="#CD02EE"
      />
      <path
        d="M35 15C33.8945 15.0033 32.8214 15.3732 31.9487 16.0518C31.076 16.7305 30.453 17.6794 30.1775 18.75H24.8225C24.6455 18.0451 24.3156 17.3877 23.8562 16.8244C23.3969 16.2611 22.8193 15.8058 22.1644 15.4905C21.5095 15.1753 20.7933 15.0079 20.0665 15.0003C19.3397 14.9926 18.6202 15.1449 17.9588 15.4463L13.9875 10.4838C14.6407 9.62587 14.9962 8.57827 15 7.5C15 6.5111 14.7068 5.5444 14.1574 4.72215C13.6079 3.89991 12.8271 3.25904 11.9134 2.8806C10.9998 2.50217 9.99446 2.40315 9.02455 2.59608C8.05465 2.789 7.16373 3.26521 6.46447 3.96447C5.76521 4.66373 5.289 5.55465 5.09608 6.52455C4.90315 7.49446 5.00217 8.49979 5.3806 9.41342C5.75904 10.3271 6.39991 11.1079 7.22215 11.6574C8.0444 12.2068 9.0111 12.5 10 12.5C10.7048 12.4984 11.4012 12.3462 12.0425 12.0538L16.0125 17.0163C15.3563 17.8725 15.0006 18.9212 15.0006 20C15.0006 21.0788 15.3563 22.1275 16.0125 22.9838L12.0425 27.9463C11.4012 27.6538 10.7048 27.5016 10 27.5C9.0111 27.5 8.0444 27.7932 7.22215 28.3427C6.39991 28.8921 5.75904 29.673 5.3806 30.5866C5.00217 31.5002 4.90315 32.5056 5.09608 33.4755C5.289 34.4454 5.76521 35.3363 6.46447 36.0355C7.16373 36.7348 8.05465 37.211 9.02455 37.4039C9.99446 37.5969 10.9998 37.4978 11.9134 37.1194C12.8271 36.741 13.6079 36.1001 14.1574 35.2779C14.7068 34.4556 15 33.4889 15 32.5C14.9963 31.4217 14.6408 30.3741 13.9875 29.5163L17.9575 24.5538C18.619 24.8553 19.3387 25.0078 20.0656 25.0002C20.7925 24.9927 21.5089 24.8254 22.164 24.5101C22.819 24.1949 23.3967 23.7394 23.8562 23.176C24.3156 22.6126 24.6455 21.9551 24.8225 21.25H30.1775C30.4129 22.1532 30.8968 22.9723 31.5743 23.6143C32.2518 24.2563 33.0958 24.6954 34.0103 24.8819C34.9249 25.0683 35.8734 24.9946 36.7482 24.6691C37.6229 24.3436 38.3889 23.7793 38.9591 23.0403C39.5293 22.3014 39.8808 21.4173 39.9738 20.4886C40.0668 19.5599 39.8976 18.6237 39.4853 17.7864C39.0729 16.949 38.4341 16.244 37.6413 15.7515C36.8484 15.259 35.9334 14.9986 35 15ZM7.5 7.5C7.5 7.00555 7.64662 6.5222 7.92133 6.11108C8.19603 5.69995 8.58648 5.37952 9.04329 5.1903C9.50011 5.00108 10.0028 4.95158 10.4877 5.04804C10.9727 5.1445 11.4181 5.3826 11.7678 5.73224C12.1174 6.08187 12.3555 6.52732 12.452 7.01228C12.5484 7.49723 12.4989 7.9999 12.3097 8.45671C12.1205 8.91353 11.8001 9.30397 11.3889 9.57868C10.9778 9.85338 10.4945 10 10 10C9.33716 9.99934 8.70166 9.73574 8.23297 9.26704C7.76427 8.79834 7.50066 8.16284 7.5 7.5ZM10 35C9.50555 35 9.0222 34.8534 8.61108 34.5787C8.19995 34.304 7.87952 33.9135 7.6903 33.4567C7.50108 32.9999 7.45158 32.4972 7.54804 32.0123C7.6445 31.5273 7.8826 31.0819 8.23223 30.7322C8.58187 30.3826 9.02732 30.1445 9.51228 30.048C9.99723 29.9516 10.4999 30.0011 10.9567 30.1903C11.4135 30.3795 11.804 30.7 12.0787 31.1111C12.3534 31.5222 12.5 32.0056 12.5 32.5C12.4993 33.1628 12.2357 33.7983 11.767 34.267C11.2983 34.7357 10.6628 34.9993 10 35ZM20 22.5C19.5055 22.5 19.0222 22.3534 18.6111 22.0787C18.2 21.804 17.8795 21.4135 17.6903 20.9567C17.5011 20.4999 17.4516 19.9972 17.548 19.5123C17.6445 19.0273 17.8826 18.5819 18.2322 18.2322C18.5819 17.8826 19.0273 17.6445 19.5123 17.548C19.9972 17.4516 20.4999 17.5011 20.9567 17.6903C21.4135 17.8795 21.804 18.2 22.0787 18.6111C22.3534 19.0222 22.5 19.5056 22.5 20C22.4993 20.6628 22.2357 21.2983 21.767 21.767C21.2983 22.2357 20.6628 22.4993 20 22.5ZM35 22.5C34.5055 22.5 34.0222 22.3534 33.6111 22.0787C33.2 21.804 32.8795 21.4135 32.6903 20.9567C32.5011 20.4999 32.4516 19.9972 32.548 19.5123C32.6445 19.0273 32.8826 18.5819 33.2322 18.2322C33.5819 17.8826 34.0273 17.6445 34.5123 17.548C34.9972 17.4516 35.4999 17.5011 35.9567 17.6903C36.4135 17.8795 36.804 18.2 37.0787 18.6111C37.3534 19.0222 37.5 19.5056 37.5 20C37.4993 20.6628 37.2357 21.2983 36.767 21.767C36.2983 22.2357 35.6628 22.4993 35 22.5Z"
        fill="#CD02EE"
      />
    </svg>
  );
};