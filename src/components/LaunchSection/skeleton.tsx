import React from "react";
const dummyArray = Array(10).fill(1);

const Skeleton = () => {
  return (
    <>
      {dummyArray.map((_: number, idx: number) => (
        <div key={idx} className="flex flex-col h-250">
          <div
            className={`relative flex w-full h-full my-2 p-4 justify-between items-center border-solid border-y-2 rounded-lg border-slate-200 hover:shadow-lg bg-slate-100 `}
          >
            <div className="animate-pulse w-1/12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4 mx-auto"></div>
            <div className="animate-pulse w-1/12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4 mx-auto"></div>
            <div className="animate-pulse w-1/12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4 mx-auto"></div>
            <div className="animate-pulse w-1/12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4 mx-auto"></div>
            <div className="animate-pulse w-1/12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4 mx-auto"></div>
            <div className="animate-pulse w-1/12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4 mx-auto"></div>
            <div className="animate-pulse w-1/12 h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 mb-4 mx-auto"></div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Skeleton;
