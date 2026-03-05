import React from "react";

const AccountCardSkeleton = () => {
  return (
    <div className="flex flex-col items-center w-full animate-pulse">
      <div className="glass-card w-full pb-2 rounded-xl overflow-hidden">
        <div className="w-full bg-gray-700 aspect-402/504 rounded-t-xl"></div>

        <div className="my-5">
          <div className="w-11/12 mx-auto space-y-3">
            <div className="h-8 bg-gray-700 rounded w-3/4"></div>

            <div className="h-6 bg-gray-700 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto flex justify-center -mt-5">
        <div className="bg-gray-600 h-12 w-1/2 rounded-lg"></div>
      </div>
    </div>
  );
};

export default AccountCardSkeleton;
