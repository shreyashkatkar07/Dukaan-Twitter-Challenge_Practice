/* eslint-disable react/prop-types */
export const SimpleRevenueCard = ({ title, amount, orderCount }) => {
  return (
    <div className="flex flex-col flex-grow bg-white-200 rounded-lg shadow-md p-4 min-w-[300px] h-28">
      <div className="flex">
        <p className="text-gray-700 font-normal text-base pe-2">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 text-gray-700 pl-1 cursor-pointer"
        >
          <title>How it works ?</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div className="flex justify-between pt-4">
        <p className="font-medium text-3xl leading-9">&#x20B9;{amount}</p>
        <div>
          {orderCount ? (
            <div className="flex pt-2">
              <div className="underline font-medium text-base text-[#146EB4]">
                {orderCount} Orders
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-5 pt-1 text-[#146EB4]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export const ColouredRevenueCard = ({ title, amount, orderCount, date }) => {
  return (
    <div className="flex flex-col flex-grow hover:bg-[#0E4F82] bg-[#146EB4] text-white rounded-lg shadow-sm min-w-[300px]">
      <div className="flex px-4 pt-4">
        <p className="font-normal text-base leading-6 pe-2">{title}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 pl-1 cursor-pointer"
        >
          <title>How it works ?</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
          />
        </svg>
      </div>
      <div className="flex justify-between align-middle p-4">
        <p className="font-medium text-3xl leading-9">&#x20B9;{amount}</p>
        <div>
          {orderCount ? (
            <div className="flex pt-2">
              <div className="underline font-medium text-base">
                {orderCount} Orders
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3}
                stroke="currentColor"
                className="size-5 pt-1"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          ) : null}
        </div>
      </div>
      <div className="flex justify-between bg-[#0E4F82] text-[#F2F2F2] rounded-md mt-2 py-2 px-6">
        <p className="font-medium">Next Payment Date: </p>
        <p className="font-medium">{date}</p>
      </div>
    </div>
  );
};
