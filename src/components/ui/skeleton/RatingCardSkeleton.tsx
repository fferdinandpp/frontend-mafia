import React from "react";

const RatingCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center w-[206px] h-[229px] rounded-lg bg-gray-800 animate-pulse">
      <div className="h-full flex flex-col items-center justify-center">
        <div className="bg-gray-700 w-16 h-16 rounded-full"></div>
        <div className="h-5 bg-gray-700 rounded w-1/2 mt-1"></div>
        <div className="flex flex-col items-center w-full px-5 mt-1 space-y-1">
          <div className="h-4 bg-gray-700 rounded w-full"></div>
          <div className="h-4 bg-gray-700 rounded w-3/4"></div>
        </div>

        <div className="h-5 bg-gray-700 rounded w-1/2 mt-3"></div>
      </div>
    </div>
  );
};

export default RatingCardSkeleton;
